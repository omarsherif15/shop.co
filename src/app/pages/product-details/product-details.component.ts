import { AfterViewInit, Component, inject, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { RatingModule } from 'primeng/rating';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonComponent } from '../../shared/button/button.component';
import { DecimalPipe } from '@angular/common';
import { ColorSelectorComponent } from '../../shared/color-selector/color-selector.component';
import { SizeSelectorComponent } from '../../shared/size-selector/size-selector.component';
import { Product, ProductsService } from '../../core/products.service';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { FeaturedProductsComponent } from '../../shared/products/featured-products/featured-products.component';

@Component({
  selector: 'app-product-details',
  imports: [
    BreadcrumbModule,
    DecimalPipe,
    RatingModule,
    FormsModule,
    ColorSelectorComponent,
    SizeSelectorComponent,
    ButtonComponent,
    TabBarComponent,
    FeaturedProductsComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  private productService = inject(ProductsService);
  isLoading = signal(false);
  productItem = signal<Product>({} as Product);
  relatedProducts = signal<Product[]>([]);
  id = input.required<number>();

  newPrice = signal(0);
  discountPercentage = signal('');

  cartAmount = signal(1);

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [{ label: 'Shop' }, { label: 'Men' }, { label: 'T-Shirts' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.isLoading.set(true);
    this.productService.getSingleProduct(this.id()).subscribe({
      next: (product) => {
        this.newPrice.set(product.newPrice ?? 0);
        this.discountPercentage.set(product.discountPercentage ?? 0);
        this.isLoading.set(false);
        this.productItem.set(product);

        this.productService.getRelatedProducts(this.productItem().category).subscribe({
          next: (products) => {
            console.log(products);
            this.relatedProducts.set(products);
          },
          error: (error) => {
            console.error('Error fetching related products:', error);
          },
        });
      },
      error: (error) => {
        this.isLoading.set(false);
        console.error('Error fetching featured products:', error);
      },
    });
  }

  ngAfterViewInit() {}

  onIncreaseCartAmount() {
    this.cartAmount.update((val) => val + 1);
  }

  onDecreaseCartAmount() {
    this.cartAmount.update((val) => (val > 1 ? val - 1 : 1));
  }
}
