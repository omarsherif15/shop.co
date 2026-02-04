import { Component } from '@angular/core';
import { MenubarComponent } from "../../menubar/menubar.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [MenubarComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

}
