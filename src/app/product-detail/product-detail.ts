import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
})
export class ProductDetail {

  productId!: number;
  product: any;   // 🔥 single product

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));

      this.productService.getProductById(this.productId).subscribe((data: any) => {
        this.product = data;
      });
    });
  }
}
