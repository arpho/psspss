import { Component, Input, OnInit } from '@angular/core';
import { paginationConfig } from '../../models/paginationConfig';

@Component({
  selector: 'app-paging-controller',
  templateUrl: './paging-controller.component.html',
  styleUrls: ['./paging-controller.component.scss'],
})
export class PagingControllerComponent implements OnInit {
  @Input() paginationConfig:paginationConfig
  @Input() countItems:number

  currentPage=0

  display(){
    return `pagina${this.currentPage} di ${Math.floor(this.countItems/this.paginationConfig.items4page)}`
  }
 

  constructor() {
    console.log("ciao co")
   }

  ngOnInit() {


  }

}
