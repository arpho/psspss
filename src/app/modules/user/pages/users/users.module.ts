import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { UsersPage } from "./users.page";
import { ItemModule } from "src/app/modules/item/item.module";
import { LoginPage } from "../login/login.page";
import { SignupPage } from "../signup/signup.page";
import { UsersService } from "../../services/users.service";
import { DynamicFormModule } from "src/app/modules/dynamic-form/dynamic-form.module";

const routes: Routes = [
  
  {
    path: "",
    component: UsersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ItemModule,
    IonicModule,
    ItemModule,
    DynamicFormModule,
    RouterModule.forChild(routes)
  ],
  declarations:[UsersPage]
})
export class UsersModule {
  constructor(public service:UsersService){}
}
