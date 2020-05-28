import { Injectable } from '@angular/core';
import { Hospital } from './../model/hospital';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment"


const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  Url = environment.Url
  
  constructor(private http: HttpClient) { }
  
  gethospitales() {
    return this.http.get(`${this.Url}/sv_hospital/getAll.php`);
  }
  gethospital(id: string | number){
    return this.http.get(`${this.Url}/sv_hospital/get.php?id=${id}`,{headers, responseType: 'text' as 'json' });
  }
  
  updatehospital(hospital: Hospital){
    return this.http.put(`${this.Url}/sv_hospital/update.php`, hospital,{headers, responseType: 'text' as 'json' });
  }
  addhospital(hospital: Hospital): Observable<HospitalService> {
    return this.http.post<HospitalService>(`${this.Url}/sv_hospital/post.php`, JSON.stringify(hospital),
    {responseType: 'text' as 'json' });
  }
  editarhospital(hospital:Hospital):Observable<HospitalService>{
    return this.http.put<HospitalService>(`${this.Url}/sv_hospital/update.php`,JSON.stringify(hospital),{headers, responseType: 'text' as 'json' });
  }
  

}
