import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
})
export class ProductDetail {

  productId!: number;

  product: any;

  constructor(private route: ActivatedRoute) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    // Dummy data (later API se replace karna)
    this.product = {
      id: this.productId,
      name: 'iPhone 14',
      description: 'Latest Apple smartphone with powerful performance.',
      brand: 'Apple',
      price: 69999,
      stock: 'In Stock',
      image: 'https://via.placeholder.com/500'
    };
  }
}
