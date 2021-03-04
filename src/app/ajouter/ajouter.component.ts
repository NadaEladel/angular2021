import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutorisationService } from '../AutorisationService';
import { Autorisation } from "../Autorisation";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { AfficherComponent } from '../afficher/afficher.component';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  @Input() AfficherComponent
  @Output() saveEvent=new EventEmitter ()
 // ajout:FormGroup;
a : AfficherComponent ;
  autorisation: Autorisation = new Autorisation();
  submitted = false;
  tabs = new Autorisation();

  public tabs1 :Autorisation[];
//Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
  //-----------------------------------------------
ajoutob:object= {};
  msj: string;
  ajoutinf :FormGroup;
  
  constructor(private AS: AutorisationService,private router: Router,private confirmationService: ConfirmationService, private http:HttpClient,private fr:FormBuilder,private tab :AfficherComponent) { 
this.ajoutinf=this.fr.group({
  nomComplet:['',[Validators.required,Validators.minLength(2), Validators.maxLength(30)]],
  dateSortie:['',[Validators.required]],
  heureSortie:['',[Validators.required , Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
  heureRetour:['',[Validators.required]],
  raison:['',[Validators.required]],
  destination:['',[Validators.required]],
  motif:['',[Validators.required]],
  validateur:['',[Validators.required]]
})
    }

// ---------- ADD METHOD ----------


add(auto)
{
  this.ajoutob=
  {
    "nomComplet":auto.nomComplet,
    "dateSortie":auto.dateSortie,
    "heureSortie":auto.heureSortie,
    "heureRetour":auto.heureRetour,
    "raison":auto.raison,
    "destination":auto.destination,
    "motif":auto.motif,
    "validateur":auto.validateur,
    "etat":auto.etat

  }
  this.http.post("http://localhost:8083/examen/servlet/addAutorisation",this.ajoutob).subscribe((res:Response)=>{
    this.msj="ajouter avec succ";
    console.log(this.ajoutinf.value);
    this.tab.getdata()

  })

this.saveEvent.emit();
  }

  save()
  {
    this.submitted = true;
    console.log(this.ajoutinf.value);

  }

 

  getdata() {
    this.AS.getAutorisationList().subscribe(data => this.tabs = data);
  }

// ----------------------------------- FIN METHOD -----------------------
  ngOnInit() {
  }

  get nomComplet()
  {
    return this.ajoutinf.get("nomComplet");
  }

  get ds()
  {
    return this.ajoutinf.get("ds");
  }

  get heureSortie()
  {
    return this.ajoutinf.get("heureSortie");
  }

  get hr()
  {
    return this.ajoutinf.get("hr");
  }

get raison()
{
  return this.ajoutinf.get("raison");
}

get des()
{
  return this.ajoutinf.get("des");
}

get motif()
{
  return this.ajoutinf.get("motif");
}

get val()
{
  return this.ajoutinf.get("val");
}
  newAutorisation(): void {
    this.submitted = false;
    this.autorisation = new Autorisation();
  }
  
// add()
// {
//   this.tabs=this.ajout.value;
//   this.AS.createAutorisation(this.tabs).subscribe(data => {
//     console.log(data);
    
//   })
//   console.log(this.ajout.value);

// }

  // save() {
  //   this.AS.createAutorisation(this.autorisation)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   this.autorisation = new Autorisation();
  //   this.gotoList();
  // }

 /* formatDate(dateSortie) {
    let month = dateSortie.getMonth() + 1;
    let day = dateSortie.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    return dateSortie.getFullYear() + '-' + month + '-' + day;
}*/

 // onSubmit() {
  //this.submitted = true;
   // this.add;    
  //}

  gotoList() {
    this.router.navigate(['/autorisations']);

  }
}