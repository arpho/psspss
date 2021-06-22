import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCrewUserPage } from './update-crew-user.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCrewUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCrewUserPageRoutingModule {}
