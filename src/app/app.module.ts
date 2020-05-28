import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';



import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { HospitalComponent } from './components/hospital/hospital.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { TriageComponent } from './components/triage/triage.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module'
import {MatDatepickerModule} from '@angular/material/datepicker';

import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';
import { DialogoAgregarPacienteComponent } from './components/dialogo-agregar-paciente/dialogo-agregar-paciente.component';
import { AgregarPacienteComponent } from './components/paciente/agregar-paciente/agregar-paciente.component';
import { EditarPacienteComponent } from './components/paciente/editar-paciente/editar-paciente.component';
import { AgregarDoctorComponent } from './components/doctor/agregar-doctor/agregar-doctor.component';
import { EditarDoctorComponent } from './components/doctor/editar-doctor/editar-doctor.component';
import { EditarTriageComponent } from './components/triage/editar-triage/editar-triage.component';
import { AgregarTriageComponent } from './components/triage/agregar-triage/agregar-triage.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditarHospitalComponent } from './components/hospital/editar-hospital/editar-hospital.component';

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
  {
    path: 'paciente/agregar',
    component: AgregarPacienteComponent
  },
  {
    path: 'paciente/editar',
    component: EditarPacienteComponent
  },
  {
    path: 'doctor/editar',
    component: EditarDoctorComponent
  },
  {
    path: 'doctor/agregar',
    component: AgregarDoctorComponent
  },
  {
    path: 'triage/editar',
    component: EditarTriageComponent
  },
  {
    path: 'triage/agregar',
    component: AgregarTriageComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DoctorComponent,
    TriageComponent,
    PacienteComponent,
    HomeComponent,
    DialogoConfirmacionComponent,
    DialogoAgregarPacienteComponent,
    AgregarPacienteComponent,
    EditarPacienteComponent,
    AgregarDoctorComponent,
    EditarDoctorComponent,
    EditarTriageComponent,
    AgregarTriageComponent,
    MenuComponent,
    EditarHospitalComponent,
    
    
  ],
  entryComponents: [
    DialogoConfirmacionComponent,
    DialogoAgregarPacienteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
