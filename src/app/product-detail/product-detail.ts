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

  productsId!: number;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productsId = Number(params.get('id'));

      this.productService.getProductById(this.productsId).subscribe(data => {
        this.product = data;
      });
    });
  }
}
