import { Component, inject, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { SkeletonModule } from 'primeng/skeleton';

import { Product } from '../products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [SkeletonModule, RouterLink , DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  productItem = input.required<Product>();
  isLoading = input.required<boolean>();

  newPrice = signal(0);
  discountPercentage = signal('');

  private router = inject(Router);

  navigateToProductDetails() {
    this.router.navigate(['/product-details', this.productItem().id]);
  }
}
