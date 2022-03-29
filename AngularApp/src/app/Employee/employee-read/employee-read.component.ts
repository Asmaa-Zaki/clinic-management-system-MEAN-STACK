import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Features/employee.service';
import { Employee } from 'src/app/Module/employee';
import { NavbarComponent } from 'src/app/Core/navbar/navbar.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements OnInit {
  searchValue?: string
  direction: string=''
  column: string=''
  type: string=''

  constructor(public empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.show()
  }

  show()
  {
    this.empService.GetList().subscribe((res)=>{
      this.empService.EmployeeList = res as Employee[];
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

sortFirstNameAsc()
{
  this.direction='asc'
  this.column='firstName'
  this.type='string'
}

sortFirstNameDesc()
{
  this.direction='desc'
  this.column='firstName'
  this.type='string'
}

sortLastNameAsc()
{
  this.direction='asc'
  this.column='lastName'
  this.type='string'
}

sortLastNameDesc()
{
  this.direction='desc'
  this.column='lastName'
  this.type='string'
}

sortEmailAsc()
{
  this.direction='asc'
  this.column='email'
  this.type='string'
}

sortEmailDesc()
{
  this.direction='desc'
  this.column='email'
  this.type='string'
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
}
