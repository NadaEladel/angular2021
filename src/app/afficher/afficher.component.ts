import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Autorisation } from '../Autorisation';
import { AutorisationService } from '../AutorisationService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import {DialogModule} from 'primeng/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {AccordionModule} from 'primeng/accordion';






@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class AfficherComponent implements OnInit {

  @ViewChild ("ajout",{static:false}) ajout :AjouterComponent
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Autorisation[];
  display: boolean = false;

  for: FormGroup
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  constructor(private fin: AutorisationService, private messageService: MessageService, private confirmationService: ConfirmationService, private form: FormBuilder) {
    this.for = this.form.group({
      nomComplet: [''],
      dateSortie: [''],
      heureSortie:[''],
      heureRetour:[''],
      raison:[''],
      destination:[''],
      motif:[''],
      validateur:[''],
      etat:[''],



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

    showDialog() {
        this.display = true;
    }

 
  get nomComplet()
  {
    return this.for.get("nomComplet");
  }



  getdata() {
    this.fin.getAutorisationList().subscribe(data => this.tabs = data);
  }
  
  save() {
    console.log(this.tabs.values);
    
  }

 

  ngOnInit(): void {
    this.getdata();
    this.save();
  }

  
}
