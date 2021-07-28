import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { paginationConfig } from '../../models/paginationConfig';

@Component({
  selector: 'app-paging-controller',
  templateUrl: './paging-controller.component.html',
  styleUrls: ['./paging-controller.component.scss'],
})
export class PagingControllerComponent implements OnInit {
  @Input() paginationConfig: paginationConfig
  @Input() countItems: number
  @Output() currentPageEvent: EventEmitter<number> = new EventEmitter<number>()
  @Output() items4Page: EventEmitter<number> = new EventEmitter<number>()
  currentPage: number

  constructor(private alertCtrl: AlertController,
    public toastController: ToastController) {
  }

  ngOnInit() {
    this.currentPage = this.paginationConfig?.currentPage

  }

  display() {
    return `pag ${this.currentPage + 1} di ${this.numberOfPage()}`
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1
      this.currentPageEvent.emit(this.currentPage)

    }
  }
  nextPage() {
    if (this.currentPage + 1 < this.numberOfPage()) {
      this.currentPage += 1
      this.currentPageEvent.emit(this.currentPage)

    }
  }

  firstPage() {
    if (this.currentPage > 0) {
      this.currentPage = 0
      this.currentPageEvent.emit(this.currentPage)

    }
  }
  lastPage() {
    this.currentPage = this.numberOfPage()-1
    this.currentPageEvent.emit(this.currentPage)
  }



  numberOfPage() {
    const sparePage = this.countItems%this.paginationConfig.items4page>0? 1:0
    return Math.floor(this.countItems / this.paginationConfig.items4page)+sparePage|| 0
  }

  async showToast(msg:string){
    const toast = await this.toastController.create({
      message:msg,
      duration:2000,position:"middle"
    })
    toast.present()
  }

  async settings() {
    let alert = await this.alertCtrl.create(
      {
        cssClass: 'my-custom-class',
        header: 'impostazioni di paginazione',
        subHeader: 'quanti candidati per pagina?',
        message: `1-${this.countItems}`,
        inputs: [{
          name: "items4Page",
          type: 'number'
        }],
        buttons: ['OK']

      })
    alert.onDidDismiss().then(v => {
      const items4Page = Number(v.data.values.items4Page)
      if (items4Page > 0 && items4Page <= this.countItems) {
        this.firstPage() //we move to the first page
        this.items4Page.emit(Number(v.data.values.items4Page))
      }
      else{
        this.showToast(`puoi inserire un valore compreso tra 1 e ${this.countItems}`)
      }
    }
    )
    await alert.present()

  }

}
