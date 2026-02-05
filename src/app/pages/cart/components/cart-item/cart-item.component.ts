import { Component, input, signal, Signal } from '@angular/core';
import { CartItem } from '../../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  cartItem = input.required<CartItem>();

  quantity = signal(1);

  ngOnInit() {
    this.quantity.set(this.cartItem().quantity);
  }

  onRemoveFromCart() {}

  onDecreaseCartAmount() {
    if (this.quantity() > 1) {
      this.quantity.update(current => current - 1);
    }
  }

  onIncreaseCartAmount() {
    this.quantity.update(current => current + 1);
  }
}
