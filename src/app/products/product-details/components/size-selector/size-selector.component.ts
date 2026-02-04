import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-size-selector',
  imports: [],
  templateUrl: './size-selector.component.html',
  styleUrl: './size-selector.component.scss',
})
export class SizeSelectorComponent {
  // Signal to track the currently selected size value
  selectedSize = signal<string | null>(null);

  // Array of available colors with name and hex value
  sizes = [
    { name: 'Small', value: 'small' },
    { name: 'Medium', value: 'medium' },
    { name: 'Large', value: 'large' },
    { name: 'X-Large', value: 'x-large' },
  ];

  // Method to update the selectedColor signal when a color button is clicked
  selectSize(sizeValue: string) {
    this.selectedSize.set(sizeValue);
  }
}
