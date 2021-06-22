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
import {} from './modules/user/user.module'
import { FilterPopupPage } from './modules/item/pages/filter-popup/filter-popup.page';

@NgModule({
  declarations: [AppComponent,
  FilterPopupPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

}
