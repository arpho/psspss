import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import firebase from "firebase/app";
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
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private platform: Platform,
  ){

    this.initializeApp();{
      console.log('initislizing app')
      console.log('firebase',firebase.apps)
  if (!firebase.apps.length) {
    console.log('initialixing  firebase')
    // const  cat = this.categoriesService.getDummyItem();
  }
  else{
    console.log('firebase ok ',firebase.auth)
  }
      // const  cat = this.categoriesService.getDummyItem();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });

  }
}

