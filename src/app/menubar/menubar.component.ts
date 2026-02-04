import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { Menubar } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-menubar',
  imports: [Menubar, InputTextModule, CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;

  showSearchInput = signal(false);

  toggleSearch() {
    this.showSearchInput.update((v) => !v);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Shop',
        icon: 'fa-light fa-chevron-down',
        styleClass: 'menu-item',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
        ],
      },
      {
        label: 'On Sale',
      },
      {
        label: 'New Arrivals',
      },
      {
        label: 'Brands',
      },
    ];
  }
}
