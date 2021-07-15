import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { ItemModelInterface } from "src/app/modules/item/models/itemModelInterface";
import { UserModel } from "../../models/userModel";
import { EditUserPage } from "../edit-user/edit-user.page"
import { CrewUserprofileModel } from "src/app/models/CrewUserProfile";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"]
})
export class UsersPage implements OnInit {
  public filterFunction: (item: CrewUserprofileModel) => boolean;
  public sorterFunction: (a: any, b: any) => number
  title="gestione utenti"
  public usersList: Array<ItemModelInterface>;
  public
  editModalPage = EditUserPage
  constructor(public service: UsersService) { }

  ngOnInit() {
    console.log('utenti page initialized')
  }
}
