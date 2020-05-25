import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { DoctorService} from "../../../../service/doctor.service"
import { Doctor} from '../../../../model/doctor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-agregar-doctor',
  templateUrl: './agregar-doctor.component.html',
  styleUrls: ['./agregar-doctor.component.css']
})
export class AgregarDoctorComponent implements OnInit {
  addForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private doctorService: DoctorService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      idHospital: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoSangre: ['', Validators.required],
      experiencia: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  onSubmit(){
    let form = this.addForm.value;
    console.log(form);
    this.doctorService.adddoctor(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['/doctor']);
    });
  }
  
}
