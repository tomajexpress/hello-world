import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  queryResult: any;

  private readonly PAGE_SIZE = 5; 

  query: any = {
    pageSize: this.PAGE_SIZE
  };

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

  
  populateList(){
    this.productService.getPaged(this.query).subscribe(
      res => { this.queryResult = res; }
    );
  }

  onFilterChange() {
    this.query.page = 1; 
    this.populateList();
  }

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE
    };
    this.populateList();
  }

  onPageChange(page: any) {
    this.query.page = page; 
    this.populateList();
  }

}
