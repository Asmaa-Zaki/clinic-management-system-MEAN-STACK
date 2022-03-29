import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/Core/navbar/navbar.component';
import { DoctorService } from 'src/app/Features/doctor.service';
import { EmployeeService } from 'src/app/Features/employee.service';
import { UsersService } from 'src/app/Features/users.service';
import { HomeComponent } from 'src/app/home/home.component';
import { Doctor } from 'src/app/Module/doctor';
import { Employee } from 'src/app/Module/employee';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  type = ""
  token: string = ""
  userName: string = ""
  passWord: string = ""
  // username= ""

  localData: any

  constructor(private userSer: UsersService, public doctSer: DoctorService, public empServ: EmployeeService, public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
    this.userSer.login(form.value).subscribe((res)=>{
        console.log(JSON.stringify(res))
        this.userSer.setToken('data',JSON.stringify(res))
        this.localData= JSON.parse(localStorage.getItem("data")||'{}') 
        this.token= this.localData.token
        console.log(this.token)
        this.userSer.setToken('token',this.token)
        if(this.type=="Doctor")
        {
          this.router.navigate(['doctor/appointmentList'])
        }
        if(this.type=="Admin")
        {
          this.router.navigate(['admin/appointmentList'])
        }
        if(this.type=="Reciptionist")
        {
          this.router.navigate(['recept/appointmentList'])
        }
       
    },(err)=>{
      alert("Invalid Username or Password")
    })
  }
}
