import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriesSelectorPage } from './categories-selector.page';
import { ItemModule } from 'src/app/modules/item/item.module';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';
import { SorterItemsPipe } from 'src/app/modules/item/pipes/sorter-items.pipe';
import { FilterItemsPipe } from 'src/app/modules/item/pipes/filter-items.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesModule } from '../../categories.module';

const routes: Routes = [
  {
    path: '',
    component: CategoriesSelectorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ItemModule,
    FormsModule,
    CategoriesModule,
    ReactiveFormsModule,
    DynamicFormModule,
    RouterModule.forRoot(routes)
  ],
  // declarations: [CategoriesSelectorPage]
})
export class CategoriesSelectorPageModule { }
