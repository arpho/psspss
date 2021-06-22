import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCrewUserPageRoutingModule } from './create-crew-user-routing.module';

import { CreateCrewUserPage } from './create-crew-user.page';
import { DynamicFormModule } from 'src/app/modules/dynamic-form/dynamic-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicFormModule,
    CreateCrewUserPageRoutingModule
  ],
  declarations: [CreateCrewUserPage]
})
export class CreateCrewUserPageModule {}