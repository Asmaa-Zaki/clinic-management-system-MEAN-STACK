import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorUpdateComponent } from 'src/app/Doctor/doctor-update/doctor-update.component';
import { EmployeeService } from 'src/app/Features/employee.service';
import { UsersService } from 'src/app/Features/users.service';
import { Employee } from 'src/app/Module/employee';
import { NavbarComponent } from 'src/app/Core/navbar/navbar.component';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

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
  }

  save()
  {
      this.employeeService.AddToList().subscribe((res)=>{
        this.usersSer.AddToList().subscribe((res)=>{
          this.router.navigate(['admin/employeeList'])
          alert("employee added")
          console.log(this.employeeService.nEmployee?.type)
        })
      },(error)=>{alert("this Id already exist")})
  }

  update()
  {
    if(this.nEmp!= undefined)
    {
      this.updat.SaveEmp(this.nEmp)
      this.router.navigate(['admin/employeeList'])
    }
  }

}
