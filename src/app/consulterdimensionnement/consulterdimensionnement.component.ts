import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dimcalcul } from '../models/Dimcalcul';
import { Plan } from '../models/Plan';
import { DimcalculService } from '../services/dimcalcul.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-consulterdimensionnement',
  templateUrl: './consulterdimensionnement.component.html',
  styleUrls: ['./consulterdimensionnement.component.css']
})
export class ConsulterdimensionnementComponent implements OnInit {

  private errorMessage: string;

  showFiller = false;

  constructor(private us: DimcalculService, public dialog: MatDialog,

    private token: TokenStorageService) {
  }
  display: boolean = false;

  public t1: any;
  public currentprod: Dimcalcul;
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


  affiche() {
    this.us.alldim().subscribe(
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
  showDialog(dim) {
    this.display = true;
    console.log(dim)
  }
}





