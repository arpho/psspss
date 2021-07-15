import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCrewUserPage } from './create-crew-user.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCrewUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCrewUserPageRoutingModule {}
