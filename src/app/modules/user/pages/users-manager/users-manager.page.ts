import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UsersService } from '../../services/users.service';
import { ManageUserPage } from '../manage-user/manage-user.page';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.page.html',
  styleUrls: ['./users-manager.page.scss'],
})
export class UsersManagerPage implements OnInit {
  editModalPage = ManageUserPage

  constructor(public service: UsersService,
    public modalCtrl:ModalController,
    public navParams:NavParams) { }

  ngOnInit() {
  }

}
