import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Plan } from '../models/Plan';
import { PlanService } from '../services/plan.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { User } from '../models/User';
export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  id: number;
  currentUser: any;
  roles: string[];
  isLoggedIn = false;
  username: string;
  calcules:any
  // filteredStates: Observable<any>;
  //states: any;
  filteredStates: Observable<State[]>;

  ngOnInit() {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.username = user.username;
      this.id = user.id;
    }
    this.currentUser = this.token.getUser();
  }
  stateCtrl = new FormControl();
  //filteredStates: Observable<State[]>;

  name: string;
  user: any;

  onEdit() {
    this.us.findPlanByUsername(this.name).subscribe(data => {
    // this.user = JSON.parse(data);
    this.user =data;
    
      console.log(data);
    },
      error1 => { console.log(error1); });
  }



















  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor(private token: TokenStorageService, private us: PlanService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  showFiller = false;

}

