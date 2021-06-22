import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCrewUserPageRoutingModule } from './create-crew-user-routing.module';

import { CreateCrewUserPage } from './create-crew-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCrewUserPageRoutingModule
  ],
  declarations: [CreateCrewUserPage]
})
export class CreateCrewUserPageModule {}
