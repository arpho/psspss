import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrewUserprofileModel } from 'src/app/models/CrewUserProfile';
import { ActivityFields } from 'src/app/models/enumFields';
import { QuestionBase } from 'src/app/modules/dynamic-form/models/question-base';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { PictureBox } from 'src/app/modules/dynamic-form/models/question-picture';
import { TextboxQuestion } from 'src/app/modules/item/models/question-textbox';
import { CrewUserService } from 'src/app/services/crew-user.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-create-crew-user',
  templateUrl: './create-crew-user.page.html',
  styleUrls: ['./create-crew-user.page.scss'],
})

export class CreateCrewUserPage implements OnInit {
  userprofile = new CrewUserprofileModel()
  title = "nuovo Utente"
  userFields: Array<any>
  activityFields = [
    {key:"sala",value:ActivityFields.sala},
    {key:"accoglienza",value:ActivityFields.accoglienza},
    {key:"pasticceria",value:ActivityFields.pasticceria},
    {key:"cucina",value:ActivityFields.cucina}
]

  constructor(public service: CrewUserService,
    public modalCtrl:ModalController,
    private filechooser:FileChooser) {
      this.filechooser.open().then(uri=>{
        console.log('uri',uri)
      }).catch(er=>{
        console.log('error',er)
      })
    this.userFields = [
      new PictureBox({key:"picture", label:"foto"}),
      new TextboxQuestion({ key: 'firstName', label: 'Nome', value: this.userprofile.firstName }),
      new TextboxQuestion({ key: 'lastName', label: 'Cognome', value: this.userprofile.lastName }),
      new DateQuestion({ key: "birthDate", label: "Data di nascita", value: this.userprofile.birthDate.formatDate() }),
      new TextboxQuestion({ key: "crewRole", label: "mansione", }),
      new DropdownQuestion({key:"field",options:this.activityFields,label:"settore"  })
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
   
