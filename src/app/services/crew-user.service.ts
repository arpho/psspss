import { Injectable } from '@angular/core';
import  * as firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemModelInterface } from '../modules/item/models/itemModelInterface';
import { ItemServiceInterface } from '../modules/item/models/ItemServiceInterface';

@Injectable({
  providedIn: 'root'
})
export class CrewUserService implements ItemServiceInterface {
public UserListRef:firebase.default.database.Reference
  constructor() { }

  suppliersListRef?: any;
  _items: BehaviorSubject<ItemModelInterface[]>;
  items_list: ItemModelInterface[];
  items: Observable<ItemModelInterface[]>;
  getItem(key: string): firebase.default.database.Reference {
    throw new Error('Method not implemented.');
  }
  updateItem(item: ItemModelInterface) {
    throw new Error('Method not implemented.');
  }
  deleteItem(key: string) {
    throw new Error('Method not implemented.');
  }
  getDummyItem(): ItemModelInterface {
    throw new Error('Method not implemented.');
  }
  createItem(item: ItemModelInterface) {
    throw new Error('Method not implemented.');
  }
}
