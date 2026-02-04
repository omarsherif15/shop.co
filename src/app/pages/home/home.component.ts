import { Component, inject, OnInit, signal } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { BrandsComponent } from "./brands/brands.component";
import { CategoriesComponent } from "./categories/categories.component";
import { FeedbacksComponent } from "./feedbacks/feedbacks.component";
import { FeaturedProductsComponent } from '../../shared/products/featured-products/featured-products.component';
import { Product, ProductsService } from '../../shared/products/products.service';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    BrandsComponent,
    FeaturedProductsComponent,
    CategoriesComponent,
    FeedbacksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductsService);
  items = signal<Product[]>([]);
  isLoading = signal(false);
  
  ngOnInit() {
    this.isLoading.set(true);
    this.productService.getFeaturedProducts(5).subscribe({
      next: (products) => {
        this.isLoading.set(false);
        this.items.set(products);
      },
      error: (error) => {
        this.isLoading.set(false);
        console.error('Error fetching featured products:', error);
        //this.items = MOCK_PRODUCTS; // Fallback to mock products on error
      },
    });
  }
}
