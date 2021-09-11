import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AfficherDimensionnementComponent} from 'src/app/afficher-dimensionnement/afficher-dimensionnement.component';

import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AfficherComponent } from './afficher/afficher.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
// material.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from "@angular/core";
//import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';




// PrimeNg Module
import {FieldsetModule} from 'primeng/fieldset';
import { RatingModule } from 'primeng/rating';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import { ScrollPanelModule } from 'primeng/scrollpanel';


import {AjouterDimensionnementComponent} from 'src/app/ajouter-dimensionnement/ajouter-dimensionnement.component';
import { AjouterProfilenlongComponent } from './ajouter-profilenlong/ajouter-profilenlong.component';
import { AfficherProfilenlongComponent } from './afficher-profilenlong/afficher-profilenlong.component';
import { AfficheruserdimComponent } from './afficheruserdim/afficheruserdim.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UploadComponent } from './upload/upload.component';
import { AfficheUploadComponent } from './affiche-upload/affiche-upload.component';
import { AjoutnoteComponent } from './ajoutnote/ajoutnote.component';
import { NoteadminComponent } from './noteadmin/noteadmin.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { GestionPlanComponent } from './gestion-plan/gestion-plan.component';
import { PlanComponent } from './plan/plan.component';
import { ProfilenlongComponent } from './profilenlong/profilenlong.component';
import { ConsulterdimensionnementComponent } from './consulterdimensionnement/consulterdimensionnement.component';
import { ConsulterprofilenlongComponent } from './consulterprofilenlong/consulterprofilenlong.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ConsulterdimmoderateurComponent } from './consulterdimmoderateur/consulterdimmoderateur.component';
import { ConsulterprofilmodComponent } from './consulterprofilmod/consulterprofilmod.component';
import { StattestComponent } from './stattest/stattest.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AjouterComponent,
    AfficherComponent,
    AfficherDimensionnementComponent,
    AjouterDimensionnementComponent,
    AjouterProfilenlongComponent,
    AfficherProfilenlongComponent,
    AfficheruserdimComponent,
    DashbordComponent,
    UploadComponent,
    AfficheUploadComponent,
    AjoutnoteComponent,
    NoteadminComponent,
    UtilisateursComponent,
    GestionPlanComponent,
    PlanComponent,
    ProfilenlongComponent,
    ConsulterdimensionnementComponent,
    ConsulterprofilenlongComponent,
    StatistiqueComponent,
    RechercheComponent,
    ConsulterdimmoderateurComponent,
    ConsulterprofilmodComponent,
    StattestComponent
    ],
  imports: [

    RatingModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  //  RxReactiveFormsModule,
    ConfirmDialogModule,
    ToolbarModule,
    FileUploadModule,
    HttpClientModule,
    TooltipModule,
    CardModule,
    ProgressBarModule,
    DialogModule,
    ContextMenuModule,
    SliderModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    TableModule,
    ToastModule,
    ButtonModule,
    PanelModule,
    TabViewModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    FieldsetModule,
    MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatInputModule, 
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule  ,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        ScrollPanelModule,
        MatIconModule   
    ],
    exports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        
  ],
  providers: [authInterceptorProviders],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
