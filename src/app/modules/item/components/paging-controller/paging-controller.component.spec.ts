import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagingControllerComponent } from './paging-controller.component';

describe('PagingControllerComponent', () => {
  let component: PagingControllerComponent;
  let fixture: ComponentFixture<PagingControllerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingControllerComponent ],
      imports: [IonicModule.forRoot()]
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
