import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';


@Component({
  selector: 'app-feedback-card',
  imports: [RatingModule, FormsModule],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.scss',
})
export class FeedbackCardComponent {
  width = input<string>('100%');
  value: number = 4;
}
