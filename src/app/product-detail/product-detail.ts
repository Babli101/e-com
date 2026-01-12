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
  products: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.productId = Number(params.get('id'));

    this.productService.getProductById(this.productId).subscribe((data: any) => {
      this.products = data;
    });
  });
}
}
