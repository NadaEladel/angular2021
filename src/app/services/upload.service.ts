import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposition } from 'src/app/models/Proposition';

const API_URL = "http://localhost:8088/"
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient:HttpClient) { }
  uploaddetails(file: File, id: number): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    console.log(file);
    formdata.append('file', file);
    const req = new HttpRequest('POST', API_URL + 'upload/' + id, formdata, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }
  getOneProposition(id): Observable<any> {
    console.log(id);
    return this.httpClient.get(API_URL + 'getOneProp/' + id);
  }
  downloadFile(filename: string): Observable<Blob> {
    return this.httpClient.get(API_URL + `files/` + filename,
      { responseType: 'blob' });
  }

  getPropositionList(): Observable<any> {
   
    return this.httpClient.get(API_URL + 'getAllp')
    }
 

}
