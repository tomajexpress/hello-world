import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form-crud',
  templateUrl: './contact-form-crud.component.html',
  styleUrls: ['./contact-form-crud.component.css']
})
export class ContactFormCrudComponent implements OnInit {
  userContacts : any;
  private url = 'http://localhost:5007/api/UserContact';

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];
  
  constructor(private http: HttpClient) { 
    this.http.get(this.url+'/GetAll').subscribe(
      response => this.userContacts = response
    );
  }

  ngOnInit(): void {
  }

  
  log(x: any)
  {
    console.log(x);
  }

  submit(frm: any)
  {
    this.http.post(this.url+'/Add', frm.form.value)
    .subscribe(reponse=>
      console.log(reponse)
    );
    console.log(frm);
    alert(frm.form.value.firstName);
  }

}
