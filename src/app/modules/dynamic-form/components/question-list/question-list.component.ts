import { Component, Input, OnInit } from '@angular/core';
import { ListableItemInterface } from '../../models/listableItemInterface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  @Input() itemsList:Array<ListableItemInterface>

  constructor() { }

  ngOnInit() {}

}
