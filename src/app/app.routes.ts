import { CanActivateFn, Router, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { inject } from '@angular/core';
import { LocalStorageService } from './core/local-storage.service';
import { MessageService } from 'primeng/api';
import { ProfileComponent } from './pages/profile/profile.component';

const canAccessCart: CanActivateFn = (route, state) => {
  const localStorage = inject(LocalStorageService);
  const router = inject(Router);
  const messageService = inject(MessageService);
  // Implement your authentication logic here
  const isAuthenticated = localStorage.isLoggedIn();

  if (!isAuthenticated) {
    messageService.add({
      severity: 'warn',
      summary: 'Access Denied',
      detail: 'Please log in to access the cart.',
    });
    //router.navigate(['/Auth/login']);
    return false;
  }
  return isAuthenticated;
};

export const routes: Routes = [
  {
    path: 'Auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    title: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        title: 'Home | Shop.co',
        component: HomeComponent,
      },
      {
        path: 'cart',
        title: 'Your Cart | Shop.co',
        component: CartComponent,
        canActivate: [canAccessCart],
      },
      {
        path: 'profile',
        title: 'My Account | Shop.co',
        component: ProfileComponent,
        canActivate: [],
      },
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent,
      },
      {
        path: 'products/:category',
        title: 'Products | Shop.co',
        component: ProductsComponent,
      },
    ],
  },
];
