
import { Injectable } from '@angular/core';
import {  Triage } from './../model/triage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment"

const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class TriageService {
  Url = environment.Url

  constructor(private http: HttpClient) { }
  gettriages() {
    return this.http.get(`${this.Url}/sv_triage/getAll.php`);
  }
  gettriage(id: string | number){
    return this.http.get(`${this.Url}/sv_triage/get.php?id=${id}`,{headers, responseType: 'text' as 'json' });
  }
  deletetriage(triage: Triage){
    return this.http.delete(`${this.Url}/sv_triage/delete.php?id=${triage.id}`,{headers, responseType: 'text' as 'json' });
  }
  updatetriage(triage: Triage){
    return this.http.put(`${this.Url}/sv_triage/update.php`, triage);
  }
  addtriage(triage: Triage): Observable<TriageService> {
    return this.http.post<TriageService>(`${this.Url}/sv_triage/post.php`, JSON.stringify(triage),
    {responseType: 'text' as 'json' });
  }
  editartriage(triage:Triage):Observable<TriageService>{
    return this.http.put<TriageService>(`${this.Url}/sv_triage/post.php`,JSON.stringify(triage));
  }

}
