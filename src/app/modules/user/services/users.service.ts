// tslint:disable: quotemark
import { Injectable, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { ItemServiceInterface } from "../../item/models/ItemServiceInterface";
import { UserModel } from "../models/userModel";
import { ItemModelInterface } from "../../item/models/itemModelInterface";
import * as admin from "firebase-admin";
import { BehaviorSubject, Observable } from 'rxjs';
import { CrewUserprofileModel } from "src/app/models/CrewUserProfile";

@Injectable({
  providedIn: "root"
})
export class UsersService implements ItemServiceInterface,OnInit {
  public usersRef: firebase.default.database.Reference;
  private loggedUser: UserModel;
  items_list: Array<CrewUserprofileModel> = []
  _items: BehaviorSubject<Array<UserModel>> = new BehaviorSubject([])
  readonly items: Observable<Array<UserModel>> = this._items.asObservable()

  constructor() {

    this.usersRef = firebase.default.database().ref("/userProfile");
    this.loadItems()
    
  }
  categoriesService?: ItemServiceInterface;
  suppliersService?: ItemServiceInterface;
  paymentsService?: ItemServiceInterface;
  suppliersListRef?: any;
  initializeItems() {
    throw new Error("Method not implemented.");
  }
  populateItems = (UsersListSnapshot) => {
    this.items_list = [];
    UsersListSnapshot.forEach(snap => {
      const user = new CrewUserprofileModel().initialize(snap.val()).setKey(snap.key)
      user.key = snap.key // alcuni item non hanno il campo key
      this.items_list.push(user);
      if (user.key === '') {
      }
    });
    this._items.next(this.items_list)
    console.log('users',this.items_list)
  }
  ngOnInit(): void {
  }

  loadItems() {
    firebase.default.auth().onAuthStateChanged(user => {
      if (user) {
        this.usersRef = firebase.default.database().ref(`/userProfile/`);
        this.usersRef.on('value', this.populateItems );
      }
    });
  }

  getItem(key: string) {
    if (this.usersRef) {
      return this.usersRef.child(key);
    }
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  setRole(uid:string,role:number){

  }

  setLoggedUser(key: string) {
    this.loggedUser = new UserModel(undefined, key);
    this.loggedUser.build({ key });
    return this.loggedUser;
  }

  deleteItem(key: string) {
    return this.usersRef.child(key).remove();
  }

  getDummyItem() {
    return new UserModel();
  }

  createItem(item: ItemModelInterface) {
    return this.usersRef.push(item.serialize());
  }

  getEntitiesList(): firebase.default.database.Reference {
    return this.usersRef;
  }

  updateItem(item: ItemModelInterface) {
    return this.usersRef.child(item.key).update(item.serialize());
  }
}
