import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageUserPageRoutingModule } from './manage-user-routing.module';

import { ManageUserPage } from './manage-user.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageUserPageRoutingModule,
    DynamicFormModule
  ],
  declarations: [ManageUserPage]
})
export class ManageUserPageModule {}
