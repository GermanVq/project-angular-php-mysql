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
  
  constructor(private http: HttpClient) { 
    
  }
 
}
