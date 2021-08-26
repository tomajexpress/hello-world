import { SaveProduct } from './../Models/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  product: SaveProduct = {};
  productId: number = 0;

  productGroups: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,  
    private productService: ProductService,
    private notifyService : NotificationService) {
      route.params.subscribe(p => {
        this.productId = +p['id'];
      });
  }

  ngOnInit(): void {
    this.getProductGroups();

    if (this.productId) {
      this.productService.getProduct(this.productId)
      .subscribe(
        res => this.product = res)
      }
  }

  submit(){
    this.productService.add(this.product).subscribe(
      res =>  
      {
          this.notifyService.showSuccess("Product Saved.","Success"),
          this.router.navigate(['/products'])
      }      
    );
  }

  getProductGroups(){
    return this.productService.getProductGroups()
    .subscribe(
      res => this.productGroups = res
    );
  }

}
