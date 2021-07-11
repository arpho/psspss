import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSelectorComponent } from './components/categories-selector/categories-selector.component';
import { CategoriesViewerComponent } from './components/categories-viewer/categories-viewer.component';
import { ItemModule } from '../item/item.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [CategoriesSelectorComponent,CategoriesViewerComponent],
  imports: [
    
    CommonModule,
    ItemModule,
    IonicModule.forRoot()
  ],
  exports:[CategoriesSelectorComponent,CategoriesViewerComponent]
})
export class CategoriesModule { }
