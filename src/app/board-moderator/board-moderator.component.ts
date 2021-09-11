import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  content: '';
  ceci() {
    this.router.navigate(['dims']);

  }

  constructor(public router: Router, private userService: UserService, private token: TokenStorageService) { }

  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;


  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();

  }
}
