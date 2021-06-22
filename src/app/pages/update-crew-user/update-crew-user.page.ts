import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-update-crew-user',
  templateUrl: '../create-crew-user/create-crew-user.page.html',
  styleUrls: ['../create-crew-user/create-crew-user.page.scss'],
})
export class UpdateCrewUserPage implements OnInit {

  title = " modifica Utente"

  constructor(public navParams:NavParams,modalController:ModalController) { }

  ngOnInit() {
    const itemKey = this.navParams.get("item")
    console.log("item key",itemKey)
  }

}
