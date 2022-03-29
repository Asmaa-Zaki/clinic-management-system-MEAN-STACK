import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Module/patient';
import { PatientService } from '../../Features/patient.service'


@Component({
  selector: 'app-patient-read',
  templateUrl: './patient-read.component.html',
  styleUrls: ['./patient-read.component.css']
})
export class PatientReadComponent implements OnInit {

  searchValue?: string
  direction: string=''
  column: string=''
  type: string=''

  constructor(public patientService: PatientService, public router: Router) { }

  ngOnInit(): void {
    this.show()
  }

show()
{
  this.patientService.GetList().subscribe((res) => {
    this.patientService.PatList = res as Patient[];
  }, (error)=> {
    if(error instanceof HttpErrorResponse)
    {
      if(error.status === 403)
      {
        alert("U don't have permission")
        this.router.navigate(['forbidden'])
      }
    }
  })
}

sortIdAsc()
{
  this.direction='asc'
  this.column='_id'
  this.type='number'
}

sortIdDesc()
{
  this.direction='desc'
  this.column='_id'
  this.type='number'
}

sortPatNameAsc()
{
  this.direction='asc'
  this.column='patientName'
  this.type='string'
}

sortPatNameDesc()
{
  this.direction='desc'
  this.column='patientName'
  this.type='string'
}

sortSSNAsc()
{
  this.direction='asc'
  this.column='SSN'
  this.type='number'
}

sortSSNDesc()
{
  this.direction='desc'
  this.column='SSN'
  this.type='number'
}

sortPhoneAsc()
{
  this.direction='asc'
  this.column='phone'
  this.type='number'
}

sortPhoneDesc()
{
  this.direction='desc'
  this.column='phone'
  this.type='number'
}

sortAddressAsc()
{
  this.direction='asc'
  this.column='address'
  this.type='string'
}

sortAddressDesc()
{
  this.direction='desc'
  this.column='address'
  this.type='string'
}


sortGenderAsc()
{
  this.direction='asc'
  this.column='gender'
  this.type='string'
}

sortGenderDesc()
{
  this.direction='desc'
  this.column='gender'
  this.type='string'
}

sortInsuranceIdDesc()
{
  this.direction='desc'
  this.column='insuranceId'
  this.type='string'
}

sortInsuranceIdAsc()
{
  this.direction='asc'
  this.column='insuranceId'
  this.type='string'
}

}