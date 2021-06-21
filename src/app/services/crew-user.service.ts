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
  constructor() { 

    firebase.default.auth().onAuthStateChanged(user=>{
      if(user){
        this.suppliersListRef = firebase.default.database().ref("/userprofiles")
        this.UserListRef.on("value",()=>{
          this.items_list =[]
        })
      }
    })
  }
  categoriesService?: ItemServiceInterface;
  suppliersService?: ItemServiceInterface;
  paymentsService?: ItemServiceInterface;
  initializeItems() {
    throw new Error('Method not implemented.');
  }

  suppliersListRef?: any;
  _items: BehaviorSubject<CrewUserprofileModel[]>;
  items_list: CrewUserprofileModel[];
  items: Observable<CrewUserprofileModel[]>;
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
    user.on("value", item=>{User.initialize(item.val() );
    User.key = item.key;
    this.updateItem(User) //add
    })
  }
}
