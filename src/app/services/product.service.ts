import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getProductGroups(){
    return this.http.get<any[]>(this.url+"/Product/GetAllProductGroups")
  }

  add(product: any){
    return this.http.post(this.url+"/Product/Add", product);
  }
  
  delete(id: any){
    return this.http.delete(this.url+"/Product/Delete/"+id);
  }

}