import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dimensionnement } from 'src/app/models/Dimensionnement';
import { Dimcalcul } from 'src/app/models/Dimcalcul';
import {DimensionnementService} from 'src/app/services/dimensionnement.service';
import {DimcalculService } from 'src/app/services/dimcalcul.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AjouterDimensionnementComponent } from '../ajouter-dimensionnement/ajouter-dimensionnement.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-afficher-dimensionnement',
  templateUrl: './afficher-dimensionnement.component.html',
  styleUrls: ['./afficher-dimensionnement.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class AfficherDimensionnementComponent implements OnInit {

  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;
  //
dim1:Dimensionnement;
dim:Dimcalcul;
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  tabs :any[];
  display: boolean = false;
  isSuccessful = false;
  showFiller = false;

  for: FormGroup;
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;

  ajoutinf1 :FormGroup;
  id1:any;
  displayCalcule:boolean=false;
  calcule:any;
  selectedCanal:any;
  categories: Catdim[] = [
    {value: 'Primaire', viewValue: 'Primaire'},
    {value: 'Secondaire', viewValue: 'Secondaire'},
    {value: 'Tertiaire', viewValue: 'Tertiaire'}
 ];
  Categorie;
  
  
  
  selected() {
    console.log(this.Categorie);
  }
  //dimensionnement: Dimensionnement = new Dimensionnement();
  dimensionnement: Dimcalcul = new Dimcalcul();
 // submitted = false;

  // tabs = new Dimensionnement[];
  ajoutob:object= {};
  msj: string;
  constructor( private dimcal:DimcalculService ,private fin: DimensionnementService,private http:HttpClient,private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService,
     private form: FormBuilder,private route: ActivatedRoute,private token: TokenStorageService) {
    
   
    
    this.for = this.form.group({
      canals: [''],
      namont: [''],
      naval:[''],
      debitunitaire:[''],
      surface:[''],
      largeurdecanal:[''],
      coefmanning:[''],
      pente:[''],
      talus:[''],
      y0:[''],
      b: [''],
      revanche:[''],
      vitesse:['']
      
      




    });
    this.ajoutinf1=this.form.group({
      canals:['',[Validators.required]],
      namont:['',[Validators.required]],
      naval:['',[Validators.required]],
      debitunitaire:['',[Validators.required ]],
      surface:['',[Validators.required]],
      largeurdecanal:['',[Validators.required]],
      coefmanning:['',[Validators.required]],
      pente:['',[Validators.required]],
      talus:['',[Validators.required]],
      y0:['',[Validators.required]],
      revanche:['',[Validators.required]],
      b: ['', [Validators.required]]

    })

   }

   openNew() {
    this.info = {};
    this.submitted = false;
    this.ajoutInf = true;

  }
  hideDialog() {
    this.infDialog = false;
    this.submitted = false;
  }
 

  showDialog(dimensionnement) {
    this.display = true;
    console.log(dimensionnement)
}


  getdata() {
    this.id1 = this.route.snapshot.paramMap.get('id');
    //http://localhost:8088/api/dimc/allByPlan/1
    this.dimcal.getDimCalculList(this.id1).subscribe(data => this.tabs = data);

   // this.fin.getDimensionnementList().subscribe(data => this.tabs = data);
  }
  
  save() {
   if ((this.tabs)!= null){
    console.log(this.tabs);
    
 }
}
  /*display1=false;
  
  onEdit(id) {
    this.display1 = true;
    this.fin.getre('http://localhost:8088/getOneDim/' + id).subscribe(data => 
    {this.dim= data;
    console.log(id);
    console.log(data);
    },
      error1 => {console.log(error1); });
  }
  
  onupdateprod(value: any){
console.log(this.dim.id);
    this.fin.update('http://localhost:8088/dimensionnement/' + this.dim.id, value).subscribe
    (data => {alert('mise ajour terminer'),  this.isSuccessful = true; });
  }*/
  display1 = false;

  onEdit(dimensionnement) {
    this.dim = dimensionnement;

    console.log(this.dim)

    this.display1 = true;

  }
  onupdateprod(value: any, dim) {
    console.log(this.selectedCanal)

    this.dimcal.update(this.dim.id, this.dim).subscribe(data => {
      this.dim = data;
      console.log(this.dim)
      alert('mise ajour terminer'), this.isSuccessful = true;
      this.display1 = false;

    },
      error1 => { console.log(error1); });
    console.log("eeeeeeeeee")
  }


  //okk
  onDelete(id): void {

    if (confirm('Voulez-vous vraiment supprimer cette dimensionnement?')) {
          this.dimcal.delete(id).subscribe(data => {
        this.getdata();
       
      });
    }
  }
  ngOnInit(): void {
    this.getdata();
    this.save();
  
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1);

    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();
  }
// ajout

add(dimensionnement)
{

  
  this.ajoutob=
  {
    canals:dimensionnement.canals,
    namont:dimensionnement.namont,
    naval:dimensionnement.naval,
    debitunitaire:dimensionnement.debitunitaire,
    surface:dimensionnement.surface,
    largeurdecanal:dimensionnement.largeurdecanal,
    coefmanning:dimensionnement.coefmanning,
    pente:dimensionnement.pente,
    talus:dimensionnement.talus,
    y0:dimensionnement.y0,
    revanche:dimensionnement.revanche


    
  }

  console.log(this.ajoutob)
  
  this.id1 = this.route.snapshot.paramMap.get('id');
  this.http.post('http://localhost:8088/api/dimc/dims/'+this.id1,this.ajoutob).subscribe((res:Response)=>{
    this.msj="ajouter avec succ";
    console.log(this.ajoutinf1.value);
     this.getdata();
    this.ajoutInf = false;
    
  })

  }

  //calculer

  openCalcule(id){
  console.log(id)
    this.displayCalcule=true;
    this.dimcal.getDimById(id).subscribe(data => {
      this.calcule = data;

    console.log(data);
    });
    
   

  }
  //debit
  calculerDebit(id){
  console.log(id)
  console.log("debit")
this.dimcal.calculeDebit(id).subscribe(data => {
  this.calcule = data;
console.log(this.calcule.q)
console.log(data);
});
  }

  //yn calculeYn
  calculerYn(id){
    console.log(id)
    console.log("debityn")
  this.dimcal.calculeYn(id).subscribe(data => {
    this.calcule = data;
  console.log(this.calcule.yn)
  console.log(data);
  });

  }
//section 
calculerSection(id){
  console.log(id)
  console.log("section")
this.dimcal.calculeSection(id).subscribe(data => {
  this.calcule = data;
console.log(this.calcule.section)
console.log(data);
});


}
  //vitesse
  calculerVitesse(id){
    console.log(id)
    console.log("vitesse")
  this.dimcal.calculeVitesse(id).subscribe(data => {
    this.calcule = data;
  console.log(this.calcule.vitesse)
  console.log(data);
  });


  }

  addProfilenlong(id){
    console.log(id);
  
    this.router.navigate(['/profils/',id]);
  
  }
}
export interface Catdim {
  value: string;
  viewValue: string;
}
