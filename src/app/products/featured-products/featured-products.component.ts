import { Component, inject, input, OnInit, signal } from '@angular/core';

import { Product, ProductsService } from '../../products/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-featured-products',
  imports: [ProductItemComponent, ButtonComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
})
export class FeaturedProductsComponent implements OnInit {
  private productService = inject(ProductsService);
  title = input.required<string>();
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
