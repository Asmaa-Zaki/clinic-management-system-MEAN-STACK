import { Component, OnInit } from '@angular/core';
import {Patient} from '../../Module/patient'
import { PatientService } from '../../Features/patient.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PatientUpdateComponent } from '../patient-update/patient-update.component';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  constructor(public PatientService: PatientService, public router: Router, public ar: ActivatedRoute) { }

  nPatient?= new Patient(0, "", 0, 0, "","",0)
  private updat: PatientUpdateComponent = new PatientUpdateComponent(this.PatientService)

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
  }

  save()
  {
    this.PatientService.AddToList().subscribe((res)=>{
      this.router.navigate(['admin/patientList'])
    },(error)=>{alert(`this Id ${this.PatientService.nPatient._id}already exist`)})
  } 

  update()
  {
    if(this.nPatient != undefined)
    {
      this.updat.SavePat(this.nPatient)
      this.router.navigate(['admin/patientList'])
    }
  }
}
