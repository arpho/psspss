import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { UsersPage } from "./users.page";
import { ItemModule } from "src/app/modules/item/item.module";
import { LoginPage } from "../login/login.page";
import { SignupPage } from "../signup/signup.page";

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
    RouterModule.forChild(routes)
  ],
})
export class UsersModule {}