import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from "primeng/breadcrumb";
import { LocalStorageService } from '../../core/local-storage.service';
import { Cart, CartService } from './cart.service';
import { EmptyCartComponent } from "./components/empty-cart/empty-cart.component";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [Breadcrumb, EmptyCartComponent, CartItemComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private localStorage = inject(LocalStorageService);
  isLoggedIn = this.localStorage.isLoggedIn();

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  private cartService = inject(CartService);
  cart = this.cartService.userCart$;
  
  ngOnInit() {
    this.items = [{ label: 'Cart' }];
    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.cartService.getCartByUserId(1).subscribe({
      next: (response) => {
       
      },
      error: (error) => {
        console.error('Error fetching cart data:', error);
      },
    });
  }
}
