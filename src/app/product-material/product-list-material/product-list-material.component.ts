import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-material',
  templateUrl: './product-list-material.component.html',
  styleUrls: ['./product-list-material.component.css']
})
export class ProductListMaterialComponent implements OnInit {

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
