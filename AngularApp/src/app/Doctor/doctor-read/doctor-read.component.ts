import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Features/users.service';
import { Doctor } from 'src/app/Module/doctor';
import { DoctorService } from '../../Features/doctor.service'

@Component({
  selector: 'app-doctor-read',
  templateUrl: './doctor-read.component.html',
  styleUrls: ['./doctor-read.component.css']
})
export class DoctorReadComponent implements OnInit {
  searchValue?: string
  direction: string=''
  column: string=''
  type: string=''

  constructor(public doctorService: DoctorService, public userSer: UsersService, public router: Router) { }

  ngOnInit(): void {
    this.show()
  }

show()
{
  this.doctorService.GetList().subscribe((res) => {
    this.doctorService.DocList = res as Doctor[];
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

sortDocNameAsc()
{
  this.direction='asc'
  this.column='doctorName'
  this.type='string'
}

sortDocNameDesc()
{
  this.direction='desc'
  this.column='doctorName'
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


sortSpecialityAsc()
{
  this.direction='asc'
  this.column='medicalSpecialty'
  this.type='string'
}

sortSpecialityDesc()
{
  this.direction='desc'
  this.column='medicalSpecialty'
  this.type='string'
}

sortUsernameDesc()
{
  this.direction='desc'
  this.column='username'
  this.type='string'
}

sortUsernameAsc()
{
  this.direction='asc'
  this.column='username'
  this.type='string'
}

sortPasswordDesc()
{
  this.direction='desc'
  this.column='password'
  this.type='string'
}

sortPasswordAsc()
{
  this.direction='asc'
  this.column='password'
  this.type='string'
}


}
