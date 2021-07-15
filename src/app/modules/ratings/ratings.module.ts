import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingInputComponent } from './components/rating-input.component';



@NgModule({
  declarations: [RatingInputComponent],
  imports: [
    CommonModule
  ],
  exports:[RatingInputComponent]
})
export class RatingsModule { }
