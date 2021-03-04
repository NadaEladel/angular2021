import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Profilenlong } from 'src/app/models/Profilenlong';
import {ProfilenlongService } from 'src/app/services/profilenlong.service';
import { AfficherProfilenlongComponent } from '../afficher-profilenlong/afficher-profilenlong.component';

@Component({
  selector: 'app-ajouter-profilenlong',
  templateUrl: './ajouter-profilenlong.component.html',
  styleUrls: ['./ajouter-profilenlong.component.css']
})
export class AjouterProfilenlongComponent implements OnInit {

  ajoutinf :FormGroup;
  
  categories: Catprofil[] = [
    {value: 'Primaire', viewValue: 'Primaire'},
    {value: 'Secondaire', viewValue: 'Secondaire'},
    {value: 'Tertiaire', viewValue: 'Tertiaire'}
 ];
  Categorie;
  
  selected() {
    console.log(this.Categorie);
  }
  profilenlong: Profilenlong = new Profilenlong();
  submitted = false;
  tabs = new Profilenlong();
  ajoutob:object= {};
  msj: string;
  constructor(private PS: ProfilenlongService,private router: Router, private http:HttpClient,private fr:FormBuilder,private tab:AfficherProfilenlongComponent) {
    this.ajoutinf=this.fr.group({
      canals:['',[Validators.required]],
      namont:['',[Validators.required]],
      naval:['',[Validators.required]],
      hauteurchute:['',[Validators.required ]],
      nombredechute:['',[Validators.required]],
      chute:['',[Validators.required]],
      longueur:['',[Validators.required]],
      cotetnamont:['',[Validators.required]],
      cotetnaval:['',[Validators.required]],
      
    })

   }
   add(profilenlong)
  {
    this.ajoutob=
    {
      "canals":profilenlong.canals,
      "namont":profilenlong.namont,
      "naval":profilenlong.naval,
      "hauteurchute":profilenlong.hauteurchute,
      "nombredechute":profilenlong.nombredechute,
      "chute":profilenlong.chute,
      "longueur":profilenlong.longueur,
      "cotetnamont":profilenlong.cotetnamont,
      "cotetnaval":profilenlong.cotetnaval
      

    }
    this.http.post("http://localhost:8088/addProfil",this.ajoutob).subscribe((res:Response)=>{
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
      this.PS.getProfilenlongList().subscribe(data => this.tabs = data);
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

  get hauteurchute()
  {
    return this.ajoutinf.get("hauteurchute");
  }

  get nombredechute()
  {
    return this.ajoutinf.get("nombredechute");
  }

  get chute()
  {
    return this.ajoutinf.get("chute");
  }

  get longueur()
  {
    return this.ajoutinf.get("longueur");
  }

  get cotetnamont()
  {
    return this.ajoutinf.get("cotetnamont");
  }

  get cotetnaval()
  {
    return this.ajoutinf.get("cotetnaval");
  }


  newProfilenlong(): void {
    this.submitted = false;
    this.profilenlong = new Profilenlong();
  }

  gotoList() {
    this.router.navigate(['/profils']);

  }

}
export interface Catprofil {
  value: string;
  viewValue: string;
}
