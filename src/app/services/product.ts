import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // 🔹 CREATE
  createProduct(productData: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/create/products`,
      productData
    );
  }

  // 🔹 GET ALL
  getAllProducts(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/products`
    );
  }

  // 🔹 GET BY ID
  getProductById(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/products/${id}`
    );
  }

  // 🔹 UPDATE  ✅ number
  updateProduct(id: number, productData: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/update/products/${id}`,
      productData
    );
  }

  // 🔹 DELETE ✅ number
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/delete/products/${id}`
    );
  }
}
