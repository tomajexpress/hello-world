import { VehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicle: any = {};
  makes: any[] = [];
  models: any[] = [];
  features: any[] = [];

  constructor(private vehicleService: VehicleService) { 
    
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

    console.log("Vehicle: "+ this.vehicle.make);
  }

}
