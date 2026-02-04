import { Component } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { BrandsComponent } from "./brands/brands.component";
import { CategoriesComponent } from "./categories/categories.component";
import { FeedbacksComponent } from "./feedbacks/feedbacks.component";
import { FeaturedProductsComponent } from '../../products/featured-products/featured-products.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BrandsComponent, FeaturedProductsComponent, CategoriesComponent, FeedbacksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
