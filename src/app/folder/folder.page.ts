import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/app";
import { CrewUserprofileModel } from '../models/CrewUserProfile';
import { ActivityFields } from '../models/enumFields';
import { CategoryModel } from '../modules/categories/models/CategoryModel';
import { CategoriesService } from '../modules/categories/services/categorie.service';
import { DropdownQuestion } from '../modules/dynamic-form/models/question-dropdown';
import { SelectorQuestion } from '../modules/dynamic-form/models/question-selector';
import { TextboxQuestion } from '../modules/item/models/question-textbox';
import { CreateCrewUserPage } from '../pages/create-crew-user/create-crew-user.page';
import { UpdateCrewUserPage } from '../pages/update-crew-user/update-crew-user.page';
import { CrewUserService } from '../services/crew-user.service';




@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder: string;
  public createModalPage = CreateCrewUserPage
  public editModalPage = UpdateCrewUserPage


  filterFields: Array<any>

  public filterFunction: (item: CrewUserprofileModel) => boolean;
  public sorterFunction: (a: any, b: any) => number
  activityFields = [
    { key: "sala", value: ActivityFields.sala },
    { key: "accoglienza", value: ActivityFields.accoglienza },
    { key: "pasticceria", value: ActivityFields.pasticceria },
    { key: "cucina", value: ActivityFields.cucina }
  ]

  secondSpinner = false


  constructor(private activatedRoute: ActivatedRoute, private router: Router, public service: CrewUserService, public categories: CategoriesService) {
    const filter4Name = (value: string, item: CrewUserprofileModel) => item.firstName.toLocaleLowerCase().includes(value)
    const filter4Lastname = (value: string, item: CrewUserprofileModel) => item.lastName.toLocaleLowerCase().includes(value)
    const filter4Mansione = (value: string, item: CrewUserprofileModel) => item.crewRole.toLocaleLowerCase().includes(value)
    const filter4Field = (value: number, item: CrewUserprofileModel) => item.field == value
    const filter4Skill = (value: CategoryModel, item: CrewUserprofileModel) => item.isSkilled(value.key)
    
    this.filterFields = [
      new TextboxQuestion({
        key: "nome",
        label: "Nome",
        filterFunction: filter4Name
      }),
      new TextboxQuestion({
        key: "cognome",
        label: "Cognome",
        filterFunction: filter4Lastname
      }),
      new TextboxQuestion({
        key: "crewRole",
        label: "mansione",
        filterFunction: filter4Mansione
      })
      , new DropdownQuestion({
        key: 'field',
        label: "settore",
        options: this.activityFields,
        filterFunction: filter4Field
      }), new SelectorQuestion({ key: 'skill', label: "filtra per abilità", filterFunction: filter4Skill, service: this.categories, text: 'Abilità', createPopup: '' }),
      new DropdownQuestion({key:"field",
      options:this.activityFields,
      filterFunction:filter4Field,
      label:"cerca per indirizzo"  }),
    ]
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (!firebase.auth) {
      this.router.navigateByUrl("users/login")
    }
  }

  filter(filterParams) {
    console.log('filtering')
    console.log("param filter:", filterParams)
  }

  setFilterFunction(filter) {
    if (filter) {
      this.filterFunction = filter
    }
  }

}
