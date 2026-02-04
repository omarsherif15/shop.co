import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { RatingModule } from 'primeng/rating';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Product, ProductsService } from '../products.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { DecimalPipe } from '@angular/common';
import { ColorSelectComponent } from "./components/color-select/color-select.component";
import { SizeSelectorComponent } from "./components/size-selector/size-selector.component";

@Component({
  selector: 'app-product-details',
  imports: [BreadcrumbModule, DecimalPipe, RatingModule, FormsModule, ColorSelectComponent, SizeSelectorComponent, ButtonComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  private productService = inject(ProductsService);
  isLoading = signal(false);
  productItem = signal<Product | null>(null);
  id = input.required<number>();

  newPrice = signal(0);
  discountPercentage = signal(20);

  cartAmount = signal(1);

  

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [{ label: 'Shop' }, { label: 'Men' }, { label: 'T-Shirts' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.isLoading.set(true);
    this.productService.getSingleProduct(this.id()).subscribe({
      next: (product) => {
        this.newPrice.set(product.price - (product.price * this.discountPercentage()) / 100);
        this.isLoading.set(false);
        this.productItem.set(product);
      },
      error: (error) => {
        this.isLoading.set(false);
        console.error('Error fetching featured products:', error);
      },
    });
  }

  onIncreaseCartAmount() {
    this.cartAmount.update((val) => val + 1);
  }

  onDecreaseCartAmount() {
    this.cartAmount.update((val) => (val > 1 ? val - 1 : 1));
  }
}
