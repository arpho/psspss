
// tslint:disable:semicolon
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { SwitchQuestion } from 'src/app/modules/item/models/question-switch';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.page.html',
  styleUrls: ['./filter-popup.page.scss'],
})
export class FilterPopupPage implements OnInit {
  filterFields: any;

  constructor(public modalCtrl: ModalController, navParams: NavParams,public toastCtrl:ToastController) {
    this.filterFields = navParams.get('filterFields')
  }


  ngOnInit() {
  }

  async submit(ev: {}) {
    console.log('submit',ev)
    const toast = await this.toastCtrl.create({
      header:'debug',
      message:`input_${ev['nome']}_`
    })
    await toast.present()
    this.modalCtrl.dismiss(ev)
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

  editing(ev){
  }

}
