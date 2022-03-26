import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../Features/doctor.service';
import { EmployeeService } from '../Features/employee.service';
import { UsersService } from '../Features/users.service';
import { Doctor } from '../Module/doctor';
import { Employee } from '../Module/employee';
import { NavbarComponent } from '../Core/navbar/navbar.component';
import { Users } from '../Module/users';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public static logged = false
  logged= true
  type:string=""
  userName:string=""
  passWord:string=""

  constructor(public doctSer:DoctorService, public empServ: EmployeeService, public router: Router) { }

  ngOnInit(): void {
    this.doctSer.GetList().subscribe((res) => {
      this.doctSer.DocList = res as Doctor[];
    })
    this.empServ.GetList().subscribe((res)=>{
      this.empServ.EmployeeList= res as Employee[]
      console.log(this.empServ.EmployeeList)
    })
    
  }
currentUser?:any

  sign()
  {
    switch (this.type){
      case "doctor":
       // console.log("doctor")
       this.currentUser= this.doctSer.DocList.find((doc)=>{
         return doc.password==this.passWord && doc.username== this.userName
        })
        if(this.currentUser == undefined)
        {
          console.log("not exist")
          this.logged= false
        }
        else
        {
          console.log(this.currentUser)
          HomeComponent.logged=true
          this.router.navigate(['doctor'])
          UsersService.current="doctor"
          UsersService.currentUser= this.currentUser
        }
        break
      case "Reciptionist":
        this.currentUser= this.empServ.EmployeeList.find((doc)=>{
          return doc.password==this.passWord && doc.userName== this.userName && doc.type == this.type
         })
         if(this.currentUser == undefined)
         {
           console.log("not exist")
           this.logged= false
         }
         else
         {
           console.log(this.currentUser)
           HomeComponent.logged=true
           this.router.navigate(['employee/employeeList'])
           NavbarComponent.logged=true
           UsersService.active=true
         }
        console.log("Reciptionist")
        break
      case "Office Boy":
        this.currentUser= this.empServ.EmployeeList.find((doc)=>{
          return doc.password==this.passWord && doc.userName== this.userName && doc.type == this.type
         })
         if(this.currentUser == undefined)
         {
           console.log("not exist")
           this.logged= false
         }
         else
         {
           console.log(this.currentUser)
           HomeComponent.logged=true
           this.router.navigate(['employee/employeeList'])
         }
        console.log("Office Boy")
        break
      case "Nurse": 
        this.currentUser= this.empServ.EmployeeList.find((doc)=>{
          return doc.password==this.passWord && doc.userName== this.userName && doc.type == this.type
        })
        if(this.currentUser == undefined)
        {
          console.log("not exist")
          this.logged= false
        }
        else
        {
          console.log(this.currentUser)
          HomeComponent.logged=true
        }
        console.log("Nurse")
        break
      case "Admin": 
      
        this.currentUser= this.empServ.EmployeeList.find((doc)=>{
          return doc.password==this.passWord && doc.userName== this.userName && doc.type == "admin"
        })
        if(this.currentUser == undefined)
        {
          console.log("not exist")
          this.logged= false
        }
        else
        {
          console.log(this.currentUser)
          this.router.navigate(['admin/UsersList'])
          UsersService.current="admin"
          UsersService.currentUser= this.currentUser
        }
        console.log("Admin")
        break 
    }
  }
}
