import { Component, Input, OnInit } from '@angular/core';
import { ListableItemInterface } from '../../models/listableItemInterface';

@Component({
  selector: 'app-listable-item',
  templateUrl: './listable-item.component.html',
  styleUrls: ['./listable-item.component.scss'],
})
export class ListableItemComponent implements OnInit {
  @Input() item: ListableItemInterface

  constructor() { }

  ngOnInit() { }

}
