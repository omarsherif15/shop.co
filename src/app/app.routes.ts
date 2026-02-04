import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
];
