import { ProductService } from './../services/product.service';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  queryResult: any;

  columns = [
    {title : 'Identity'}, 
    {title : 'Name'}, 
    {title : 'Production Date'},
    {title : 'Price'},  
    {title : 'Product Group Name'}, 
  ];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.populateList();
  }

/*   ngAfterContentInit(){
    this.populateList();
  } */
  
  populateList(){
    this.productService.getAllProducts().subscribe(
      res => { this.queryResult = res; }
    );
  }



}
