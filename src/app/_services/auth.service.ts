import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const AUTH_API = 'http://localhost:8088/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  //updateUserPassword
  ///update/{id}
  update(id, data): Observable<any> {
    return this.http.put(AUTH_API + 'update/' + id, data);
  }
  ///updateUser/{id}
  updateUser(id, data): Observable<any> {
    return this.http.put(AUTH_API + 'updateUser/' + id, data);
  }

  ///user/{email}
  getUserEmail(id:number): Observable<any> {
    return this.http.get<any>(AUTH_API + 'user/' + id);
  }
}
