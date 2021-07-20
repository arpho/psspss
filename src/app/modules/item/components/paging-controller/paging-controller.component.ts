import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { paginationConfig } from '../../models/paginationConfig';

@Component({
  selector: 'app-paging-controller',
  templateUrl: './paging-controller.component.html',
  styleUrls: ['./paging-controller.component.scss'],
})
export class PagingControllerComponent implements OnInit {
  @Input() paginationConfig:paginationConfig
  @Input() countItems:number
  @Output() currentPageEvent: EventEmitter<number> = new EventEmitter<number>()
  @Output() items4Page:EventEmitter<number>= new EventEmitter<number>()
  currentPage:number

  constructor(private alertCtrl:AlertController) {
   }

  ngOnInit() {
this.currentPage =this.paginationConfig.currentPage

  }

  display(){
    return `pag ${this.currentPage+1} di ${Math.floor(this.countItems/this.paginationConfig.items4page)}`
  }

  previousPage(){
    if(this.currentPage>0){
      this.currentPage-=1
      console.log('current',this.currentPage)
      this.currentPageEvent.emit(this.currentPage)
  
    }
  }
  nextPage(){
    if(this.currentPage<this.numberOfPage()){
      this.currentPage+=1
      console.log('current',this.currentPage)
      this.currentPageEvent.emit(this.currentPage)
  
    }
  }

  firstPage(){
    if(this.currentPage>0){
      this.currentPage =0
      console.log('current',this.currentPage)
      this.currentPageEvent.emit(this.currentPage)
  
    }
  }
  lastPage(){
    this.currentPage= this.numberOfPage()
    console.log('current',this.currentPage)
    this.currentPageEvent.emit(this.currentPage)
  }

  

  numberOfPage(){
    return Math.floor(this.countItems/this.paginationConfig.items4page)
  }

  async settings(){
    let alert =  await this.alertCtrl.create(
      {
        cssClass: 'my-custom-class',
        header: 'impostazioni di paginazione',
        subHeader: 'quanti candidati per pagina?',
        message: `1-${this.countItems}`,
        inputs:[{name:"items4Page",
      type:'number'}],
        buttons: ['OK']
      
    })
    alert.onDidDismiss().then(v=>{
     this.firstPage() //we move to the first page
      this.items4Page.emit(Number(v.data.values.items4Page))
    })
    await alert.present()
    
  }

}
