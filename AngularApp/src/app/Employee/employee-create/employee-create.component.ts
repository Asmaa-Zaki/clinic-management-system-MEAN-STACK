import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorUpdateComponent } from 'src/app/Doctor/doctor-update/doctor-update.component';
import { EmployeeService } from 'src/app/Features/employee.service';
import { UsersService } from 'src/app/Features/users.service';
import { Employee } from 'src/app/Module/employee';
import { NavbarComponent } from 'src/app/Core/navbar/navbar.component';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  type: any
  path= ""
  data:any

  constructor(public employeeService: EmployeeService, public usersSer:UsersService ,public router: Router, public ar: ActivatedRoute) { }

  nEmp?: Employee= new Employee(0, "", "", "", 0, "", "", "")
  private updat:EmployeeUpdateComponent= new EmployeeUpdateComponent(this.employeeService);
  
  ngOnInit(): void {
    this.ar.params.subscribe((r)=>{
      this.nEmp=this.employeeService.EmployeeList.find((emp)=>{
        return emp._id== r['id']
      })
     if(this.nEmp!= undefined)
     {
       this.employeeService.nEmployee=this.nEmp
     }
    })

    this.data= JSON.parse(localStorage.getItem("data")||'{}') 
    this.type= this.data.data.type
    if(this.type== "admin")
    {
      this.path= "admin/employeeList"
    }
    else if(this.type== "Recpt")
    {
      this.path= "recept/employeeList"
    }
    else
    {
      this.path= "doctor/employeeList"
    }
  }

  save()
  {
      this.employeeService.AddToList().subscribe((res)=>{
          this.router.navigate([this.path])
          alert("employee added")
          console.log(this.employeeService.nEmployee?.type)
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
    if(this.nEmp!= undefined)
    {
      this.updat.SaveEmp(this.nEmp)
      this.router.navigate([this.path])
    }
    else
    {
      this.router.navigate([this.path])
    }
  }

}
