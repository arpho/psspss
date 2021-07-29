import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersManagerPageRoutingModule } from './users-manager-routing.module';

import { UsersManagerPage } from './users-manager.page';
import { ItemModule } from 'src/app/modules/item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersManagerPageRoutingModule,
    ItemModule
  ],
  declarations: []
})
export class UsersManagerPageModule {}
