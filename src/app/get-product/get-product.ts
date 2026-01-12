import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-get-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './get-product.html',
})
export class GetProduct {
  products:any[] = [];
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getAllProducts().subscribe((data:any)=>{
      this.products = data;
    })
  }
}
