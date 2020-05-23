import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/service/doctor.service';
import { Doctor } from '../../../model/doctor';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'idHospital', 'nombre', 'direccion', 'telefono', 'tipoSangre', 'experiencia', 'fechaNacimiento', 'editar', 'eliminar'];
  doctor: Doctor[];

  constructor(private doctorService: DoctorService, private dialogo: MatDialog, private snackBar: MatSnackBar, private router: Router) { }


  eliminarDoctor(doctor:Doctor) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${doctor.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.doctorService
          .deletedoctor(doctor)
          .subscribe(() => {
            this.obtenerdoctor();
            this.snackBar.open(`El doctors ${doctor.nombre} a sido eliminado`,undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerdoctor();
  }
  
  obtenerdoctor() {
    return this.doctorService
      .getdoctores()
      .subscribe((doctor: Doctor[]) => this.doctor = doctor);
  }
  
  eliminar(doctor:Doctor):void {
    this.doctorService.deletedoctor(doctor)
    .subscribe(datas => {      
      this.ngOnInit();
    });
  }

  openAgregar() {
    this.router.navigate(['/doctor/agregar']);;
  }

  editar(doctor:Doctor) {
    window.localStorage.setItem("editardoctor", doctor.id.toString());
    this.router.navigate(['doctor/editar']);
  }

}
