import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/Features/patient.service';
import { Patient } from 'src/app/Module/patient';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {
  @Input() patient:Patient= new Patient(0,"",0,0,"","","",0)
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
  }

  EditPat()
  {
    console.log(this.patient)
    this.patientService.nPatient=this.patient
  }

  SavePat(pat:Patient)
  {
    this.patientService.EditPat(pat).subscribe((res)=>{
      alert("updated")
    }, (error)=> {
      if(error instanceof HttpErrorResponse)
      {
        if(error.status === 403)
        {
          alert("U don't have permission")
          this.router.navigate(['forbidden'])
        }
        else if(error.status === 400)
        {alert("not exist")}
      }
    })
  }

}
