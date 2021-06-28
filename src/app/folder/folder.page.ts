import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/app";
import { CrewUserprofileModel } from '../models/CrewUserProfile';
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

  secondSpinner = false


  constructor(private activatedRoute: ActivatedRoute, private router: Router, public service: CrewUserService) {
    const filter4Name = (value: string, item: CrewUserprofileModel) =>  item.firstName.toLocaleLowerCase().includes(value) 
    const filter4Lastname = (value: string, item: CrewUserprofileModel) => item.lastName.toLocaleLowerCase().includes(value) 
    const filter4Mansione = (value: string, item: CrewUserprofileModel) => item.crewRole.toLocaleLowerCase().includes(value) 
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
