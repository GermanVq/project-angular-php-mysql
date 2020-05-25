import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { TriageService } from "../../../../service/triage.service"
import { Triage } from '../../../../model/triage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-agregar-triage',
  templateUrl: './agregar-triage.component.html',
  styleUrls: ['./agregar-triage.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AgregarTriageComponent implements OnInit {

  addForm:FormGroup;



  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private triageService: TriageService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
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
  }

  onSubmit(){
    let form = this.addForm.value;
    console.log(form);
    this.triageService.addtriage(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['/triage']);
    });
  }
  
}
