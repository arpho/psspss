import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import firebase from "firebase/app";
import { configs } from './configs/credentials';

import { Platform } from '@ionic/angular';
import { ItemModule } from './modules/item/item.module'
import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(
    private platform: Platform,
  ) {

    this.initializeApp(); {
      firebase.initializeApp(configs.firebase);
      if (!firebase.apps.length) {
        firebase.initializeApp(configs.firebase);
      }
      else { }
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });

  }
}
