import { Component, OnInit } from '@angular/core';
import { paginationConfig } from '../../models/paginationConfig';

@Component({
  selector: 'app-paging-controller',
  templateUrl: './paging-controller.component.html',
  styleUrls: ['./paging-controller.component.scss'],
})
export class PagingControllerComponent implements OnInit {

 

  constructor() {
    console.log("ciao co")
   }

  ngOnInit() {}

}
