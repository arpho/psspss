import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCrewUserPageRoutingModule } from './update-crew-user-routing.module';

import { UpdateCrewUserPage } from './update-crew-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCrewUserPageRoutingModule
  ],
  declarations: [UpdateCrewUserPage]
})
export class UpdateCrewUserPageModule {}
