import { inject, Injectable, signal } from '@angular/core';
import { Product, ProductsService } from '../../shared/products/products.service';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, forkJoin, of } from 'rxjs';

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartItem[];
}

export interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly productService = inject(ProductsService);
  private readonly http = inject(HttpClient);
  private API_URL = 'https://fakestoreapi.com/carts';

  private userCart = signal<Cart | null>(null);
  readonly userCart$ = this.userCart.asReadonly();

  getCartByUserId(userId: number = 1) {
    return this.http.get<Cart>(`${this.API_URL}/${userId}`).pipe(
      switchMap((cart) => {
        if (cart.products.length === 0) {
          this.userCart.set(cart);
          return of(cart);
        }

        const productRequests = cart.products.map((item) =>
          this.productService
            .getSingleProduct(item.productId)
            .pipe(map((product) => ({ ...item, product }))),
        );

        return forkJoin(productRequests).pipe(
          map((enrichedProducts) => ({
            ...cart,
            products: enrichedProducts,
          })),
          map((enrichedCart) => {
            this.userCart.set(enrichedCart);
            return enrichedCart;
          }),
        );
      }),
    );
  }
}
