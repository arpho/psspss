// tslint:disable:semicolon
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriesSelectorPage } from '../../pages/categories-selector/categories-selector.page';
import { CategoryModel } from '../../models/CategoryModel';

@Component({
  selector: 'app-categories-selector',
  templateUrl: './categories-selector.component.html',
  styleUrls: ['./categories-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesSelectorComponent implements OnInit {
  @Input() categoriesList: Array<CategoryModel>
  @Output() selectedCategories: EventEmitter<Array<CategoryModel>> = new EventEmitter()
  categoryColor = 'orange'
  categoryIcon = 'pricetag'


  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async showPopup() {
    const modal = await this.modalCtrl.create({ component: CategoriesSelectorPage, componentProps: { categories: this.categoriesList } })
    modal.onDidDismiss().then(data => {
      this.categoriesList = data.data
      this.selectedCategories.emit(data.data)



    })
    return await modal.present()
  }
  setCategories(ev){
    console.log('categories',ev)
  }

  clickedCategory(cat: CategoryModel) {
  }

}
