import { Component, input } from '@angular/core';

import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  label = input<string>('');
  isOutlined = input<boolean>(false);
  width = input<string>('auto');
  // color = input<string>('#000');

}
