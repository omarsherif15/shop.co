import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { MOCK_PRODUCTS, ProductsService } from '../../core/products.service';
import { ProductsGridComponent } from "./products-grid/products-grid.component";
import { ProductsFilterComponent } from "./products-filter/products-filter.component";

@Component({
  selector: 'app-products',
  imports: [Breadcrumb, ProductsGridComponent, TitleCasePipe, ProductsFilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [TitleCasePipe],
})
export class ProductsComponent implements OnInit {
  private readonly titleCasePipe = inject(TitleCasePipe);

  category = input<string>();

  items: MenuItem[] | undefined;
  home: MenuItem | undefined;



  ngOnInit() {
    this.items = [{ label: this.titleCasePipe.transform(this.category()) ?? '' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    // this.productsService.getRelatedProducts(this.category() ?? '').subscribe({
    //   next: (products) => {
    //     console.log(products);
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   },
    // });
  }
}
