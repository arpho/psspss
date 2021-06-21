import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrewUserprofileModel } from '../models/CrewUserProfile';
import { ItemModelInterface } from '../modules/item/models/itemModelInterface';
import { ItemServiceInterface } from '../modules/item/models/ItemServiceInterface';

@Injectable({
  providedIn: 'root'
})
export class CrewUserService implements ItemServiceInterface {

  

  public UserListRef: firebase.default.database.Reference
  _items: BehaviorSubject<Array<CrewUserprofileModel>> = new BehaviorSubject([])
  readonly items: Observable<Array<CrewUserprofileModel>> = this._items.asObservable()
  items_list: Array<CrewUserprofileModel> = []
  constructor() {

   
  }

  initializeItems() {
    firebase.default.auth().onAuthStateChanged(user => {
      if (user) {
        this.UserListRef = firebase.default.database().ref('/userProfile');
        this.UserListRef.on('value', eventCategoriesListSnapshot => {
          this.items_list = [];
          eventCategoriesListSnapshot.forEach(snap => {
            const userProfile = new CrewUserprofileModel().initialize(snap.val())
            this.items_list.push(userProfile);
          });
          this._items.next(this.items_list)
        });
      }
    });
  }

  suppliersListRef?: any;
  getItem(key: string): firebase.default.database.Reference {
    return this.UserListRef.child(key)
  }
  updateItem(item: ItemModelInterface) {
    return this.UserListRef.child(item.key).update(item.serialize())
  }
  deleteItem(key: string) {
    return this.UserListRef.child(key).remove()
  }
  getDummyItem(): CrewUserprofileModel {
    return new CrewUserprofileModel()
  }
  async createItem(item: CrewUserprofileModel) {
    var User = new CrewUserprofileModel()
    const user = await this.UserListRef.push(item.serialize())
    user.on("value", item => {
      User.initialize(item.val());
      User.key = item.key;
      this.updateItem(User) //add
    })
  }
}
