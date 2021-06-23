import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrewUserprofileModel } from 'src/app/models/CrewUserProfile';
import { QuestionBase } from 'src/app/modules/dynamic-form/models/question-base';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { TextboxQuestion } from 'src/app/modules/item/models/question-textbox';
import { CrewUserService } from 'src/app/services/crew-user.service';

@Component({
  selector: 'app-create-crew-user',
  templateUrl: './create-crew-user.page.html',
  styleUrls: ['./create-crew-user.page.scss'],
})
export class CreateCrewUserPage implements OnInit {
  userprofile = new CrewUserprofileModel()
  title = "nuovo Utente"
  userFields: Array<any>

  constructor(public service: CrewUserService,public modalCtrl:ModalController) {
    this.userFields = [
      new TextboxQuestion({ key: 'firstName', label: 'Nome', value: this.userprofile.firstName }),
      new TextboxQuestion({ key: 'lastName', label: 'Cognome', value: this.userprofile.lastName }),
      new DateQuestion({ key: "birthDate", label: "Data di nascita", value: this.userprofile.birthDate.formatDate() }),
      new TextboxQuestion({ key: "crewRole", label: "mansione", })
    ]
  }

  ngOnInit() {
  }

  filter(ev) {
  }

  dismiss(purchase?) {
    this.modalCtrl.dismiss(purchase)
  }

  submit(arg) {
    this.userprofile.initialize(arg)
    this.service.createItem(this.userprofile).then(value => {
      console.log("creato",value)
      this.dismiss()

    })
  }
  }
