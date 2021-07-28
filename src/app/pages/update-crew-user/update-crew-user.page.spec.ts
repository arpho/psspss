import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ModalController, AngularDelegate, NavParams } from '@ionic/angular';
import { UpdateCrewUserPage } from './update-crew-user.page';
import {MockNavParams} from '../../mockers/mockNavParams'

describe('UpdateCrewUserPage', () => {
  let component: UpdateCrewUserPage;
  let fixture: ComponentFixture<UpdateCrewUserPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCrewUserPage ],
      imports: [IonicModule.forRoot()],
      providers:[ModalController,AngularDelegate, { provide: NavParams, useClass: MockNavParams }]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCrewUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
