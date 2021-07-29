import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-manager',
  templateUrl: './users-manager.page.html',
  styleUrls: ['./users-manager.page.scss'],
})
export class UsersManagerPage implements OnInit {

  constructor(public service:UsersService) { }

  ngOnInit() {
  }

}
