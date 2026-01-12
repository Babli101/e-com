import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  // form fields
  name: string = '';
  description: string = '';
  brand: string = '';
  price: number | null = null;
  category: string = '';
  stock: string = '';
  images: File[] = [];

  constructor(private productService: ProductService) {}

  // 🔥 image handler
  onImageSelect(event: any) {
    this.images = Array.from(event.target.files);
  }

  // 🔥 submit
  addProduct() {
    const productData = {
      name: this.name,
      description: this.description,
      brand: this.brand,
      price: this.price,
      category: this.category,
      stock: this.stock
    };

    this.productService.createProduct(productData).subscribe({
      next: (res) => {
        console.log('Product Added:', res);
        alert('Product added successfully!');
      },
      error: (err) => {
        console.error(err);
        alert('Something went wrong');
      }
    });
  }
}
