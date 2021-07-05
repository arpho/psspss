import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateCrewUserPage } from './create-crew-user.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';
import { CategoriesModule } from 'src/app/modules/categories/categories.module';
import { ItemModule } from 'src/app/modules/item/item.module';
import { SorterItemsPipe } from 'src/app/modules/item/pipes/sorter-items.pipe';
import { FilterItemsPipe } from 'src/app/modules/item/pipes/filter-items.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicFormModule,
    ItemModule,
    CategoriesModule,
  ],
  declarations: [CreateCrewUserPage]
})
export class CreateCrewUserPageModule { }
