import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { PacienteService} from "../../../../service/paciente.service"
import { Paciente } from '../../../../model/paciente';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  editForm : FormGroup;


  constructor(private route: ActivatedRoute,
    private router: Router, private pacienteService: PacienteService,
    private snackBar: MatSnackBar, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    
    let id = window.localStorage.getItem("editarPaciente");
    this.editForm = this.formBuilder.group({
      id: [''],
      nombre: ['',Validators.required],
      eps: ['', Validators.required],
      direccion: ['', Validators.required],
      nombreAcompanante: ['', Validators.required],
      telefonoAcompanante: ['', Validators.required],
      antecedentes: ['', Validators.required],
    });
    
    if(!id) {
      alert("Ocurrio un error.")
      this.router.navigate(['']);
      return;
    }else{
      this.cargarDetallePaciente(id)
    }
  }
  
  cargarDetallePaciente(id:string){
    this.pacienteService.getPaciente(id)
    .subscribe( data => {
      
      this.editForm.patchValue(data);
    });
  }

  onSubmit(){
    this.pacienteService.editarPaciente(this.editForm.value)   
    .subscribe(
      data => {
        if(data["resultado"] == "OK"){
        
          this.router.navigate(['/paciente']);
        }
        
      })
  }
  

}
