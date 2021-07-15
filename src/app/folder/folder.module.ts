import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ItemModule } from '../modules/item/item.module';
import { DynamicFormModule } from '../modules/dynamic-form/dynamic-form.module';
import { CategoriesModule } from '../modules/categories/categories.module';
import { RatingsModule } from '../modules/ratings/ratings.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ItemModule,
    DynamicFormModule,
    CategoriesModule,
    RatingsModule,
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
