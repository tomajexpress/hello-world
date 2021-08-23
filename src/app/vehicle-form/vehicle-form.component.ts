import { VehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicle: any = {
    features: [],
    modelId:null,
    makeId: null,
    contact: {},
    isRegistered: false
  };
  makes: any[] = [];
  models: any[] = [];
  features: any[] = [];

  title = 'toaster-not';


  constructor(private vehicleService: VehicleService, 
    private notifyService : NotificationService) { 
    
  }

  ngOnInit(): void {
    this.vehicleService.getMakes().subscribe(makes => { 
        this.makes = makes;
        console.log(this.makes); 
      });

      this.vehicleService.getFeatures().subscribe(f => { 
        this.features = f;
      });
  }

  onMakeChange(){
    var selectedMake = this.makes.find(m=> m.id == this.vehicle.makeId)

    this.models = selectedMake ? selectedMake.models : [];

    delete this.vehicle.modelId;

    this.notifyService.showSuccess("Selected Make: ", this.vehicle.makeId)

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
    this.vehicleService.create(this.vehicle)
    .subscribe(
      x=> console.log(x), 
      err=> {
          this.notifyService.showError("Unexpected Error!", "Error")
      }
      );

    this.notifyService.showSuccess("Vehicle Saved.","Success")
  }

}
