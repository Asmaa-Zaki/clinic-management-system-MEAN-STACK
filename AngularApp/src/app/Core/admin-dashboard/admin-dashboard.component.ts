import { HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Features/users.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  localData= JSON.parse(localStorage.getItem("data")||'{}')
  title: string=" Appointments"
  name= this.localData.data.username
  type= this.localData.data.type
 
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    if(this.type== undefined)
    {
      this.type= "Doctor"
    }
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
