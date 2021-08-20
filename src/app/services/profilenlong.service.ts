import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Profilenlong } from 'src/app/models/Profilenlong';
import { Observable } from 'rxjs';
import { Statistique } from '../models/statistique';
@Injectable({
  providedIn: 'root'
})
export class ProfilenlongService {

  private baseUrl :string = "http://localhost:8088/";
//http://localhost:8088/api/profile/all/1
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
  
    getProfilenlongList(id:number): Observable<any> {
      return this.http.get<Profilenlong[]>(this.baseUrl + 'api/profile/all/'+ id);     
  }

  getAllProfilenlong(): Observable<any> {
    return this.http.get<Profilenlong[]>(this.baseUrl + 'api/profile/all/');     
}
//getById /byId/{idDim}

getProfilenlong(id:number): Observable<any> {
  return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/profileById/'+ id);     
}


  public update(id, data): Observable<any> {
    return this.http.put<any>(this.baseUrl+ 'api/profile/update/'+ id, data);
  }
 
  public getre(url): Observable<any> {
    return this.http.get<any>(url);
  }


//done
  delete(id: number): Observable<any> {
  
    return this.http.delete<Profilenlong>(this.baseUrl + 'api/profile/delete/' + id);
    
    
}

//calcule CPamount /CPamount/{id}
CPamount(id:number) :Observable<any> {
  return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/CPamount/'+ id);     
}
///paval/{id}
paval(id:number):Observable<any> {
  return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/paval/'+ id);     
}

//to do /profondeur/{id}
profondeur(id:number):Observable<any> {
  return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/profondeur/'+ id);     
}

lineaire(id:number):Observable<any> {
  return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/lineaire/'+ id);     
}

singuliaire(id:number):Observable<any> {
  return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/singuliaire/'+ id);     
}

hauteurch(id:number):Observable<any> {
  return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/hauteurch/'+ id);     
}

  eauamont(id: number): Observable<any> {
    return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/eauamont/' + id);
  }

  eauaval(id: number): Observable<any> {
    return this.http.get<Profilenlong>(this.baseUrl + 'api/profile/eauaval/' + id);
  }

  statutstat() {
    return this.http.get<Statistique>(this.baseUrl + 'api/profile/statis');
  }
///Primaire
  statutstatCoteAmontPrimaire():Observable<any> {
    return this.http.get(this.baseUrl + 'api/profile/statistiquecoteamont');
  }

  statutstatCoteProjetPrimaire():Observable<any> {
    return this.http.get(this.baseUrl + 'api/profile/statistiquecotepamont');
  }
  //Secondaire
///statistiquecoteSecondaire
  statutstatCoteAmontSecondaire():Observable<any>  {
    return this.http.get(this.baseUrl + 'api/profile/statistiquecoteSecondaire');
  }

  statutstatCoteProjetSecondaire():Observable<any> {
    return this.http.get(this.baseUrl + 'api/profile/statistiquecoteprojetSecondaire');
  }

  //Tertiaire
  statutstatCoteAmontTertiaire() :Observable<any>{
    return this.http.get(this.baseUrl + 'api/profile/statistiquecoteTertiaire');
  }

  statutstatCoteProjetTertiaire():Observable<any> {
    return this.http.get(this.baseUrl + 'api/profile/statistiquecoteprojetTertiare');
  }
}

