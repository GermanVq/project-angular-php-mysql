import { Component, OnInit } from '@angular/core';
import { TriageService} from "../../../../service/triage.service"
import { Triage } from '../../../../model/triage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editar-triage',
  templateUrl: './editar-triage.component.html',
  styleUrls: ['./editar-triage.component.css']
})
export class EditarTriageComponent implements OnInit {

  editForm : FormGroup;


  constructor(private route: ActivatedRoute,
    private router: Router, private triageService: TriageService,
    private snackBar: MatSnackBar, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let idDoc = window.localStorage.getItem("editarTriage");
    this.editForm = this.formBuilder.group({
      id: [],
      idDoctor: ['', Validators.required],
      idPaciente: ['', Validators.required],
      motivo: ['', Validators.required],
      diagnostico: ['', Validators.required],
      requiereMedicina: ['', Validators.required],
      covid: ['', Validators.required],
      tos: ['', Validators.required],
      dificultadRespirar: ['', Validators.required],
      fiebre: ['', Validators.required],
      escalofrio: ['', Validators.required],
      temblorEscalofrio: ['', Validators.required],
      dolorMuscular: ['', Validators.required],
    });
    
    if(!idDoc) {
      alert("Ocurrio un error.")
      this.router.navigate(['']);
      return;
    }else{
      this.cargarDetalleTriage(idDoc)
    }
  }
  cargarDetalleTriage(id:string){
    this.triageService.gettriage(id)
    .subscribe( data => {
      this.editForm.patchValue(data);
    });

  }
    onSubmit(){
    this.triageService.updatetriage(this.editForm.value).subscribe(
      data => { 
        if(data["resultado"] == "OK"){
          this.router.navigate(['/triage']);
        } 
      })
    }

}
