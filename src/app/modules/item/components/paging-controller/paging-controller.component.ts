import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  currentPage:number

  

  display(){
    return `pag ${this.currentPage} di ${Math.floor(this.countItems/this.paginationConfig.items4page)}`
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

  constructor() {
   }

  ngOnInit() {
this.currentPage =this.paginationConfig.currentPage

  }

  numberOfPage(){
    return Math.floor(this.countItems/this.paginationConfig.items4page)
  }

}
