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
    {title : 'Identity', key: 'id', isSortable: true}, 
    {title : 'Name'}, 
    {title : 'Production Date', key: 'productionDate', isSortable: true},
    {title : 'Price', key: 'price', isSortable: true},  
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

  sortBy(columnName: string) {
    if (this.query.sortBy === columnName) 
    {
        this.query.isSortAscending = !this.query.isSortAscending; 
    } 
    else 
    {
        this.query.sortBy = columnName;
        this.query.isSortAscending = true;
    }
    this.populateList();
  }

}
