import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCrewUserPageRoutingModule } from './update-crew-user-routing.module';

import { UpdateCrewUserPage } from './update-crew-user.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCrewUserPageRoutingModule,
    DynamicFormModule
  ],
  declarations: [UpdateCrewUserPage]
})
export class UpdateCrewUserPageModule {}
