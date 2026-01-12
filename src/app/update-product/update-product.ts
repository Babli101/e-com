import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../services/product'; 

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct implements OnInit {

  productId!: number;   // ✅ number
  editForm!: FormGroup;

  existingImage: string = 'https://via.placeholder.com/500';
  imagePreview: string | null = null;
  selectedImageFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // ✅ route param → number
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.editForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      brand: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required],
      stock: ['', Validators.required],
    });

    // 🔹 Dummy data (later API se load hoga)
    this.editForm.patchValue({
      name: 'iPhone 14',
      description: 'Latest Apple smartphone',
      brand: 'Apple',
      price: 69999,
      category: 'mobile',
      stock: 'In Stock',
    });
  }

  // 🔹 Image change
  onImageChange(event: any): void {
    const file = event.target.files?.[0];
    if (!file) return;

    this.selectedImageFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // 🔹 UPDATE
  updateProduct(): void {
    if (this.editForm.invalid) return;

    const updatedProduct = {
      ...this.editForm.value,
      image: this.selectedImageFile || this.existingImage,
    };

    this.productService
      .updateProduct(this.productId, updatedProduct)
      .subscribe({
        next: () => alert('✅ Product updated successfully'),
        error: (err) => console.error('❌ Update error', err),
      });
  }

  // 🔹 DELETE
  deleteProduct(): void {
    this.productService.deleteProduct(this.productId).subscribe({
      next: () => alert('🗑️ Product deleted successfully'),
      error: (err) => console.error('❌ Delete error', err),
    });
  }
}
