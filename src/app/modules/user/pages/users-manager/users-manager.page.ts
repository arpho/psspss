import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CrewUserprofileModel } from 'src/app/models/CrewUserProfile';
import { UserModel } from '../../models/userModel';
import { UsersService } from '../../services/users.service';
import { ManageUserPage } from '../manage-user/manage-user.page';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.page.html',
  styleUrls: ['./users-manager.page.scss'],
})
export class UsersManagerPage implements OnInit {
  editModalPage = ManageUserPage
  public filterFunction: (item: CrewUserprofileModel) => boolean;
  public sorterFunction: (a: any, b: any) => number

  constructor(public service: UsersService,
  
   ) { }

    user:UserModel
    title="title"

  ngOnInit() {
  }



}
