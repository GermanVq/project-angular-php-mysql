import { Injectable } from '@angular/core';
import { Doctor } from './../model/doctor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment"

const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  Url = environment.Url

  constructor(private http: HttpClient) { }

  getdoctores() {
    return this.http.get(`${this.Url}/sv_doctor/getAll.php`);
  }
  getdoctor(id: string | number){
    return this.http.get(`${this.Url}/sv_doctor/get.php?id=${id}`,{headers, responseType: 'text' as 'json' });
  }
  deletedoctor(doctor: Doctor){
    return this.http.delete(`${this.Url}/sv_doctor/delete.php?id=${doctor.id}`,{headers, responseType: 'text' as 'json' });
  }
  updatedoctor(doctor: Doctor){
    return this.http.put(`${this.Url}/sv_doctor/update.php`, doctor);
  }
  adddoctor(doctor: Doctor): Observable<DoctorService> {
    return this.http.post<DoctorService>(`${this.Url}/sv_doctor/post.php`, JSON.stringify(doctor),
    {responseType: 'text' as 'json' });
  }
  editardoctor(doctor:Doctor):Observable<DoctorService>{
    return this.http.put<DoctorService>(`${this.Url}/sv_doctor/post.php`,JSON.stringify(doctor));
  }
  
}
