import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/app";
import { CrewUserprofileModel } from '../models/CrewUserProfile';
import { TextboxQuestion } from '../modules/item/models/question-textbox';
import { CreateCrewUserPage } from '../pages/create-crew-user/create-crew-user.page';
import { UpdateCrewUserPage } from '../pages/update-crew-user/update-crew-user.page';
import { CrewUserService } from '../services/crew-user.service';




interface filterParams{nome:string,cognome:string,crewRole:string} //  define the type returned by the form
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

    this.filterFields = [
      new TextboxQuestion({ key: "nome", label: "Nome" }),
      new TextboxQuestion({ key: "cognome", label: "Cognome" }),
      new TextboxQuestion({ key: "crewRole", label: "mansione" })
    ]
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (!firebase.auth) {
      this.router.navigateByUrl("users/login")
    }
  }

  filter(filterParams: filterParams) {
    console.log('filtering')
    console.log("param filter:", filterParams)
    const filter4Nome: (item: CrewUserprofileModel) => boolean = (!filterParams.nome) ? (item: CrewUserprofileModel) => true //se il campo non è definito  è sempre true
      : (item: CrewUserprofileModel) => (item.firstName) ? item.firstName.toLocaleLowerCase().includes(filterParams.nome.toLocaleLowerCase()) : false
      const filter4Cognome: (item: CrewUserprofileModel) => boolean = (!filterParams.cognome) ? (item: CrewUserprofileModel) => true 
        : (item: CrewUserprofileModel) => (item.lastName) ? item.lastName.toLocaleLowerCase().includes(filterParams.cognome.toLocaleLowerCase()) : false
        const filter4Mansione: (item: CrewUserprofileModel) => boolean = (!filterParams.crewRole) ? (item: CrewUserprofileModel) => true 
          : (item: CrewUserprofileModel) => (item.crewRole) ? item.crewRole.toLocaleLowerCase().includes(filterParams.crewRole.toLocaleLowerCase()) : false
    this.filterFunction = (item: CrewUserprofileModel) => filter4Nome(item) && filter4Cognome(item)
  }

}
