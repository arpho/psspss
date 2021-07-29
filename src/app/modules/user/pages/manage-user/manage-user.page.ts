import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
})
export class ManageUserPage implements OnInit {

  constructor(public modalCtrl:ModalController,
    navparams:NavParams,
    ) { }

    dismiss() {
      this.modalCtrl.dismiss()
    }
  

  ngOnInit() {
  }

}
