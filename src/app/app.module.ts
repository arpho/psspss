  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouteReuseStrategy } from '@angular/router';

  import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

  import { AppComponent } from './app.component';
  import { AppRoutingModule } from './app-routing.module';


  import { ItemModule } from './modules/item/item.module'
  import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module'
  import {} from './modules/user/user.module'
  import { FilterPopupPage } from './modules/item/pages/filter-popup/filter-popup.page';
  import { SelectorItemsPage } from './modules/item/pages/selector-items/selector-items.page';
  import { EditUserPage } from './modules/user/pages/edit-user/edit-user.page';
  import { CategoriesModule } from './modules/categories/categories.module';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './modules/item/pipes/pagination.pipe';
import { UsersManagerPage } from './modules/user/pages/users-manager/users-manager.page';
import { ManageUserPageModule } from './modules/user/pages/manage-user/manage-user.module';

  @NgModule({
    declarations: [
      AppComponent,
    FilterPopupPage,
    ManageUserPageModule,
    SelectorItemsPage,
    EditUserPage,
    UsersManagerPage
    ],
    entryComponents: [],
    imports: [BrowserModule,
      CommonModule,
      IonicModule.forRoot(), 
      AppRoutingModule,
      ItemModule,
      DynamicFormModule,
      CategoriesModule,
    ],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    
      
      
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {

  }
