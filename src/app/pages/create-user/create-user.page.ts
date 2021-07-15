import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  constructor(public modalCtrl:ModalController) { }


  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

}
