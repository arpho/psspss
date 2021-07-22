
// tslint:disable:semicolon
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.page.html',
  styleUrls: ['./filter-popup.page.scss'],
})
export class FilterPopupPage implements OnInit {
  filterFields: any;

  constructor(public modalCtrl: ModalController, navParams: NavParams) {
    this.filterFields = navParams.get('filterFields')
  }


  ngOnInit() {
  }

  async submit(ev: {}) {
 
    this.modalCtrl.dismiss(ev)
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

  editing(ev){
  }

}
