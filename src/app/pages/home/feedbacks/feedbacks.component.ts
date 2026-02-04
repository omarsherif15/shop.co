import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FeedbackCardComponent } from "../feedback-card/feedback-card.component";

@Component({
  selector: 'app-feedbacks',
  imports: [UpperCasePipe, FeedbackCardComponent],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss',
})
export class FeedbacksComponent {

}
