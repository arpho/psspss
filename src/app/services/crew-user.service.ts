import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrewUserprofileModel } from '../models/CrewUserProfile';
import { CategoriesService } from '../modules/categories/services/categorie.service';
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
 
  constructor( public skillService: CategoriesService) {
    this.UserListRef = firebase.default.database().ref('/userProfile');
    this.initializeItems()

  }

  initializeItems() {
    firebase.default.auth().onAuthStateChanged(user => {
      // if (user) {

      this.UserListRef.on('value', usersListSnapshot => {
        this.items_list = [];
        usersListSnapshot.forEach(snap => {
          const userProfile = new CrewUserprofileModel().initialize(snap.val()).setKey(snap.key)
          userProfile.initializeSkills(this.skillService)
          this.items_list.push(userProfile);
        });
        this._items.next(this.items_list)
      });
      // }
    });
  }

  suppliersListRef?: any;
  getItem(key: string): firebase.default.database.Reference {
    return this.UserListRef.child(key)
  }
  updateItem(item: ItemModelInterface) {
    const user = new CrewUserprofileModel().initialize(item.serialize())
    return this.UserListRef.child(item.key).update(item.serialize()).then(value => {
      console.log("updated", value)
    })
  }
  deleteItem(key: string) {
    return this.UserListRef.child(key).remove()
  }
  getDummyItem(): CrewUserprofileModel {
    return new CrewUserprofileModel()
  }
  async createItem(item: CrewUserprofileModel) {
    var User = new CrewUserprofileModel().initialize(item)

    const user = await this.UserListRef.push(item.serialize())
    user.once("value", createdItem => {
      User.initialize(createdItem.val());
      User.key = createdItem.key;
      return this.updateItem(User) //add
    })
  }
}
