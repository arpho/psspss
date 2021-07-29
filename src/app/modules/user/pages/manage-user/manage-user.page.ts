import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { SwitchQuestion } from 'src/app/modules/item/models/question-switch';
import { DateModel } from '../../models/birthDateModel';
import { UserModel } from '../../models/userModel';
import {configs} from '../../../../configs/credentials'

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
})
export class ManageUserPage implements OnInit {
title= "gestione Utente"

user:UserModel
userFields= []
  constructor(public modalCtrl:ModalController,
    public navparams:NavParams,
    ) { }

   
  

  ngOnInit() {
    this.user = this.navparams.get('item')
    console.log('user',this.user)
    this.title = this.user.getTitle().value.toString()
    this.userFields=[
      new TextboxQuestion({
        key: 'firstName',
        label: 'nome',
        value: this.user ? this.user.firstName : 'nome',
        order: 1,
        required: true
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'cognome',
        value: this.user ? this.user.lastName : 'cognome',
        order: 2
      }),
      new SwitchQuestion({
        key: 'enabled',
        label: 'abilitato',
        value: this.user ? this.user.enabled : false,
        labelTrue: 'utente  abilitato',
        labelFalse: ' utente non abilitato ',
        iconTrue: 'happy',
        iconFalse: 'remove-circle',
        order: 3
      }),
      new DateQuestion({
        key: 'birthDate',
        label: 'Data di nascita',
        required: true,
        value: this.user ? new DateModel(this.user.birthDate).formatDate() : new DateModel(new Date()), // "1977-03-16",
        order: 4
      }),
      new DropdownQuestion({
        key: 'level',
        label: 'Ruolo utente',
        options: configs['accessLevel'],
        value:this.user? this.user.level:3
      }),
      new SwitchQuestion({
        key: 'offlineEnabled',
        label: 'supporto offline ',
        value: this.user ? this.user.enabled : false,
        labelTrue: 'supporto offline ok',
        labelFalse: ' solo cloud ',
        iconTrue: 'cloud-upload',
        iconFalse: 'cloud',
        order: 3
      }),]
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

  filter(ev){
    console.log('filter',ev)
  }

  submit(ev){
    console.log('submit',ev)
  }

}
