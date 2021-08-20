import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dimcalcul } from '../models/Dimcalcul';

@Injectable({
  providedIn: 'root'
})
export class DimcalculService {



  private baseUrl :string = "http://localhost:8088/api/dimc/";

  constructor(private http: HttpClient) { }
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

    getDimCalculList(id:number): Observable<any> {
      return this.http.get<Dimcalcul[]>(this.baseUrl + 'allByPlan/'+ id);     
  }


  delete(id: number): Observable<any> {
    
    return this.http.delete<Dimcalcul>(this.baseUrl + 'delete/' + id);
   
    
}
//getbyid
//http://localhost:8088/api/dimc/getOneDim/1
getDimById(id:number): Observable<any> {
  return this.http.get<Dimcalcul>(this.baseUrl + 'getOneDim/'+ id);     
}

//debit
calculeDebit(id:number): Observable<any> {

  return this.http.get<Dimcalcul>(this.baseUrl + 'debit/'+ id);     
}
//yn /hauteur/{id}

calculeYn(id:number): Observable<any> {

  return this.http.get<Dimcalcul>(this.baseUrl + 'hauteur/'+ id);     
}
//section /smouille/{id}")
calculeSection(id:number): Observable<any> {

  return this.http.get<Dimcalcul>(this.baseUrl + 'smouille/'+ id);     
}

//vitesse

calculeVitesse(id:number): Observable<any> {

  return this.http.get<Dimcalcul>(this.baseUrl + 'vitesse/'+ id);     
}

//update 

  update(id, data): Observable<any> {
    return this.http.put(this.baseUrl + 'updatedim/' + id, data);
  }

  //all dim

  alldim(): Observable<any> {
    return this.http.get(this.baseUrl + 'plans/')
  }

  ///Tertiaire
  statisticYn(): Observable<any> {
    return this.http.get(this.baseUrl + 'statistiqueyn')
  }

//primaire
  primaireYn(): Observable<any> {
    return this.http.get(this.baseUrl + 'primaireYn')
  }
//secondaire
  secondaireYn(): Observable<any> {
    return this.http.get(this.baseUrl + 'secondaireYn')
  }

  ////Primairenammont

  namontPrimaire(): Observable<any> {
    return this.http.get(this.baseUrl + 'Primairenammont')
  } 

  namontSecondaire(): Observable<any> {
    return this.http.get(this.baseUrl + 'Secondairenammont')
  }
}
