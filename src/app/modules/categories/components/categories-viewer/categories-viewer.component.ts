// tslint:disable: semicolon
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { CategoryModel } from '../../models/CategoryModel'

@Component({
  selector: 'app-categories-viewer',
  templateUrl: './categories-viewer.component.html',
  styleUrls: ['./categories-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesViewerComponent implements OnInit,OnChanges {
  @Input() categorie: Array<CategoryModel>
  @Output() updatedCategories: EventEmitter<Array<CategoryModel>> = new EventEmitter()
  @Output() clickedCategory: EventEmitter<CategoryModel> = new EventEmitter()
  @Input() categoryIcon = 'medal'
  @Input() categoryColor = 'blue'

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
    this.categoryColor = this.categoryColor || 'blue'
    this.categoryIcon = this.categoryIcon || 'medal'
  }

  clicked(cat) {
    this.clickedCategory.emit(cat)
  }

}
