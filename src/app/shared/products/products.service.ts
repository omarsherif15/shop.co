import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  private featuredProducts = signal<Product[]>([]);
  // Read only signal
  products = this.featuredProducts.asReadonly();

  private apiUrl = 'https://fakestoreapi.com/';

  getFeaturedProducts(limit?: number) {
    return this.httpClient.get<Product[]>(this.apiUrl + 'products').pipe(
      map((resData) => resData.slice(0, limit)),
      catchError((errorRes) => throwError(() => new Error('Failed to load places.'))),
    );
  }

  getRelatedProducts(category: string) {
    console.log(category);
    return this.httpClient.get<Product[]>(this.apiUrl + 'products').pipe(
      map((resData) => {
        console.log(resData);
        return resData.filter((product) => product.category === "men's clothing");
      }),
      catchError((errorRes) => throwError(() => new Error('Failed to load places.'))),
    );
  }

  getSingleProduct(id: number) {
    const discountPercentage: number = Math.random() * 30; // Random discount between 0% and 30%
    return this.httpClient.get<Product>(this.apiUrl + 'products/' + id).pipe(
      map((resData) => ({
        ...resData,
        newPrice: (resData.price * discountPercentage) / 100,
        discountPercentage: discountPercentage.toFixed(2),
      })),
      catchError((errorRes) => throwError(() => new Error('Failed to load product.'))),
    );
  }
}
