import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersManagerPageRoutingModule } from './users-manager-routing.module';

import { UsersManagerPage } from './users-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersManagerPageRoutingModule
  ],
  declarations: [UsersManagerPage]
})
export class UsersManagerPageModule {}
