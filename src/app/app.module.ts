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
import { SelectorItemsPage } from './modules/item/pages/selector-items/selector-items.page';
import { CreateCrewUserPage } from './pages/create-crew-user/create-crew-user.page';
import { UpdateCrewUserPage } from './pages/update-crew-user/update-crew-user.page';
import { EditUserPage } from './modules/user/pages/edit-user/edit-user.page';

@NgModule({
  declarations: [AppComponent,
  FilterPopupPage,
  SelectorItemsPage,
  EditUserPage,
  UpdateCrewUserPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

}
