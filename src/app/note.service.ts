import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public host = 'http://localhost:8088/';
  constructor(private httpClient: HttpClient) {}
 
  motif(id_note: number, txt: string): Observable < HttpEvent < {} >> {

    console.log(id_note);
      const formdata: FormData = new FormData();
      formdata.append('txt', txt);

      const req = new HttpRequest('PUT', this.host + 'rec/' + id_note + '/' + txt, {
        reportProgress: true,
        responseType: 'text'
      });

      return this.httpClient.request(req);
    }

  
  rec(obj: string, desc: string, file: File, id: number): Observable<HttpEvent<{}>> {
    
    const formdata: FormData = new FormData();
    console.log(file);
    formdata.append('obj', obj);
    formdata.append('desc', desc);
    formdata.append('file', file);

    const req = new HttpRequest('POST', this.host + 'note/' + id, formdata, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }

  notetraiter(id_note, txt): Observable<HttpEvent<{}>> {
    console.log(id_note);
    const formdata: FormData = new FormData();
    formdata.append('txt', txt);

    const req = new HttpRequest('PUT', this.host + 'rec/' + id_note, formdata, {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }

  allnotes(): Observable<any> {
    return this.httpClient.get(this.host + 'listnote/')
  }
  FindNoteID(id: number): Observable<Note> {

    return this.httpClient.get<Note>(this.host + 'getnote/' + id);
  }
  //update
  public update(id): Observable<any> {
    return this.httpClient.get<any>(this.host+ 'updateNote/'+ id);
  }

}
