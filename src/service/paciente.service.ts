import { Injectable } from '@angular/core';
import { Paciente } from './../model/paciente';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../environments/environment"

const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

@Injectable({
  providedIn: 'root'
  
})


export class PacienteService {
  Url = environment.Url

  constructor(private http: HttpClient) { }

  getPacientes() {
    return this.http.get(`${this.Url}/sv_paciente/getAll.php`);
  }
  getPaciente(id: string | number){
    return this.http.get(`${this.Url}/sv_paciente/get.php?id=${id}`);
  }
  addPaciente(paciente: Paciente){
    return this.http.post(`${this.Url}/sv_paciente/post.php`, paciente, {headers, responseType: 'text' as 'json' });
  }
  deletePaciente(paciente: Paciente){
    return this.http.delete(`${this.Url}/sv_paciente/delete.php?id=${paciente.id}`,{headers, responseType: 'text' as 'json' });
  }
  updatePaciente(paciente: Paciente){
    return this.http.put(`${this.Url}/sv_paciente/update.php`, paciente);
  }
  crearPaciente(paciente: Paciente): Observable<PacienteService>  {    
    return this.http.post<PacienteService>('http://localhost/server/sv_paciente/post.php', JSON.stringify(paciente));
  }
  add2Paciente(paciente: Paciente): Observable<PacienteService> {
    return this.http.post<PacienteService>(`${this.Url}/sv_paciente/post.php`, JSON.stringify(paciente),
    {responseType: 'text' as 'json' });
  }
  
}
