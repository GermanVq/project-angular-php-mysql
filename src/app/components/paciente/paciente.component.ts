import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/service/paciente.service';
import { Paciente } from '../../../model/paciente';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";




@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'eps', 'direccion', 'nombreAcompanante', 'telefonoAcompanante', 'antecedentes', 'editar', 'eliminar'];
  paciente: Paciente[];
  
  constructor(private pacientesService: PacienteService, private dialogo: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  eliminarPaciente(paciente:Paciente) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${paciente.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.pacientesService
          .deletePaciente(paciente)
          .subscribe(() => {
            this.obtenerPaciente();
            this.snackBar.open(`El pacientes ${paciente.nombre} a sido eliminado`,undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerPaciente();
  }
  
  obtenerPaciente() {
    return this.pacientesService
      .getPacientes()
      .subscribe((paciente: Paciente[]) => this.paciente = paciente);
  }
  
  eliminar(paciente:Paciente):void {
    this.pacientesService.deletePaciente(paciente)
    .subscribe(datas => {      
      this.ngOnInit();
    });
  }

  openAgregar() {
    this.router.navigate(['/agregar']);;
  }

  editar(paciente:Paciente) {
    window.localStorage.setItem("editarPaciente", paciente.id.toString());
    this.router.navigate(['paciente/editar']);
  }

}


