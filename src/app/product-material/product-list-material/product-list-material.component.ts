import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-material',
  templateUrl: './product-list-material.component.html',
  styleUrls: ['./product-list-material.component.css']
})
export class ProductListMaterialComponent implements OnInit {

  queryResult: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  private readonly PAGE_SIZE = 5; 

  query: any = {
    pageSize: this.PAGE_SIZE
  };

  matColumns: string[] = ['id', 'name', 'productionDate', 'price', 'productGroupName'];

  cols = [
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




const ELEMENT_DATA:any [] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



