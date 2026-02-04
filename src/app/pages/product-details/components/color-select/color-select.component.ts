import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color-select',
  imports: [],
  templateUrl: './color-select.component.html',
  styleUrl: './color-select.component.scss',
})
export class ColorSelectComponent {
  // Signal to track the currently selected color value
  selectedColor = signal<string | null>(null);

  // Array of available colors with name and hex value
  colors = [
    { name: 'Red', value: '#C41E3A' },
    { name: 'Teal', value: '#1B5E5F' },
    { name: 'Navy', value: '#0F2340' },
  ];

  // Method to update the selectedColor signal when a color button is clicked
  selectColor(colorValue: string) {
    this.selectedColor.set(colorValue);
  }
}
