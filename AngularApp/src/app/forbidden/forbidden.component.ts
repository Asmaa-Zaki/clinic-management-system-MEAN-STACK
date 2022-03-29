import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  constructor(private router: Router) { }
  data= JSON.parse(localStorage.getItem("data")||'{}') 
  type= this.data.data.type

  ngOnInit(): void {
    
  }

  back()
  {
    if(this.type=="Recpt")
    {
      this.router.navigate(['recept/appointmentList'])
    }
    else if(this.type== "admin")
    {
      this.router.navigate(['admin/appointmentList'])
    }
    else
    {
      this.router.navigate(['doctor/appointmentList'])
    }
  }

}
