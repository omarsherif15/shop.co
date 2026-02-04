import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('shop.co');
}
