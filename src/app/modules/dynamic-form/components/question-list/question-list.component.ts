import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,  forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ListableItemInterface } from '../../models/listableItemInterface';
import { ComponentRef } from '@ionic/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
  @Input() itemsList: Array<ListableItemInterface> = []
  @Input() createPopupPage: ComponentRef
  _itemsList:BehaviorSubject<Array<ListableItemInterface>> = new BehaviorSubject([])
  readonly itemsList2Subscribe:Observable<Array<ListableItemInterface>> =this._itemsList.asObservable()
  // tslint:disable-next-line: ban-types
  onChange: any = () => { };
  // tslint:disable-next-line: ban-types
  onTouched: any = () => { };
  disabled = false

ngOnInit() { 
  }

  constructor(public modalController:ModalController) { }
  writeValue(obj: any): void {
    this.itemsList = obj
    this._itemsList.next(obj)
    this.onChange(obj)

  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
  async createItem() {
    const modal = await this.modalController.create({ component: this.createPopupPage })
    modal.onDidDismiss().then(data =>{
      if (data.data){
        console.log('pusdhing',data.data)
        this.itemsList.push(data.data)
        this.writeValue(this.itemsList)
        this.onChange(this.itemsList)
        this._itemsList.next(this.itemsList)
      }
    })
    return modal.present()

  }

  
}
