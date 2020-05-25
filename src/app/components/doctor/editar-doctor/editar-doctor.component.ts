import { Component, OnInit } from '@angular/core';
import { DoctorService} from "../../../../service/doctor.service"
import { Doctor } from '../../../../model/doctor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editar-doctor',
  templateUrl: './editar-doctor.component.html',
  styleUrls: ['./editar-doctor.component.css']
})
export class EditarDoctorComponent implements OnInit {

  editForm : FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router, private doctorService: DoctorService,
    private snackBar: MatSnackBar, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let id = window.localStorage.getItem("editardoctor");
    this.editForm = this.formBuilder.group({
      id: [],
      idHospital: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoSangre: ['', Validators.required],
      experiencia: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });

    if(!id) {
      alert("Ocurrio un error.")
      this.router.navigate(['']);
      return;
    }else{
      this.cargarDetalleDoctor(id)
    }
  }

  cargarDetalleDoctor(id:string){
    this.doctorService.getdoctor(id)
    .subscribe( data => {
      
      this.editForm.setValue(data);
    });
  }
  onSubmit(){
    this.doctorService.editardoctor(this.editForm.value)   
    .subscribe(
      data => {
        if(data["resultado"] == "OK"){
        
          this.router.navigate(['/paciente']);
        }
        
      })
  }

}
