import { Component, OnInit } from '@angular/core';
import { CrewUserprofileModel } from 'src/app/models/CrewUserProfile';
import { TextboxQuestion } from 'src/app/modules/item/models/question-textbox';

@Component({
  selector: 'app-create-crew-user',
  templateUrl: './create-crew-user.page.html',
  styleUrls: ['./create-crew-user.page.scss'],
})
export class CreateCrewUserPage implements OnInit {
 userprofile = new CrewUserprofileModel()
  title = "nuovo Utente"
  userFields

  constructor() {
    this.userFields = [
      new TextboxQuestion({key:'firstName',label:'Nome',value:this.userprofile.firstName})
    ]
   }

  ngOnInit() {
  }

  filter(ev){
    console.log('typing',ev)
  }

  submit(arg){
    console.log("submit",arg)
  }

}
