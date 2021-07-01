import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateCrewUserPage } from './create-crew-user.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';
import { CategoryModel } from 'src/app/modules/categories/models/CategoryModel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicFormModule,
    CategoryModel,
  ],
  declarations: [CreateCrewUserPage]
})
export class CreateCrewUserPageModule { }
