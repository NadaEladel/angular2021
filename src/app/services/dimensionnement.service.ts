import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Dimensionnement } from 'src/app/models/Dimensionnement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DimensionnementService {
  private baseUrl :string = "http://localhost:8088/";

  constructor(private http: HttpClient) { }
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

    createDimensionnement(dimensionnement: Dimensionnement): Observable<Dimensionnement> {
      const headers={'content-type':'application/json'};
      const body = JSON.stringify(Dimensionnement);
      console.log(body);
      return this.http.post<Dimensionnement>(this.baseUrl,body,{'headers':headers});
    }
  
    getDimensionnementList(): Observable<any> {
      return this.http.get<Dimensionnement[]>(this.baseUrl + 'getAll');     
  }

  public update(url, data): Observable<any> {
    return this.http.put<any>(url, data);
  }
 
  public getre(url): Observable<any> {
    return this.http.get<any>(url);
  }

  delete(id: number): Observable<any> {
    console.log('aa');
    return this.http.delete<Dimensionnement>(this.baseUrl + 'supp/' + id);
    console.log('zz');
    
}
}
