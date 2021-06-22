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
    this.UserListRef = firebase.default.database().ref('/userProfile');
    this.initializeItems()
   
  }

  initializeItems() {
    firebase.default.auth().onAuthStateChanged(user => {
      console.log('jjj',user)
     // if (user) {
        
        this.UserListRef.on('value', usersListSnapshot => {
          console.log('users list',usersListSnapshot)
          this.items_list = [];
          usersListSnapshot.forEach(snap => {
            const userProfile = new CrewUserprofileModel().initialize(snap.val())
            console.log('user',snap.val(),userProfile)
            this.items_list.push(userProfile);
            console.log('users list',this.items_list)
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
    return this.UserListRef.child(item.key).update(item.serialize())
  }
  deleteItem(key: string) {
    return this.UserListRef.child(key).remove()
  }
  getDummyItem(): CrewUserprofileModel {
    return new CrewUserprofileModel()
  }
  async createItem(item: CrewUserprofileModel) {
    console.log('creating',item)
    var User = new CrewUserprofileModel().initialize(item)
    const user = await this.UserListRef.push(item.serialize())
    user.on("value", createrdItem => {
      console.log('inserted',)
      User.initialize(createrdItem.val());
      User.key = createrdItem.key;
      return this.updateItem(User) //add
    })
  }
}
