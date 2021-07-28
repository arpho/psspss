import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { config } from 'firebase-functions';
import firebase from 'firebase'
require('firebase/auth')
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import {configs} from './configs/credentials'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Users', url: '/users/users-manager', icon: 'people' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private platform: Platform,
  ){

    this.initializeApp();{
      const auth = firebase.auth()
      auth.onAuthStateChanged(user=>{
        console.log("authenticated user",user)
      }) 

      
  if (!firebase.apps.length) {
    // const  cat = this.categoriesService.getDummyItem();
  }
  else{
    console.log('firebase ok ',firebase.auth)
  }
      // const  cat = this.categoriesService.getDummyItem();
    }
  }

  initializeApp() {
    firebase.initializeApp(configs.firebase)
    this.platform.ready().then(() => {
    });

  }
}

