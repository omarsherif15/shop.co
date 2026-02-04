import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';


@Component({
  selector: 'app-feedback-card',
  imports: [RatingModule, FormsModule],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.scss',
})
export class FeedbackCardComponent {
  value: number = 4;
}
