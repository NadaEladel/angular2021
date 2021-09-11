import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulterdimensionnementComponent } from './consulterdimensionnement/consulterdimensionnement.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AfficherComponent } from './afficher/afficher.component';
import { AjoutnoteComponent } from 'src/app/ajoutnote/ajoutnote.component';
import {AfficherDimensionnementComponent} from 'src/app/afficher-dimensionnement/afficher-dimensionnement.component';
import {AjouterDimensionnementComponent} from 'src/app/ajouter-dimensionnement/ajouter-dimensionnement.component';
import { AfficherProfilenlongComponent } from './afficher-profilenlong/afficher-profilenlong.component';
import { AjouterProfilenlongComponent } from './ajouter-profilenlong/ajouter-profilenlong.component';
import { AfficheruserdimComponent } from './afficheruserdim/afficheruserdim.component';
import { NoteadminComponent } from './noteadmin/noteadmin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UploadComponent } from './upload/upload.component';
import { AfficheUploadComponent } from './affiche-upload/affiche-upload.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { GestionPlanComponent } from './gestion-plan/gestion-plan.component';
import { PlanComponent } from './plan/plan.component';
import { Profilenlong } from './models/Profilenlong';
import { ProfilenlongComponent } from './profilenlong/profilenlong.component';
import { ConsulterprofilenlongComponent } from './consulterprofilenlong/consulterprofilenlong.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ConsulterdimmoderateurComponent } from './consulterdimmoderateur/consulterdimmoderateur.component';
import { ConsulterprofilmodComponent } from './consulterprofilmod/consulterprofilmod.component';
import { StattestComponent } from './stattest/stattest.component';

//import { UiElementsComponent } from './ui-elements/ui-elements.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent,
 children: [
   {
     path: 'ajoutnote',
     component: AjoutnoteComponent
   },
   {
     path: 'alldims',
     component: ConsulterdimensionnementComponent
   },

   {
     path: 'allp',
     component: ConsulterprofilenlongComponent
   }



 ]
},
  { path: 'mod', component: BoardModeratorComponent,
    children: [
      { path: 'alldimmod', 
      component: ConsulterdimmoderateurComponent
     },

      { path: 'allpmod', 
      component: ConsulterprofilmodComponent
     },

    
    
    ]
},
  {
    path: 'admin', component: BoardAdminComponent,
    children: [
      {
        path: 'plan1',
        component: PlanComponent,
      },
      {
        path: 'noteadmin',
        component: NoteadminComponent
      },
      {
        path: 'state',
        component: StattestComponent
      },
      {
        path: 'stat',
        component: StatistiqueComponent
      },
      {
        path: 'recherche',
        component: RechercheComponent
      },
        
      { path: 'dims/:id', 
        component: AfficherDimensionnementComponent 
      },

      { path: 'profils/:id', 
      component: AfficherProfilenlongComponent 
    }

    ]
  },
  {
    path: 'ajoutnote',
    component: AjoutnoteComponent
  },
  {
    path: 'alldims',
    component: ConsulterdimensionnementComponent
  },

  {
    path: 'allp',
    component: ConsulterprofilenlongComponent
  },

  { path: 'autorisations', component: AfficherComponent },
  { path: 'addauto', component: AjouterComponent },
  {
    path: 'dims/:id',
    component: AfficherDimensionnementComponent
  },

  {
    path: 'profils/:id',
    component: AfficherProfilenlongComponent
  },

  { path: 'adddim', component: AjouterDimensionnementComponent },
  { path: 'addprofil', component: AjouterProfilenlongComponent },
  { path: 'dimuser', component: AfficheruserdimComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'afficheup', component: AfficheUploadComponent },
  { path: 'noteadmin', component: NoteadminComponent },
  { path: 'gestion-utilisateur', component: UtilisateursComponent },
  { path: 'plan', component: GestionPlanComponent },
  {path:'plan1',component:PlanComponent},
  {path:'prl',component:ProfilenlongComponent},
  { path: 'alldimmod', component: ConsulterdimmoderateurComponent },
  { path: 'allpmod', component: ConsulterprofilmodComponent },

  {
    path: 'ajoutnote',
    component: AjoutnoteComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
