import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CrewUserprofileModel } from 'src/app/models/CrewUserProfile';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { TextboxQuestion } from 'src/app/modules/item/models/question-textbox';
import { CrewUserService } from 'src/app/services/crew-user.service';
import { CreateCrewUserPage } from '../create-crew-user/create-crew-user.page';

@Component({
  selector: 'app-update-crew-user',
  templateUrl: '../create-crew-user/create-crew-user.page.html',
  styleUrls: ['../create-crew-user/create-crew-user.page.scss'],
})
export class UpdateCrewUserPage implements OnInit {

  title = " modifica Utente"
  userFields:Array<any>
  userprofile = new CrewUserprofileModel
  constructor(public navParams:NavParams, public modalCtrl:ModalController,public service:CrewUserService) { 
    
  }

  submit(user){
    this.service.updateItem(user)

  }
  filter(args){
    
  }

  ngOnInit() {
    const user  = this.navParams.get("item")
    this.userprofile.initialize(user)
    this.userFields = [
      new TextboxQuestion({ key: 'firstName', label: 'Nome', value: this.userprofile.firstName }),
      new TextboxQuestion({ key: 'lastName', label: 'Cognome', value: this.userprofile.lastName }),
      new DateQuestion({ key: "birthDate", label: "Data di nascita", value: this.userprofile.birthDate.formatDate() }),
      new TextboxQuestion({ key: "crewRole", label: "mansione",value:this.userprofile.crewRole })
    ]
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

}
