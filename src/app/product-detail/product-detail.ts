import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],   // 👈 THIS enables ngIf, ngClass, routerLink
  templateUrl: './product-detail.html',
})
export class ProductDetail {

  productId!: number;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));

      this.productService.getProductById(this.productId).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.log('Redirected data:', err.error);
          this.product = err.error;   // 🔥 take data from redirect response
        }
      });
    });
  }
}
