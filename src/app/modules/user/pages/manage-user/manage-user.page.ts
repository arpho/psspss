import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { DateQuestion } from 'src/app/modules/dynamic-form/models/question-date';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { SwitchQuestion } from 'src/app/modules/item/models/question-switch';
import { DateModel } from '../../models/birthDateModel';
import { UserModel } from '../../models/userModel';
import { configs } from '../../../../configs/accessLevel'
import { UsersService } from '../../services/users.service';
import * as admin from 'firebase-admin';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.page.html',
  styleUrls: ['./manage-user.page.scss'],
})
export class ManageUserPage implements OnInit {
  title = "gestione Utente"

  user: UserModel
  userFields = []
  constructor(public modalCtrl: ModalController,
    public service: UsersService,
    public navparams: NavParams,
    public toastController: ToastController
  ) { }




  ngOnInit() {
    this.user = this.navparams.get('item')
    console.log('user', this.user)
    this.title = this.user.getTitle().value.toString()
    this.userFields = [
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
      new SwitchQuestion({
        key: 'signedUser',
        label: 'autenticato',
        value: this.user ? this.user.signedUser : false,
        labelTrue: 'registrato con email',
        labelFalse: ' utente inserito nel db ',
        iconTrue: 'mail',
        iconFalse: 'walk',
        order: 4
      }),
      new DateQuestion({
        key: 'birthDate',
        label: 'Data di nascita',
        required: true,
        value: this.user ? new DateModel(this.user.birthDate).formatDate() : new DateModel(new Date()), // "1977-03-16",
        order: 5
      }),
      new DropdownQuestion({
        key: 'level',
        label: 'Ruolo utente',
        options: configs['accessLevel'],
        value: this.user ? this.user.level : 3
      }),
    ]
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      header: "managed user",
      message: msg
    })
    await toast.present()

  }

  async storeUser(user: UserModel) {
    this.service.updateItem(user)
   /*  await Promise.all([
      this.service.setCustomClaim(this.user.uid, { accessLevel: this.user.level }),
      this.service.setCustomClaim(this.user.uid, { enabled: this.user.enabled })]).then(() => {
        this.showToast("user updated and claims set")
      }) */

  }

  filter(ev) {
    console.log('user 1', this.user, this.user.key)
    console.log('filter', ev)
    Object.assign(this.user, ev)
    console.log('user 2', this.user, this.user.key)
  }

  submit(ev) {
    console.log('submit', ev)
  }

}
