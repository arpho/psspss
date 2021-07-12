// tslint:disable:semicolon
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriesSelectorPage } from '../../pages/categories-selector/categories-selector.page';
import { CategoryModel } from '../../models/CategoryModel';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-categories-selector',
  templateUrl: './categories-selector.component.html',
  styleUrls: ['./categories-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => CategoriesSelectorComponent)
  }]
})
export class CategoriesSelectorComponent implements OnInit,ControlValueAccessor {
  @Input() categoriesList: Array<CategoryModel>
  @Input() buttonText = "categorie"
  @Output() selectedCategories: EventEmitter<Array<CategoryModel>> = new EventEmitter()
  categoryColor = 'orange'
  categoryIcon = 'pricetag'
  // tslint:disable-next-line: ban-types
  onChange: any = () => { };
  // tslint:disable-next-line: ban-types
  onTouched: any = () => { };
  disabled = false


  constructor(public modalCtrl: ModalController) { }
  writeValue(obj: any): void {
    this.categoriesList = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled
  }

  ngOnInit() {
    this.buttonText = this.buttonText || "categorie"
  }

  async showPopup() {
    const modal = await this.modalCtrl.create({ component: CategoriesSelectorPage, componentProps: { categories: this.categoriesList } })
    modal.onDidDismiss().then(data => {
      this.categoriesList = data.data
      this.selectedCategories.emit(data.data)



    })
    return await modal.present()
  }
  setCategories(ev) {
    console.log('categories', ev)
  }

  clickedCategory(cat: CategoryModel) {
  }

}
