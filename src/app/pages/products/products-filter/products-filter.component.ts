import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PassThroughOptions } from 'primeng/api';

import { SliderModule } from 'primeng/slider';
import { SizeSelectorComponent } from '../../../shared/size-selector/size-selector.component';
import { ColorSelectorComponent } from '../../../shared/color-selector/color-selector.component';

@Component({
  selector: 'app-products-filter',
  imports: [SliderModule, FormsModule, SizeSelectorComponent, ColorSelectorComponent],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.scss',
})
export class ProductsFilterComponent {
  rangeValues: number[] = [20, 80];
  categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Kitchen'];

  priceFilterIsVisible = signal(false);
  colorFilterIsVisible = signal(false);
  sizeFilterIsVisible = signal(false);
  dressStyleFilterIsVisible = signal(false);

  togglePriceFilter() {
    this.priceFilterIsVisible.set(!this.priceFilterIsVisible());
  }
  toggleColorFilter() {
    this.colorFilterIsVisible.set(!this.colorFilterIsVisible());
  }
  toggleSizeFilter() {
    this.sizeFilterIsVisible.set(!this.sizeFilterIsVisible());
  }
  toggleDressStyleFilter() {
    this.dressStyleFilterIsVisible.set(!this.dressStyleFilterIsVisible());
  }
}
