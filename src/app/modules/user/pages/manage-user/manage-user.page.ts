import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UserModel } from '../../models/userModel';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
})
export class ManageUserPage implements OnInit {
title= "gestione Utente"
user:UserModel
  constructor(public modalCtrl:ModalController,
    public navparams:NavParams,
    ) { }

    dismiss() {
      this.modalCtrl.dismiss()
    }
  

  ngOnInit() {
    this.user = this.navparams.get('item')
    console.log('user',this.user)
  }

}
