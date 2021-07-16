import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuestionRate } from 'src/app/modules/dynamic-form/models/question-rate';
import { TextAreaBox } from 'src/app/modules/dynamic-form/models/question-textArea';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.page.html',
  styleUrls: ['./create-review.page.scss'],
})
export class CreateReviewPage implements OnInit {


  reviewFields = [
    new QuestionRate({key:"rate",label:"valutazione"}),
    new TextAreaBox({key:"review",label:"giudizio",autoGrow:true})
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
