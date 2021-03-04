import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profilenlong } from 'src/app/models/Profilenlong';
import {ProfilenlongService } from 'src/app/services/profilenlong.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-afficher-profilenlong',
  templateUrl: './afficher-profilenlong.component.html',
  styleUrls: ['./afficher-profilenlong.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AfficherProfilenlongComponent implements OnInit {

profil:Profilenlong;
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Profilenlong[];
  display: boolean = false;

  for: FormGroup;
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  constructor(private fin: ProfilenlongService,private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService, private form: FormBuilder) {
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
    this.fin.getProfilenlongList().subscribe(data => this.tabs = data);
  }
  
  save() {
    console.log(this.tabs.values);
    
  }
  display1=false;
  onEdit(profil) {
    this.display1 = true;
    this.fin.getre('http://localhost:8088/getOneProfil/' + this.profil.getId).subscribe(data => 
    {this.profil= data; },
      error1 => {console.log(error1); });
  }
  isSuccessful=false;
  onupdateprod(value: any) {
    this.fin.update('http://localhost:8088/profilenlong/' + this.profil.getId, value).subscribe
    (data => {alert('mise ajour terminer'),  this.isSuccessful = true; });
  }
  onDelete(id): void {

    if (confirm('Voulez-vous vraiment supprimer cette profil en long?')) {
          this.fin.delete(id).subscribe(data => {
        console.log(id);
        this.router.navigateByUrl('/profils');
        console.log('ok');
       
      });
    }
  }
  ngOnInit(): void {
    this.getdata();
    this.save();
  }

  
}
