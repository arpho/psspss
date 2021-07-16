import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuestionRate } from 'src/app/modules/dynamic-form/models/question-rate';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.page.html',
  styleUrls: ['./create-review.page.scss'],
})
export class CreateReviewPage implements OnInit {


  reviewFields = [
    new QuestionRate({key:"rate",label:"valutazione"})
  ]
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  filter(ev){
    console.log('input',ev)
  }

  submit(ev){
    console.log('sumit',ev)
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }


}
