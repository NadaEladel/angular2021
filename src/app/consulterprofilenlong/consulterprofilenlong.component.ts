import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Profilenlong } from '../models/Profilenlong';
import { ProfilenlongService } from '../services/profilenlong.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-consulterprofilenlong',
  templateUrl: './consulterprofilenlong.component.html',
  styleUrls: ['./consulterprofilenlong.component.css']
})
export class ConsulterprofilenlongComponent implements OnInit {

  private errorMessage: string;

  showFiller = false;
  display: boolean = false;

  constructor(private us: ProfilenlongService, public dialog: MatDialog,

    private token: TokenStorageService) {
  }
  public t1: any;
  public currentprod: Profilenlong;
  isSuccessful = false;
  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;
  idplan: number;

  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();

    this.affiche();
  }

//to do get all profil en long
  affiche() {
    this.us.getAllProfilenlong().subscribe(
      data => {
        this.t1 = data;
        console.log(this.t1);
      }, error => this.errorMessage = <any>error);
  }


  text: string;
  ook = false;



  /* traiter = false;
   onEdit(s) {
     this.traiter = true;
     this.us.(s.id_note).subscribe(data => {
       this.currentprod = data;
     },
       error1 => {
         console.log(error1);
       });
   }
 
   message = ''
   onupdateprod() {
     this.us.motif(this.currentprod.id_note, this.text).
       subscribe((data: any) => {
         if (data instanceof HttpResponse) {
           this.message = data.body.message;
         }
         this.affiche();
 
         this.ook = true;
       },
         error1 => {
           console.log(this.currentprod.id_note
           )
           console.log(error1);
         });
 
 
   }
 
   downloadFile(fl) {
 
     //calling service
     this.up.downloadFile(fl).subscribe(x => {
 
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
 
     }, error => {
 
       console.log(error);
     });
     */

  showDialog(profilenlong) {
    this.display = true;
    console.log(profilenlong)
  }
}