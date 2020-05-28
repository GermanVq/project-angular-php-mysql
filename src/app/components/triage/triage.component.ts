import { Component, OnInit } from '@angular/core';
import { TriageService } from 'src/service/triage.service';
import { Triage } from '../../../model/triage';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";
import { trigger } from '@angular/animations';
@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.css']
})
export class TriageComponent implements OnInit {
  displayedColumns: string[] = ['id','idDoctor', 'idPaciente', 'motivo', 'diagnostico', 'requiereMedicina', 'covid', 'tos', 'dificultadRespirar', 'fiebre', 'escalofrio', 'temblorEscalofrio', 'dolorMuscular', 'editar', 'eliminar'];
  triage: Triage[];

  constructor(private triageService: TriageService, private dialogo: MatDialog, private snackBar: MatSnackBar, private router: Router) { }
  eliminarTriage(triage:Triage) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar el triage del paciente de id ${triage.idPaciente}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.triageService
          .deletetriage(triage)
          .subscribe(() => {
            this.obtenerTriage();
            this.snackBar.open(`El pacientes de id ${triage.idPaciente} a sido eliminado`,undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerTriage();
  }
  
  obtenerTriage() {
    return this.triageService
      .gettriages()
      .subscribe((triage: Triage[]) => this.triage = triage);
  }
  
  eliminar(triage:Triage):void {
    this.triageService.deletetriage(triage)
    .subscribe(datas => {      
      this.ngOnInit();
    });
  }

  editar(triage) {
    window.localStorage.setItem("editarTriage", triage);
    this.router.navigate(['triage/editar']);
  }

}
