import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from 'src/app/models/Plan';

@Injectable({
  providedIn: 'root'
})


export class PlanService {
  public host = 'http://localhost:8088/api/plan/';
  constructor(private httpClient: HttpClient) { }

  rec(adresse: string, reseaux: string, proprietaire:string, id: number,file: File): Observable<HttpEvent<{}>> {
    
    const formdata: FormData = new FormData();
    console.log(file);
    formdata.append('adresse', adresse);
    formdata.append('reseaux', reseaux);
    formdata.append('proprietaire', proprietaire);
    formdata.append('file', file);
   

    const req = new HttpRequest('POST', this.host + 'addPlan/' + id, formdata, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }
  //get all plan
  getPlanList(): Observable<any> {
    return this.httpClient.get<Plan[]>(this.host + 'plans');     
}

allnotes(): Observable<any> {
  return this.httpClient.get(this.host + 'plans')
}

//delete

delete(id: number): Observable<any> {
  

  return this.httpClient.delete<Plan>(this.host  + 'delete/' + id);
  
  
}



update(id, data): Observable<any> {
  return this.httpClient.put(this.host  + 'update/' + id, data);
}

  findPlanByUsername(username): Observable<any> {

    return this.httpClient.get(this.host + 'getP/' + username, { responseType: 'text' });
  }

}
