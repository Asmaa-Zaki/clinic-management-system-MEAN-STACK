import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Features/employee.service';
import { Employee } from 'src/app/Module/employee';
import { NavbarComponent } from 'src/app/Core/navbar/navbar.component';


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

  constructor(public empService: EmployeeService) { }

  ngOnInit(): void {
    this.show()
  }

  show()
  {
    this.empService.GetList().subscribe((res)=>{
      this.empService.EmployeeList = res as Employee[];
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
