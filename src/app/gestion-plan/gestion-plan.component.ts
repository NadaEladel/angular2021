import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { PlanService } from '../services/plan.service';
import { Plan } from '../models/Plan';
import { UploadService } from '../services/upload.service';



@Component({
  selector: 'app-gestion-plan',
  templateUrl: './gestion-plan.component.html',
  styleUrls: ['./gestion-plan.component.css']
})
export class GestionPlanComponent implements OnInit {
  description: string;
  obj: string;
  add:string;
  roles: string[];
  isLoggedIn = false;
  username: string;
  id: number;
  isSuccessful = false;

  display = false;
  val1: number;

  val2 = 5;

  val3: number;

  val4 = 5;

  val5: number;
currentUser:any;
  msg: string;
  plans:any[];
  private errorMessage: string;
  constructor( private token: TokenStorageService, private router: Router, private up:UploadService,
    private planService: PlanService) {
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

    }
    

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  currentFileUpload: File;
  addavis() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
 /*    adresse: string, reseaux: string, proprietaire:string, id: number,file: File
    this.planService.rec() */
    this.planService.rec(this.add,this.obj, this.description , this.id, this.currentFileUpload).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);

      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
      }

      this.isSuccessful = true;
      this.getdata();


    },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
 
  }

  // latest snapshot
  public imagePath;
  imgURL: any;
  fileName: any;
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.item(0).name);
    this.selectedFiles = event.target.files;

    if (event.target.files.length > 0) {
      const file = event.target.files[0];


      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }


    }

  }

  showBasicDialog() {
    this.display = true;
  }
  handleRate(event) {
    this.msg = 'You have rated ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Rating Cancelled';
  }

  //get all plan
  getdata() {
 
    this.planService.allnotes().subscribe(
      data => {
        this.plans = data;
        console.log(this.plans);
      }, error => this.errorMessage = <any>error);

  }
  
  
  //edit
  onEdit(){

  }
  //supprimer 
  onDelete(){

  }


  //telecharger file
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
