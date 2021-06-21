import { Injectable } from '@angular/core';
import  * as firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrewUserprofileModel } from '../models/CrewUserProfile';
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
   return this.UserListRef.child(key)
  }
  updateItem(item: ItemModelInterface) {
    return this.UserListRef.child(item.key).update(item.serialize())
  }
  deleteItem(key: string) {
    return this.UserListRef.child(key).remove()
  }
  getDummyItem(): ItemModelInterface {
    return new CrewUserprofileModel()
  }
  createItem(item: ItemModelInterface) {
    throw new Error('Method not implemented.');
  }
}
