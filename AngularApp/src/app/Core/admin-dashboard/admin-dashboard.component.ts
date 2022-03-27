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
