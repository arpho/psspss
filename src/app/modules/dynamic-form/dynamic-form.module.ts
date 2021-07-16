import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QuestionFormComponent } from './components/question-form-component/question-form-component.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { QuestionControlService } from './services/question-control.service';
import { ItemModule } from '../item/item.module';
import { FilePickerComponent } from './components/file-picker/file-picker.component';
import { CategoriesModule } from '../categories/categories.module';
import { RatingsModule } from '../ratings/ratings.module';
import { QuestionListComponent } from './components/question-list/question-list.component';
import {ListableItemComponent} from './components/listable-item/listable-item.component'
import { RatingInput2Component } from './components/rating-input2/rating-input2.component';

@NgModule({
  declarations: [QuestionFormComponent, DynamicFormComponent,FilePickerComponent,QuestionListComponent,ListableItemComponent,RatingInput2Component],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    ItemModule,
    CategoriesModule,
  ],
  exports: [QuestionFormComponent, DynamicFormComponent,RatingInput2Component],
  providers: [QuestionControlService]
})
export class DynamicFormModule { }
