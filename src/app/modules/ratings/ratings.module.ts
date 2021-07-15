import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingInputComponent } from './components/rating-input.component';
import { CreateReviewPage } from './pages/create-review/create-review.page';



@NgModule({
  declarations: [RatingInputComponent,CreateReviewPage],
  imports: [
    CommonModule
  ],
  exports:[RatingInputComponent]
})
export class RatingsModule { }
