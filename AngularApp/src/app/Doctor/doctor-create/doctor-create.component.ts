import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../Module/doctor'
import { DoctorService } from '../../Features/doctor.service'
import { UsersService } from 'src/app/Features/users.service';
import { DoctorUpdateComponent } from '../doctor-update/doctor-update.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {
  type: any
  path= ""
  data:any

  constructor(public DoctorService:DoctorService, public userSerive: UsersService,public router: Router, public ar: ActivatedRoute) { }
  nDoctor?: Doctor= new Doctor(0, "", 0, 0,"", "", "", "","")
  private updat: DoctorUpdateComponent = new DoctorUpdateComponent(this.DoctorService, this.router)
  ngOnInit(): void {
    this.ar.params.subscribe((r)=>{
      this.nDoctor= this.DoctorService.DocList.find((doc)=>{
        return doc._id == r['id']
      })
      if(this.nDoctor != undefined)
      {
        this.DoctorService.nDoctor = this.nDoctor
      }
    })

    this.data= JSON.parse(localStorage.getItem("data")||'{}') 
    this.type= this.data.data.type
    if(this.type== "admin")
    {
      this.path= "admin/doctorList"
    }
    else if(this.type== "Recpt")
    {
      this.path= "recept/doctorList"
    }
    else
    {
      this.path= "doctor/doctorList"
    }
  }

  save()
  {
    this.DoctorService.AddToList().subscribe((res)=>{
      this.userSerive.nUser.type=this.type
        this.router.navigate([this.path])
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
    if(this.nDoctor != undefined)
    {
      this.updat.SaveDoc(this.nDoctor)
      this.router.navigate([this.path])
    }
    else
    {
      this.router.navigate([this.path])
    }
  }

}
