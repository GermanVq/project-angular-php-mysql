import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { HospitalComponent } from './components/hospital/hospital.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { TriageComponent } from './components/triage/triage.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { HomeComponent } from './components/home/home.component';

const rutas: Routes = [
  {
    path: 'hospital',
    component: HospitalComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent
  },
  {
    path: 'paciente',
    component: PacienteComponent
  },
  {
    path: 'triage',
    component: TriageComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DoctorComponent,
    TriageComponent,
    PacienteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
