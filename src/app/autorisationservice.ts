import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autorisation } from './Autorisation';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {

  private baseUrl :string = "http://localhost:8083/examen/servlet/";

  constructor(private http: HttpClient) { }
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

 
  createAutorisation(autorisation: Autorisation): Observable<Autorisation> {
    const headers={'content-type':'application/json'};
    const body = JSON.stringify(Autorisation);
    console.log(body);
    return this.http.post<Autorisation>(this.baseUrl,body,{'headers':headers});
  }

  getAutoristion(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl+ '/getOneAutorisation/'}/${id}`);
  }


  getAutorisationList(): Observable<any> {
    return this.http.get<Autorisation[]>(this.baseUrl + '/getAll');     
}

updateAutorisation(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl + '/updateauto'}/${id}`, value);
}

 





}
