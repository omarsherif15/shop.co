import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { API_URL } from './constants.service';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 0,
    title: 'T-Shirt with Tabe Details',
    price: 120,
    description: 'Cotton T-Shirt with a classic fit and tabe details on the sleeves.',
    category: 'men',
    image: 't-shirt.png',
  },
  {
    id: 1,
    title: 'T-Shirt with Tabe Details',
    price: 120,
    description: 'Cotton T-Shirt with a classic fit and tabe details on the sleeves.',
    category: 'men',
    image: 't-shirt.png',
  },
  {
    id: 2,
    title: 'T-Shirt with Tabe Details',
    price: 120,
    description: 'Cotton T-Shirt with a classic fit and tabe details on the sleeves.',
    category: 'men',
    image: 't-shirt.png',
  },
  {
    id: 3,
    title: 'T-Shirt with Tabe Details',
    price: 120,
    description: 'Cotton T-Shirt with a classic fit and tabe details on the sleeves.',
    category: 'men',
    image: 't-shirt.png',
  },
  {
    id: 4,
    title: 'T-Shirt with Tabe Details',
    price: 120,
    description: 'Cotton T-Shirt with a classic fit and tabe details on the sleeves.',
    category: 'men',
    image: 't-shirt.png',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  private featuredProducts = signal<Product[]>([]);
  // Read only signal
  products = this.featuredProducts.asReadonly();

  getFeaturedProducts(limit?: number) {
    return this.httpClient.get<Product[]>(API_URL + 'products').pipe(
      map((resData) => resData.slice(0, limit)),
      catchError((errorRes) => throwError(() => new Error('Failed to load places.'))),
    );
  }

  getRelatedProducts(category: string) {
    console.log(category);
    return this.httpClient.get<Product[]>(API_URL + 'products/' + category).pipe(
      catchError((errorRes) => throwError(() => new Error('Failed to load places.'))),
    );
  }

  getSingleProduct(id: number) {
    const discountPercentage: number = Math.random() * 30; // Random discount between 0% and 30%
    return this.httpClient.get<Product>(API_URL + 'products/' + id).pipe(
      map((resData) => ({
        ...resData,
        newPrice: (resData.price * discountPercentage) / 100,
        discountPercentage: discountPercentage.toFixed(2),
      })),
      catchError((errorRes) => throwError(() => new Error('Failed to load product.'))),
    );
  }
}
