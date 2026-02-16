import { Component, inject } from '@angular/core';
import { MOCK_PRODUCTS, ProductsService } from '../../../core/products.service';
import { ProductItemComponent } from '../../../shared/products/product-item/product-item.component';

@Component({
  selector: 'app-products-grid',
  imports: [ProductItemComponent],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss',
})
export class ProductsGridComponent {
  private readonly productsService = inject(ProductsService);

  products = MOCK_PRODUCTS;
}
