// tslint:disable:semicolon
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ComponentFactoryResolver
  // tslint:disable: quotemark
} from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { ItemModelInterface } from "../../models/itemModelInterface";
import { ItemServiceInterface } from "../../models/ItemServiceInterface";
import { Router } from "@angular/router";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ComponentRef } from '@ionic/core';
import { paginationConfig } from "../../models/paginationConfig";
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: "app-page-items-list",
  templateUrl: "./page-items-list.page.html",
  styleUrls: ["./page-items-list.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageItemsListComponent implements OnInit, OnChanges {
  _countingItems: BehaviorSubject<number>  = new BehaviorSubject(0)
  readonly countingItems2Subscribe: Observable<number>= this._countingItems.asObservable()
  // tslint:disable-next-line: variable-name
  @Input() items_list: ItemModelInterface[];
  @Input() secondSpinner
  @Input() service: ItemServiceInterface;
  @Input() editModalPage: ComponentRef
  public dummyItem: ItemModelInterface; // used in template
  @Input() filterFunction: (item: ItemModelInterface) => boolean;
  @Input() sorterFunction: (a: ItemModelInterface, b: ItemModelInterface) => number
  @Input() paginationActive: boolean
  paginationConfig: paginationConfig = { paginationActive: true, currentPage: 0, items4page: 5 }
  public showSpinner = true;
  public showSpinner2 = false;
  @Input() createModalPage: ComponentRef;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public modalController: ModalController,
    public ref: ChangeDetectorRef,
  ) {
    // this.showSpinner = false
    this.filterFunction = v => true;
  }

  async createItem() {
    const modal = await this.modalController.create({ component: this.createModalPage })
    return await modal.present()

  }
  ngOnInit() {

    this.service.items.subscribe(items => {
    })
    if (!this.filterFunction) {
      this.filterFunction = this.filterFunction ? this.filterFunction : (v: ItemModelInterface) => true;
    }
    if (!this.sorterFunction) {
      this.sorterFunction = (a: ItemModelInterface, b: ItemModelInterface) => 0
    }
    if (this.service) {
      this.dummyItem = this.service.getDummyItem();
      if (this.items_list) {
        const next = () => {
          this.ref.markForCheck()
        }
        this.items_list.forEach(item => {
          if (item) {
            item.load(next)
          }
        })
      }
    }
  }

  setCurrentPage(ev) {
    this.paginationConfig.currentPage = ev
    this.paginationConfig = { ...this.paginationConfig }
  }

  setItems4Page(ev) {
    this.paginationConfig.items4page = ev
    this.paginationConfig = { ...this.paginationConfig }
  }

  async updateItem(item: ItemModelInterface, slide: {}) {
    const modal = await this.modalController.create({ component: this.editModalPage, componentProps: { item } })
    // tslint:disable-next-line: no-string-literal
    slide['close']()
    return await modal.present()
  }

  async deleteItem(item: ItemModelInterface, slide: {}) {
    // tslint:disable-next-line: no-string-literal
    slide['close']();
    const element = this.service.getDummyItem().getElement();
    const alert = await this.alertCtrl.create({
      message: ` vuoi davvero cancellare quest${element.genere} ${element.element
        }?(${item.title})`,
      buttons: [
        {
          text: "Annulla",
          role: "cancel",
          handler: () => { }
        },
        {
          text: "Cancella",
          handler: () => {
            this.service.deleteItem(item.key);
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.service && this.service.items) {
      this.service.items.subscribe((items) => {
        if (items) {
          this.showSpinner = false
          this.secondSpinner = false
        }
      })
    }
    if (changes.items_list && changes.items_list.currentValue) {
      this.items_list = changes.items_list.currentValue;
      this.showSpinner = false;
    }
    if (changes.filterFunction) {
      this.filterFunction = changes.filterFunction.currentValue;
      this._countingItems.next(this.countItems())
    }
  }

  countItems() {
    var count
    if (this.service) {
      this.service.items.subscribe(items => {
        if(items && this.filterFunction)
       {
         
        count = items.filter(this.filterFunction).length || 0}
      })
    }
    return (count) ? count : "loading";
  }

  editItem(item: ItemModelInterface) {
    this.router.navigate([this.editModalPage, item.key]);
  }


}
