import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: any = {};

  productId: number = 0;

  constructor(    
    private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService,
    private notifyService : NotificationService) {

      route.params.subscribe(p => {
        this.productId = +p['id'];
        if (isNaN(this.productId) || this.productId <= 0) {
          router.navigate(['/products']);
          return; 
        }
      });
    }


  ngOnInit(): void {
    this.productService.getProduct(this.productId)
    .subscribe(
      res => this.product = res,
      err => {
        if (err.status == 404) {
          this.router.navigate(['/products']);
          return; 
        }
    });
  }

  delete(){
    if (confirm("Are you sure?")) {
      this.productService.delete(this.productId).subscribe(res=>{
        this.router.navigate(['/products']);
      });
    }
  }
  
}
