import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { AddProduct } from './add-product/add-product';
import { UpdateProduct } from './update-product/update-product';
import { GetProduct } from './get-product/get-product';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Admin },
  { path: 'addProduct', component: AddProduct },
  { path: 'updateProduct', component: UpdateProduct },
  { path: 'getProduct', component: GetProduct },
  { path: 'product/:id',component: ProductDetail},
  { path: 'updateProduct/:id', component: UpdateProduct },
];
