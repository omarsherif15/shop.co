import { Component, inject } from '@angular/core';
import { MenubarComponent } from './components/menubar/menubar.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LocalStorageService } from '../../core/local-storage.service';

@Component({
  selector: 'app-layout',
  imports: [MenubarComponent, RouterOutlet, FooterComponent, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

  private readonly localStorage = inject(LocalStorageService);

  showBanner = !this.localStorage.isLoggedIn();
}
