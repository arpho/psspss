import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSelectorComponent } from './components/categories-selector/categories-selector.component';
import { CategoriesViewerComponent } from './components/categories-viewer/categories-viewer.component';
import { ItemModule } from '../item/item.module';
import { IonicModule } from '@ionic/angular';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesSelectorPageModule } from './pages/categories-selector/categories-selector.module';



@NgModule({
  declarations: [CategoriesSelectorComponent,CategoriesViewerComponent,CategoryComponent,CategoriesSelectorPageModule],
  imports: [
    
    CommonModule,
    ItemModule,
    IonicModule.forRoot()
  ],
  exports:[CategoriesSelectorComponent,CategoriesViewerComponent,CategoryComponent]
})
export class CategoriesModule { }
