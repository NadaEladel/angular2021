import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dimensionnement } from 'src/app/models/Dimensionnement';
import {DimensionnementService } from 'src/app/services/dimensionnement.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AfficherDimensionnementComponent} from 'src/app/afficher-dimensionnement/afficher-dimensionnement.component';

@Component({
  selector: 'app-ajouter-dimensionnement',
  templateUrl: './ajouter-dimensionnement.component.html',
  styleUrls: ['./ajouter-dimensionnement.component.css']
})
export class AjouterDimensionnementComponent implements OnInit {
  @Input() AfficherDimensionnementComponent
  ajoutinf :FormGroup;
 categories: Catdim[] = [
    {value: 'Primaire', viewValue: 'Primaire'},
    {value: 'Secondaire', viewValue: 'Secondaire'},
    {value: 'Tertiaire', viewValue: 'Tertiaire'}
 ];
  Categorie;
  
  selected() {
    console.log(this.Categorie);
  }
  dimensionnement: Dimensionnement = new Dimensionnement();
  submitted = false;
  tabs = new Dimensionnement();
  ajoutob:object= {};
  msj: string;
  constructor(private DS: DimensionnementService,private router: Router, private http:HttpClient,private fr:FormBuilder,private tab:AfficherDimensionnementComponent) {
    this.ajoutinf=this.fr.group({
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
  
    })

   }
   add(dimensionnement)
  {
    this.ajoutob=
    {
      "canals":dimensionnement.canals,
      "namont":dimensionnement.namont,
      "naval":dimensionnement.naval,
      "debitunitaire":dimensionnement.debitunitaire,
      "surface":dimensionnement.surface,
      "largeurdecanal":dimensionnement.largeurdecanal,
      "coefmanning":dimensionnement.coefmanning,
      "pente":dimensionnement.pente,
      "talus":dimensionnement.talus,
      "y0":dimensionnement.y0,
      "revanche":dimensionnement.revanche

    }
    this.http.post("http://localhost:8088/addDim",this.ajoutob).subscribe((res:Response)=>{
      this.msj="ajouter avec succ";
      console.log(this.ajoutinf.value);
      this.tab.getdata()

      
    })

    }
    save()
    {
      this.submitted = true;
      console.log(this.ajoutinf.value);
  
    }
  
   
  
    getdata() {
      this.DS.getDimensionnementList().subscribe(data => this.tabs = data);
    }

  ngOnInit(): void {
  }
  get Canals()
  {
    return this.ajoutinf.get("canals");
  }

  get Namont()
  {
    return this.ajoutinf.get("namont");
  }

  get Naval()
  {
    return this.ajoutinf.get("naval");
  }

  get Debitunitaire()
  {
    return this.ajoutinf.get("debitunitaire");
  }

get Surface()
{
  return this.ajoutinf.get("surface");
}

get Largeurdecanal()
{
  return this.ajoutinf.get("largeurdecanal");
}

get Coefmanning()
{
  return this.ajoutinf.get("coefmanning");
}

get Pente()
{
  return this.ajoutinf.get("pente");
}

get Talus()
{
  return this.ajoutinf.get("talus");
}

get Y0()
{
  return this.ajoutinf.get("y0");
}

get Revanche()
{
  return this.ajoutinf.get("revanche");
}
  newDimensionnement(): void {
    this.submitted = false;
    this.dimensionnement = new Dimensionnement();
  }

  gotoList() {
    this.router.navigate(['/dims']);

  }

}
export interface Catdim {
  value: string;
  viewValue: string;
}



