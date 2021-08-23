import { SaveVehicle, Vehicle } from './../Models/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, observable } from 'rxjs';
import * as _ from 'underscore';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicle: SaveVehicle = {
    id: 0,
    features: [],
    modelId: 0,
    makeId: 0,
    contact: {name:'', phone: '', email: ''},
    isRegistered: false
  };
  makes: any[] = [];
  models: any[] = [];
  features: any[] = [];

  title = 'toaster-not';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService, 
    private notifyService : NotificationService) { 

      route.params.subscribe(p=> {
        this.vehicle.id = +p['id'];
      });
  }

  ngOnInit(): void {

    if(this.vehicle.id){
      this.vehicleService.getVehicle(this.vehicle.id).subscribe(res => {
      this.setVehicle(<Vehicle>res);
      this.populateModels();
      });
    }

    // forkJoin([
    //   this.vehicleService.getMakes(),

    // ]);

    this.vehicleService.getMakes().subscribe(makes => { 
        this.makes = makes;
        console.log(this.makes); 
      });

      this.vehicleService.getFeatures().subscribe(f => { 
        this.features = f;
      });
  }

  private populateModels(){
    var selectedMake = this.makes.find(m=> m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }

  setVehicle(v: Vehicle){
    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = _.pluck(v.features, 'id');
  }

  onMakeChange(){
    this.populateModels();
    this.notifyService.showSuccess("Selected Make: ", this.vehicle.makeId.toString())
    console.log("Vehicle: "+ this.vehicle.makeId);
  }

  onFeatureToggle(featureId: any, event: any){
    if (event.target.checked){
      this.vehicle.features.push(featureId);
    }
    else{
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }

  submit(){
    if (this.vehicle.id) {
      this.vehicleService.update(this.vehicle).subscribe(x=>{
        this.notifyService.showSuccess("Vehicle Updated.", "Success");
      });

      return;
    }
    else{
      this.vehicleService.create(this.vehicle).subscribe(
        x=> console.log(x), 
        err=> {
            this.notifyService.showError("Unexpected Error!", "Error");
        });
  
      this.notifyService.showSuccess("Vehicle Saved.","Success");
    }
  }

}
