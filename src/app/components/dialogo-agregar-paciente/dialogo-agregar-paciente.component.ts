import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogo-agregar-paciente',
  templateUrl: './dialogo-agregar-paciente.component.html',
  styleUrls: ['./dialogo-agregar-paciente.component.css']
})
export class DialogoAgregarPacienteComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<DialogoAgregarPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

  ngOnInit(): void {
  }

}
