import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/app";
import { CrewUserService } from '../services/crew-user.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  

  constructor(private activatedRoute: ActivatedRoute,private router:Router,service:CrewUserService) { }

  ngOnInit() {
    console.log('auth',firebase.auth)
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('folder',this.folder)
    if(!firebase.auth){
      this.router.navigateByUrl("users/login")
    }
  }

}
