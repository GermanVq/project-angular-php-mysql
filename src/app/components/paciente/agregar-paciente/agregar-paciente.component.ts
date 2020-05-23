import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { PacienteService} from "../../../../service/paciente.service"
import { Paciente } from '../../../../model/paciente';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})
export class AgregarPacienteComponent implements OnInit {

  addForm:FormGroup;

  

  constructor(private formBuilder: FormBuilder, private pacienteService: PacienteService,
    private snackBar: MatSnackBar,
    private router: Router,) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      eps: ['', Validators.required],
      direccion: ['', Validators.required],
      nombreAcompanante: ['', Validators.required],
      telefonoAcompanante: ['', Validators.required],
      antecedentes: ['', Validators.required],
    });
  }

  onSubmit(){
    
    let form = this.addForm.value;
    console.log(form);
    this.pacienteService.add2Paciente(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['/paciente']);
    });
  }
}
