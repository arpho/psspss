import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagingControllerComponent } from './paging-controller.component';
import { ModalController, AngularDelegate, NavParams } from '@ionic/angular';
import {MockNavParams} from '../../../../mockers/mockNavParams'

describe('PagingControllerComponent', () => {
  let component: PagingControllerComponent;
  let fixture: ComponentFixture<PagingControllerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingControllerComponent ],
      imports: [IonicModule.forRoot()],
      providers:[ModalController,AngularDelegate, { provide: NavParams, useClass: MockNavParams }]
    }).compileComponents();

    fixture = TestBed.createComponent(PagingControllerComponent);
    component = fixture.componentInstance;
    component.paginationConfig={items4page:5,paginationActive:true,currentPage:0}
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
