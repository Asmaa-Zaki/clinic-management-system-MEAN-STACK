import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Features/users.service';
import { Doctor } from 'src/app/Module/doctor';
import { Employee } from 'src/app/Module/employee';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  localData= JSON.parse(localStorage.getItem("data")||'{}')
  doctor:Doctor= new Doctor(0, "", 0, 0, "", "", "", "")
  admin: Employee= new Employee(0,"", "", "", 0, "", "", "admin")

  title: string=""
  doctorActive= false
  reciptionistActive= false
  nurseActive= false
  adminActive= false
  name= this.localData.data.username
  type= this.localData.data.type
  
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    // if(this.type != "doctor" && this.type!="Reciptionist")
    // {
    //   this.type="Doctor"
    // }
    // this.title=" Users"

    // if(UsersService.current=="doctor")
    // {
    //   this.type="Doctor"
    //   this.doctor= UsersService.currentUser as Doctor
    //   this.doctorActive=true
    //   this.name=this.doctor.doctorName
    // }
    // else if(UsersService.current=="admin")
    // {
    //   this.type="Admin"
    //   this.admin= UsersService.currentUser as Employee
    //   this.name= this.admin.firstName
    //   this.adminActive= true

    // }
  }

  logOut()
  {
    this.userService.deleteToken()
  }
  display(current:string)
  {
    this.title= current
  }
}
