import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingInputComponent } from './components/rating-input.component';
import { CreateReviewPage } from './pages/create-review/create-review.page';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RatingInputComponent,CreateReviewPage],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports:[RatingInputComponent]
})
export class RatingsModule { }
