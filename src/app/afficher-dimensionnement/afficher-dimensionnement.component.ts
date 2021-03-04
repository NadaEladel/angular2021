import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dimensionnement } from 'src/app/models/Dimensionnement';
import {DimensionnementService } from 'src/app/services/dimensionnement.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AjouterDimensionnementComponent } from '../ajouter-dimensionnement/ajouter-dimensionnement.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-afficher-dimensionnement',
  templateUrl: './afficher-dimensionnement.component.html',
  styleUrls: ['./afficher-dimensionnement.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class AfficherDimensionnementComponent implements OnInit {
dim:Dimensionnement;
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Dimensionnement[];
  display: boolean = false;

  for: FormGroup;
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  constructor(private fin: DimensionnementService,private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService, private form: FormBuilder) {
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
      revanche:['']
      




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


  getdata() {
    this.fin.getDimensionnementList().subscribe(data => this.tabs = data);
  }
  
  save() {
    console.log(this.tabs.values);
    
  }
  display1=false;
  onEdit(dim) {
    this.display1 = true;
    this.fin.getre('http://localhost:8088/getOneDim/' + this.dim.getId).subscribe(data => 
    {this.dim= data; },
      error1 => {console.log(error1); });
  }
  isSuccessful=false;
  onupdateprod(value: any) {
    this.fin.update('http://localhost:8088/dimensionnement/' + this.dim.getId, value).subscribe
    (data => {alert('mise ajour terminer'),  this.isSuccessful = true; });
  }
  onDelete(id): void {

    if (confirm('Voulez-vous vraiment supprimer cette offre?')) {
          this.fin.delete(id).subscribe(data => {
        console.log(id);
        this.router.navigateByUrl('/dims');
        console.log('ok');
       
      });
    }
  }
  ngOnInit(): void {
    this.getdata();
    this.save();
  }

  
}
