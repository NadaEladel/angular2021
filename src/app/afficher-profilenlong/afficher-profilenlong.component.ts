import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profilenlong } from 'src/app/models/Profilenlong';
import {ProfilenlongService } from 'src/app/services/profilenlong.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  isSuccessful = false;
  showFiller = false;
  profile:any;
  displayCalcule:boolean =false;
  profilenlong:Profilenlong;
  for: FormGroup;
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  idDim: any;
  ajoutob:object= {};
  ajoutinf :FormGroup;
  msj: string;
  public  show:boolean;
  public  show1:boolean;
  displaymodif:boolean;
  proflong:Profilenlong;
  proflong2:Profilenlong;
  constructor(private http:HttpClient,private route: ActivatedRoute ,private fin: ProfilenlongService,private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService, private form: FormBuilder) {
    this.for = this.form.group({
      canals: [''],
      namont: [''],
      naval:[''],
      hauteurchute:[''],
      nombredechute:[''],
      chute:[''],
      longueur:[''],
      cotetnamont:[''],
      cotetnaval:[''],
      coeficient: [''],
      acceleration: ['']
     




    })
    this.ajoutinf=this.form.group({
      //canals:['',[Validators.required]],
     // namont:['',[Validators.required]],
     // naval:['',[Validators.required]],
      hauteurchute:['',[Validators.required ]],
      nombredechute:['',[Validators.required]],
      chute:['',[Validators.required]],
      longueur:['',[Validators.required]],
      cotetnamont:['',[Validators.required]],
      cotetnaval:['',[Validators.required]],
      coeficient: ['', [Validators.required]],
      acceleration: ['', [Validators.required]]

      
    })


   }



   add(profilenlong)
  {
    this.ajoutob=
    {
  // "canals":profilenlong.canals,
     // "namont":profilenlong.namont,
    //  "naval":profilenlong.naval,
      "hauteurchute":profilenlong.hauteurchute,
      "nombredechute":profilenlong.nombredechute,
      "chute":profilenlong.chute,
      "longueur":profilenlong.longueur,
      "cotetnamont":profilenlong.cotetnamont,
      "cotetnaval":profilenlong.cotetnaval,
      "coeficient": profilenlong.coeficient,
      "acceleration": profilenlong.acceleration

      

    }
    this.idDim = this.route.snapshot.paramMap.get('id');
    //add/{idDim}
    this.http.post('http://localhost:8088/api/profile/add/'+this.idDim,this.ajoutob).subscribe((res:Response)=>{
      this.msj="ajouter avec succ";
     console.log(this.ajoutinf.value);
     this.getdata();

    
    });
    

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

//done
  getdata() {
    //id dim recuuperer du path
    this.idDim = this.route.snapshot.paramMap.get('id');

    this.fin.getProfilenlongList(this.idDim).subscribe( data => {
      this.tabs = data;

      if(this.tabs.length > 0){
        console.log ("ttttt")
        this.show= true;
        this.show1=false;
        console.log(this.show) 
  
       console.log(this.show1) 
      }else{
        console.log ("bbbbb")
        this.show= false;
        this.show1=true;
      }
      console.log("rrr")
      console.log(this.tabs.length)

      
    });
    
  
  }
  

  save() {
    console.log(this.tabs);
    
  }
  display1=false;
  onEdit(t) {
    console.log(t)
 this.proflong=t;
 this.displaymodif=true;
   
  }

  onupdateprod( value: any) {
   // profil=this.profil ;
   console.log(this.proflong.id)
   console.log(this.proflong)
   console.log(value)

    this.fin.update(this.proflong.id, this.proflong).subscribe
    (data => {alert('mise ajour terminer'), 
     this.isSuccessful = true; 
     this.displaymodif=false;
    }); 
  }

  //calculer
calculer(id){
  console.log(id)
  this.displayCalcule=true;

  this.fin.getProfilenlong(id).subscribe( data => {
    this.profilenlong = data;
    console.log(this.profilenlong)
  });
//getProfilenlong(id:number)

}
  onDelete(id): void {
 console.log(id)
    if (confirm('Voulez-vous vraiment supprimer cette profil en long?')) {
          this.fin.delete(id).subscribe(data => {
            this.getdata();

            
      });
    }
    


  }
  
  CPamount(id){
    console.log(id)

  //  CPamount

  this.fin.CPamount(id).subscribe( data => {
    this.profilenlong = data;
    console.log(this.profilenlong)
  });
  }
  paval(id){
    console.log(id)

    this.fin.paval(id).subscribe( data => {
      this.profilenlong = data;
      console.log(this.profilenlong)
    });
  }
  profondeur(id){
    console.log(id)

    this.fin.profondeur(id).subscribe( data => {
      this.profilenlong = data;
      console.log(this.profilenlong)
    });
  }
  lineaire(id){
    console.log(id)

    this.fin.lineaire(id).subscribe( data => {
      this.profilenlong = data;
      console.log(this.profilenlong)
    });
  }

  singuliaire(id){
    console.log(id)

    this.fin.singuliaire(id).subscribe( data => {
      this.profilenlong = data;
      console.log(this.profilenlong)
    });
  }

  hauteurch(id){
    console.log(id)
    this.fin.hauteurch(id).subscribe( data => {
      this.profilenlong = data;
      console.log(this.profilenlong)
    });
  }


  eauamont(id){
    console.log(id)
    this.fin.eauamont(id).subscribe(data => {
      this.profilenlong = data;
      console.log(this.profilenlong)
    });
    
  }
  eauaval(id){
    console.log(id)
    this.fin.eauaval(id).subscribe(data => {
      this.profilenlong = data;
      console.log(this.profilenlong)
    });
  }
  ngOnInit(): void {
   this.getdata();


    this.save();

   
  }

  
}
