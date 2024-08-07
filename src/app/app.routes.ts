import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetallProductComponent } from './pages/detall-product/detall-product.component';
// import * as path from 'node:path';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product/:id',
    component: DetallProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
