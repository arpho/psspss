import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { CrewUserprofileModel } from 'src/app/models/CrewUserProfile';
import { ActivityFields } from 'src/app/models/enumFields';
import { QuestionCategories } from 'src/app/modules/dynamic-form/models/question-categories';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
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
  userFields: Array<any>
  userprofile = new CrewUserprofileModel
  activityFields = [
    {key:"sala",value:ActivityFields.sala},
    {key:"accoglienza",value:ActivityFields.accoglienza},
    {key:"pasticceria",value:ActivityFields.pasticceria},
    {key:"cucina",value:ActivityFields.cucina}
]
  constructor(public navParams: NavParams,
     public modalCtrl: ModalController,
      public service: CrewUserService,
      public toastCtrl:ToastController) {

  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

  submit(user) {
    console.log('updating', user)
    Object.assign(this.userprofile, user)
    console.log('last', this.userprofile)
    this.userprofile.skillsList = user.skill
    this.service.updateItem(this.userprofile).then((value => {
      console.log('updated', value)
      this.presentToast(`l'utente: ${this.userprofile.getTitle().value} è stato modificato`)
      this.dismiss()
    }))

  }


  setCategories(ev){
    console.log('categories',ev)
  }
  filter(args) {

  }

  ngOnInit() {
    const user = this.navParams.get("item")
    this.userprofile.initialize(user)
    this.userFields = [
      new TextboxQuestion({ key: 'firstName', label: 'Nome', value: this.userprofile.firstName }),
      new TextboxQuestion({ key: 'lastName', label: 'Cognome', value: this.userprofile.lastName }),
      new DateQuestion({ key: "birthDate", label: "Data di nascita", value: this.userprofile.birthDate.formatDate() }),
      new TextboxQuestion({ key: "crewRole", label: "mansione", value: this.userprofile.crewRole }),
      new DropdownQuestion({key:"field",options:this.activityFields,label:"settore", value:this.userprofile.field }),
      new QuestionCategories({key:'skill',label:'abilità',buttonText:"Abilità",value:this.userprofile.skillsList})
    ]
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

}
