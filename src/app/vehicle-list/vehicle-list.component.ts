import { VehicleService } from './../services/vehicle.service';
import { KeyValuePair, Vehicle } from './../Models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  private readonly PAGE_SIZE = 3; 

  query: any = {
    pageSize: this.PAGE_SIZE
  };

  queryResult: any = {};

  makes: KeyValuePair[] = [];

  vehicles : Vehicle[] = [];

  columns = [
    { title: 'Id' },
    { title: 'Contact Name', key: 'contactName', isSortable: true },
    { title: 'Make', key: 'make', isSortable: true },
    { title: 'Model', key: 'model', isSortable: true },
    { }
  ];
  
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getMakes()
    .subscribe(makes => this.makes = makes);

    this.populateVehicles();
  }


  private populateVehicles() {
    this.vehicleService.getVehiclesByFilter(this.query)
      .subscribe(result => this.queryResult = result);
  }

  onFilterChange() {
    this.query.page = 1; 
    this.populateVehicles();
  }

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE
    };
    this.populateVehicles();
  }

  onPageChange(page: any) {
    this.query.page = page; 
    this.populateVehicles();
  }
}
