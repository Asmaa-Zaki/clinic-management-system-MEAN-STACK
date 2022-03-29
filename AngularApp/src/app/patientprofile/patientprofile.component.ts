import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../Module/patient';
import { PatientService } from '../Features/patient.service'


@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {
  nPatient?= new Patient(0, "", 0, 0, "","","",0);
  constructor( public ar: ActivatedRoute, public PatientService: PatientService ) { 
  }
  
  
  ngOnInit(): void {
    this.ar.params.subscribe((r)=>{
      this.nPatient = this.PatientService.PatList.find((pat)=>{
        return pat._id== r['id']
      })
      if(this.nPatient != undefined)
      {
        this.PatientService.nPatient = this.nPatient
      }
      console.log(this.PatientService.nPatient)
    })
  }

}


