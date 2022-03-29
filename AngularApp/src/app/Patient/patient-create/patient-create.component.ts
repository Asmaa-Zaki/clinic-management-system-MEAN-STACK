import { Component, OnInit } from '@angular/core';
import {Patient} from '../../Module/patient'
import { PatientService } from '../../Features/patient.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PatientUpdateComponent } from '../patient-update/patient-update.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  constructor(public PatientService: PatientService, public router: Router, public ar: ActivatedRoute) { }
  type:any
  path=""
  data:any
  nPatient?= new Patient(0, "", 0, 0, "","","",0)
  private updat: PatientUpdateComponent = new PatientUpdateComponent(this.PatientService, this.router)

  ngOnInit(): void {
    this.ar.params.subscribe((r)=>{
      this.nPatient = this.PatientService.PatList.find((pat)=>{
        return pat._id== r['id']
      })
      if(this.nPatient != undefined)
      {
        this.PatientService.nPatient = this.nPatient
      }
    })

    this.data= JSON.parse(localStorage.getItem("data")||'{}') 
    this.type= this.data.data.type
    if(this.type== "admin")
    {
      this.path= "admin/patientList"
    }
    else if(this.type== "Recpt")
    {
      this.path= "recept/patientList"
    }
    else
    {
      this.path= "doctor/patientList"
    }
  }

  save()
  {
    this.PatientService.AddToList().subscribe((res)=>{
      this.router.navigate([this.path])
    }, (error)=> {
      if(error instanceof HttpErrorResponse)
      {
        if(error.status === 403)
        {
          alert("U don't have permission")
          this.router.navigate(['forbidden'])
        }
        else if(error.status === 400)
        {alert("this Id already exist")}
      }
    })
  }

  update()
  {
    if(this.nPatient != undefined)
    {
      this.updat.SavePat(this.nPatient)
      this.router.navigate([this.path])
    }
    else
    {
      this.router.navigate([this.path])
    }
  }
}
