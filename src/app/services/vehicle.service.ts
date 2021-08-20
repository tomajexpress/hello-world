import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url = 'http://localhost:5007/api';
  constructor(private http: HttpClient) { }

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

}
