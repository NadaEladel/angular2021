import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Dimensionnement } from '../models/Dimensionnement';
import { Plan } from '../models/Plan';
import { Profilenlong } from '../models/Profilenlong';
import { DimensionnementService } from '../services/dimensionnement.service';
import { PlanService } from '../services/plan.service';
import { ProfilenlongService } from '../services/profilenlong.service';
import { UploadService } from '../services/upload.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class PlanComponent implements OnInit {

  profil:Plan;
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :any[];
  display: boolean = false;
  isSuccessful = false;
  showFiller = false;

  for: FormGroup;
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  plans:any;
  show1:boolean=false;
  private errorMessage: string;

  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;

  constructor(private token: TokenStorageService,private fin: ProfilenlongService,private router: Router, private messageService: MessageService,
     private confirmationService: ConfirmationService, private form: FormBuilder
     ,private planService:PlanService,private up:UploadService) {
    this.for = this.form.group({
      canals: [''],
      namont: [''],
      naval:[''],
      hauteurchute:[''],
      nombredechute:[''],
      chute:[''],
      longueur:[''],
      cotetnamont:[''],
      cotetnaval:['']
     




    })

   }


   ngOnInit(): void {
    this.getdata();
  
    this.save();

    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();

  }
  
   openNew() {
   this.info = {};
    this.submitted = false;
  this.ajoutInf = true;
   //this.show1=true;

  }
  hideDialog() {
    this.infDialog = false;
    this.submitted = false;
  }
 

  showDialog() {
    this.display = true;
}

save() {
  console.log(this.tabs);
  
}
 
//get all plans

  getdata() {
 
    this.planService.allnotes().subscribe(data => this.tabs = data);
  
 
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
 
  display1=false;
  
  onEdit(plan) {
     this.profil = plan;

     console.log(this.profil)

    this.display1 = true;
   
  }
  onupdateprod(value: any, profil) {
   /*  profil=this.profil ;
    this.fin.update('http://localhost:8088/profilenlong/' + this.profil.getId, value).subscribe
    (data => {alert('mise ajour terminer'),  this.isSuccessful = true; }); */

    this.planService.update(this.profil.idPlan,this.profil).subscribe(data => 
      {this.profil= data;
      console.log(this.profil)
      alert('mise ajour terminer'),  this.isSuccessful = true;
      this.display1 = false;

      },
        error1 => {console.log(error1); }); 
    console.log("eeeeeeeeee")
  }


  //okk
  onDelete(id): void {

    if (confirm('Voulez-vous vraiment supprimer cette profil en long?')) {
          this.planService.delete(id).subscribe(data => {
            this.getdata();


       
      });
    }
  }
 

   // go to dimensionnement
 addDim(idp){
  console.log(idp);

  this.router.navigate(['/dims/',idp]);

}
}
