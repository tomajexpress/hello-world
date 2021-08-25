import { Vehicle } from './../Models/vehicle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url = 'http://localhost:5007/api';
  constructor(private http: HttpClient) { }

  getVehicle(id: any)
  {
    return this.http.get(this.url+'/vehicles/'+id);
  }

  getVehicles()
  {
    return this.http.get(this.url+'/vehicles/GetAllVehicles');
  }

  getMakes()
  {
    return this.http.get<any[]>(this.url+'/makes');
  }

  getFeatures()
  {
    return this.http.get<any[]>(this.url+'/features');
  }

  create(vehicle: any){
    return this.http.post(this.url+'/vehicles', vehicle);
  }

  update(vehicle : any){
    return this.http.put(this.url+'/vehicles/'+vehicle.id, vehicle);
  } 

  delete(id: number){
    return this.http.delete(this.url+'/vehicles/'+ id);
  }

  getVehiclesByFilter(filter: any) {
    return this.http.get(this.url+'/vehicles/GetVehicles' + '?' + this.toQueryString(filter));
  }

  toQueryString(obj: any) {
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined) 
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }
}
