import { Component } from '@angular/core';

import { TabsModule } from 'primeng/tabs';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { FeedbackCardComponent } from '../../../../shared/feedback-card/feedback-card.component';

@Component({
  selector: 'app-tab-bar',
  imports: [TabsModule, ButtonComponent, FeedbackCardComponent],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
})
export class TabBarComponent {}
