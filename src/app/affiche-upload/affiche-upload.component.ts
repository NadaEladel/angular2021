import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Proposition } from '../models/Proposition';
import { UploadService } from '../services/upload.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-affiche-upload',
  templateUrl: './affiche-upload.component.html',
  styleUrls: ['./affiche-upload.component.css']
})
export class AfficheUploadComponent implements OnInit {
  private errorMessage: string;

  showFiller = false;


  constructor(private us: UploadService, private activatedRoute: ActivatedRoute,
    private userservice: UserService, public dialog: MatDialog, private router: Router,
    private token: TokenStorageService) {
  }
  public t1: any;
  public currentprod: Proposition;
  isSuccessful = false;
  users: any;
  userMail;
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
    this.us.getPropositionList().subscribe(
      data => {
        this.t1 = data;
        console.log(this.t1);
      }, error => this.errorMessage = <any>error);
  
  }
  display1  = false;

  affiche() {
    this.us.getPropositionList().subscribe(
      data => {
        this.t1 = data;
        console.log(this.t1);
      }, error => this.errorMessage = <any>error);
  }
  display = false;

  ooshow() {
    this.display = true;
  }



  downloadFile(fl) {

    //calling service
    this.us.downloadFile(fl).subscribe(x => {

      const blob = new Blob([x], { type: 'application/pdf' });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob);
        return;
      }
      const data = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.setAttribute('target', 'blank');
      a.href = data;
      a.download = fl;
      a.click();
      window.URL.revokeObjectURL(data);
      a.remove();

    }, error => {

      console.log(error);
    });
  }





}