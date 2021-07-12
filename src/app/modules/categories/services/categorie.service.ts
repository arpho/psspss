import { Injectable, OnInit } from '@angular/core';
import { ItemServiceInterface } from '../../item/models/ItemServiceInterface';
import * as firebase from 'firebase/app';
import { ItemModelInterface } from '../../item/models/itemModelInterface';
import { CategoryModel } from '../models/CategoryModel';
import { Observable, BehaviorSubject } from 'rxjs';
//import { EntityWidgetServiceInterface } from 'src/app/modules/widget/models/EntityWidgetServiceInterface';
//import { PricedCategory } from 'src/app/models/pricedCategory';
// import { PurchaseModel } from 'src/app/models/purchasesModel';
//import { ShoppingKartModel } from 'src/app/models/shoppingKartModel';
// @offlineWrapper
@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements ItemServiceInterface{
  public readonly key = 'categories'
  public categoriesListRef: firebase.default.database.Reference;
  _items: BehaviorSubject<Array<CategoryModel>> = new BehaviorSubject([])
  readonly items: Observable<Array<CategoryModel>> = this._items.asObservable()
  items_list: Array<CategoryModel> = []
  initializeCategory(cat) {


    var Cat = new CategoryModel(cat.key).initialize(cat)
    if (Cat.fatherKey) {
      this.getItem(Cat.fatherKey).on('value', father => { // in this case it is not posible use fetchItem
        const FatherCategory = this.initializeCategory(father.val())
        if (FatherCategory) {
          FatherCategory.key = father && father.key ? father.key : FatherCategory.key
          Cat.father = FatherCategory
        }

      })
    }

    return Cat
  }

  fetchItem(key: string, next) {
    this.items.subscribe((items: CategoryModel[]) => {
      const Item = items.filter((item: CategoryModel) => item && item.key == key)[0]
      next(Item)

    })
  }


  counterWidget: (entityKey: string, entities: ItemModelInterface[]) => number;
  adderWidget: (entityKey: string, entities: ItemModelInterface[]) => number;
  filterableField = 'purchaseDate' // we filter shoppingkart's entities by purchase date
  entityLabel = "Categoria";


  categoriesService?: ItemServiceInterface;
  suppliersService?: ItemServiceInterface;
  paymentsService?: ItemServiceInterface;
  suppliersListRef?: any;


  getDummyItem() {

    return new CategoryModel();
  }



  flattener = (pv, cv) => {
    return [...pv, ...cv]
  }


  async createItem(item: CategoryModel) {
    var Category
    const category = await this.categoriesListRef.push(item.serialize()).on('value', (cat) => {
      console.log('created', cat.key, cat.val())
      Category = this.initializeCategory(cat.val())
      console.log('initialized', Category)
      Category.key = cat.key
    })
    return Category;

  }


  getItem(prId: string): firebase.default.database.Reference {
    return this.categoriesListRef.child(prId);
  }

  updateItem(item: ItemModelInterface) {
    return this.categoriesListRef.child(item.key).update(item.serialize());
  }
  deleteItem(key: string) {
    return this.categoriesListRef.child(key).remove();
  }

  constructor() {
    this.instatiateItem = (args: {}) => {
      return this.initializeCategory(args)
    }


    firebase.default.auth().onAuthStateChanged(user => {
      if (user) {
        this.categoriesListRef = firebase.default.database().ref(`/categorie/`);
        const notHierarchicalCategories: CategoryModel[] = [] // first load cathegories before father is loaded
        this.categoriesListRef.on('value', eventCategoriesListSnapshot => {
          this.items_list = [];
          eventCategoriesListSnapshot.forEach(snap => {
            const cat = new CategoryModel(snap.key).initialize(snap.val()).setKey(snap.key)
            notHierarchicalCategories.push(cat)
          }
          );
          // now we load father
          notHierarchicalCategories.forEach(category => {
            const Category = this.setFather(category, notHierarchicalCategories)
            this.items_list.push(Category)
          })
          this._items.next(this.items_list)
        });
      }
    });


  }

  
  
  initializeItems() {
    throw new Error('Method not implemented.');
  }
  setFather(category: CategoryModel, categoriesList: CategoryModel[]) {
    if (category && category.fatherKey) {
      const father = this.setFather(categoriesList.filter((f: CategoryModel) => f.key == category.fatherKey)[0], categoriesList)

      category.father = father
    }
    return category

  }
  instatiateItem: (args: {}) => ItemModelInterface;

}
