import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/app";
import { CrewUserprofileModel } from '../models/CrewUserProfile';
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

  public filterFunction: (item: CrewUserprofileModel) => boolean;
  public sorterFunction: (a: any, b: any) => number

  secondSpinner = false
  

  constructor(private activatedRoute: ActivatedRoute,private router:Router,public service:CrewUserService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if(!firebase.auth){
      this.router.navigateByUrl("users/login")
    }
  }

}
