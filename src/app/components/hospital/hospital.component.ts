import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/service/hospital.service';
import { Hospital } from '../../../model/hospital';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospital: Hospital[];

  constructor(private hospitalService: HospitalService, private dialogo: MatDialog, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.obtenerhospital();
  }

  obtenerhospital() {
    return this.hospitalService
      .gethospitales()
      .subscribe((hospital: Hospital[]) => this.hospital = hospital);
    
  }
  
  listarHospital(){
    this.hospitalService.gethospitales().subscribe((data:Hospital[]) => {
      this.hospital = data;
      console.log(this.hospital);
  });
  }
  
  

}
