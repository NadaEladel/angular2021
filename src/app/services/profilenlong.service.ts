import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Profilenlong } from 'src/app/models/Profilenlong';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfilenlongService {

  private baseUrl :string = "http://localhost:8088/";

  constructor(private http: HttpClient) { }
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

    createProfilenlong(profilenlong: Profilenlong): Observable<Profilenlong> {
      const headers={'content-type':'application/json'};
      const body = JSON.stringify(Profilenlong);
      console.log(body);
      return this.http.post<Profilenlong>(this.baseUrl,body,{'headers':headers});
    }
  
    getProfilenlongList(): Observable<any> {
      return this.http.get<Profilenlong[]>(this.baseUrl + 'getAllProfil');     
  }

  public update(url, data): Observable<any> {
    return this.http.put<any>(url, data);
  }
 
  public getre(url): Observable<any> {
    return this.http.get<any>(url);
  }

  delete(id: number): Observable<any> {
    console.log('aa');
    return this.http.delete<Profilenlong>(this.baseUrl + 'supprimer/' + id);
    console.log('zz');
    
}
}

