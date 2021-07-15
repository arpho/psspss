import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ListableItemInterface } from '../../models/listableItemInterface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => QuestionListComponent)
  }]
})
export class QuestionListComponent implements OnInit, ControlValueAccessor {
  @Input() itemsList: Array<ListableItemInterface>

  constructor() { }
  writeValue(obj: any): void {
    this.itemsList = obj
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() { }

}
