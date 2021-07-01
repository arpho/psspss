import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSelectorComponent } from './components/categories-selector/categories-selector.component';
import { CategoriesViewerComponent } from './components/categories-viewer/categories-viewer.component';



@NgModule({
  declarations: [CategoriesSelectorComponent,CategoriesViewerComponent],
  imports: [
    CommonModule
  ],
  exports:[CategoriesSelectorComponent,CategoriesViewerComponent]
})
export class CategoriesModule { }
