import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Note } from '../models/Note';
import { UploadService } from '../services/upload.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-noteadmin',
  templateUrl: './noteadmin.component.html',
  styleUrls: ['./noteadmin.component.css']
})
export class NoteadminComponent implements OnInit {
  private errorMessage: string;

  showFiller = false;
  public t1: any;
  public currentprod:Note ;
 isSuccessful = false;
 id: number;
 currentUser: any;
 roles: string[];
 isLoggedIn = false;
 username: string;
 idUser:number;
  constructor(private us:NoteService,private up:UploadService, 
    public dialog: MatDialog,
    private token: TokenStorageService) {
  }
 


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
    this.us.allnotes().subscribe(
      data => {
        this.t1 = data;
        console.log(this.t1);
      }, error => this.errorMessage = <any>error);
  }


 text: string;
  ook = false;



  traiter = false;
  onEdit(id:number) {
    console.log("test1 ")
    console.log(id)
    this.traiter = true;
    this.us.FindNoteID(id).subscribe(data => {
      this.currentprod = data;

      console.log("test")
      console.log(data)
      console.log(this.currentprod.usernote.id)
      this.idUser=this.currentprod.usernote.id;
    },
      error1 => {
        console.log(error1);
      });
  }

  message = ''
  onupdateprod() {

    console.log("test")
    console.log(this.idUser)
    this.us.motif(this.id, this.text).
      subscribe((data: any) => {
        if (data instanceof HttpResponse) {
          this.message = data.body.message;
        }

       this.us.update(this.currentprod.id_note).subscribe(data => {
      console.log(data)
        } );
       this.affiche();
        this.ook = true;

       
      },
        error1 => { 
          console.log(this.currentprod.id_note
            )
          console.log(error1); });


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
  }





}
