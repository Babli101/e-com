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
  ) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.productId = Number(params.get('id'));
    console.log('Product ID from URL:', this.productId);

    this.productService.getProductById(this.productId).subscribe({
      next: (data) => {
        console.log('API Response:', data);   // 🔥 check this
        this.product = data;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  });
}

}
