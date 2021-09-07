import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, timer } from 'rxjs';
import { catchError, retry, map, debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:5007/api';

  constructor(private http: HttpClient) {

  }

  getProduct(id: any){
    return this.http.get(this.url+ "/Product/"+ id);
  }

  getAllProducts(){
    return this.http.get(this.url + "/Product/GetAll");
  }

  getPaged(filter: any){
    return this.http.get(this.url+ "/Product/GetPaged?"+ this.toQueryString(filter));
  }

  getProductGroups(){
    return this.http.get<any[]>(this.url+"/Product/GetAllProductGroups")
  }

  add(product: any){
    return this.http.post(this.url+"/Product/Add", product);
  }

  update(id: any, product : any){
    return this.http.put(this.url+'/Product/Update/'+id, product);
  } 
  
  delete(id: any){
    return this.http.delete(this.url+"/Product/Delete/"+id);
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
