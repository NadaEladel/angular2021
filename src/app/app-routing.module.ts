import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AfficherComponent } from './afficher/afficher.component';
import {AfficherDimensionnementComponent} from 'src/app/afficher-dimensionnement/afficher-dimensionnement.component';
import {AjouterDimensionnementComponent} from 'src/app/ajouter-dimensionnement/ajouter-dimensionnement.component';
import { AfficherProfilenlongComponent } from './afficher-profilenlong/afficher-profilenlong.component';
import { AjouterProfilenlongComponent } from './ajouter-profilenlong/ajouter-profilenlong.component';
import { AfficheruserdimComponent } from './afficheruserdim/afficheruserdim.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'autorisations', component: AfficherComponent },
  { path: 'addauto', component: AjouterComponent },
  { path: 'dims', component: AfficherDimensionnementComponent },
  { path: 'adddim', component: AjouterDimensionnementComponent },
  { path: 'profils', component: AfficherProfilenlongComponent },
  { path: 'addprofil', component: AjouterProfilenlongComponent },
  { path: 'dimuser', component: AfficheruserdimComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
