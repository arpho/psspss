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
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { CategoriesModule } from './modules/categories/categories.module';
import {File} from '@ionic-native/file'
import { FilterItemsPipe } from './modules/item/pipes/filter-items.pipe';
import { SorterItemsPipe } from './modules/item/pipes/sorter-items.pipe';

@NgModule({
  declarations: [
    AppComponent,
  FilterPopupPage,
  SelectorItemsPage,
  EditUserPage,
  ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    ItemModule,
    DynamicFormModule,
    CategoriesModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    FileChooser,
    
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
