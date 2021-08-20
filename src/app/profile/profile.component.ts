import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showgeneral:boolean=true;
  showpassword:boolean=false;
  currentUser: any;
  public isCollapsed = false;
  isSuccessful=false;

  user=new User();
  user1:any;
  form1: FormGroup; 
  constructor(private token: TokenStorageService ,private auth: AuthService, fb: FormBuilder)  { 


    this.form1 = fb.group({
      'oldPwd': ['',Validators.required],
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required]
    }, {
     
    });
  }


  get oldPwd(){
    console.log(this.form1.get('oldPwd'))
    return this.form1.get('oldPwd');
  }

   get newPwd(){
     console.log(this.form1.get('newPwd'))
    return this.form1.get('newPwd');
  }

   get confirmPwd(){
    console.log(this.form1.get('confirmPwd'))
    return this.form1.get('confirmPwd');
  }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.id)
    //getUserEmail(email)
   this.auth.getUserEmail(this.currentUser.id).subscribe( data => {
    this.user1 = data;
    console.log(this.user1)
  });
  }
  //modifier password
  modifierPassword(){
    console.log(this.form1.get('newPwd'))
    console.log(this.form1.get('confirmPwd'))
    console.log(this.form1.get('newPwd'))
    console.log("test3")

  }

  //password
  modifierpassword(id){
    console.log(id)
    this.showgeneral=false;
    this.showpassword=true;

    console.log(this.showgeneral)
    console.log(this.showpassword)

  }

  modifierInfo(){

   // console.log(id)
    this.showgeneral=true;
    this.showpassword=false;

    console.log(this.showgeneral)
    console.log(this.showpassword)
  }
  onupdateprod(value:any){
    //modifier le service 
    console.log("test")
console.log(this.currentUser)

this.user.username=this.currentUser.username;
this.user.email=this.currentUser.email;

console.log("user")
console.log(this.user1)
this.auth.updateUser(this.currentUser.id, this.user1).subscribe
(data => {alert('mise ajour terminer'), 

 this.isSuccessful = true; 
 /* console.log("id")
 console.log(this.currentUser.id)
 this.auth.getUserEmail(this.currentUser.id).subscribe( data => {
  this.user1 = data;
  console.log(this.user1)
}); */
window.location.reload();
}); 

  }
  
  /* onupdateprod( value: any) {
    // profil=this.profil ;
    console.log(this.proflong.id)
    console.log(this.proflong)
    console.log(value)
    this.fin.update(this.proflong.id, this.proflong).subscribe
    (data => {alert('mise ajour terminer'), 
     this.isSuccessful = true; 
     this.displaymodif=false;
    }); 
    
   } */

   
}
