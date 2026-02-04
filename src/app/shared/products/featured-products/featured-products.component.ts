import { Component, inject, input, OnInit, signal } from '@angular/core';

import { Product, ProductsService } from '../../products/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-featured-products',
  imports: [ProductItemComponent, ButtonComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss',
})
export class FeaturedProductsComponent {
  title = input.required<string>();
  items = input.required<Product[]>();
  isLoading = input.required<boolean>();
  

  
}
