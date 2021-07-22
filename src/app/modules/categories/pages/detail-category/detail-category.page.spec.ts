import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCategoryPage } from './detail-category.page';
import { ModalController, AngularDelegate, NavParams, NavController } from '@ionic/angular';
import { MockNavParams } from 'src/app/modules/item/pages/selector-items/mockNavParams';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from '../../services/categorie.service';


describe('DetailCategoryPage', () => {
  let component: DetailCategoryPage;
  let fixture: ComponentFixture<DetailCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCategoryPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        ModalController,
        AngularDelegate,
        CategoriesService,
        { provide: NavParams, useClass: MockNavParams },
      ],
      // imports: [HttpClientModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
