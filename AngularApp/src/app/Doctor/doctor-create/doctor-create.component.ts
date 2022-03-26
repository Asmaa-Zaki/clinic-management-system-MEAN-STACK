import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../Module/doctor'
import { DoctorService } from '../../Features/doctor.service'
import { UsersService } from 'src/app/Features/users.service';
import { DoctorUpdateComponent } from '../doctor-update/doctor-update.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {
  type="doctor"
  constructor(public DoctorService:DoctorService, public userSerive: UsersService,public router: Router, public ar: ActivatedRoute) { }
  nDoctor?: Doctor= new Doctor(0, "", 0, 0,"", "", "", "")
  private updat: DoctorUpdateComponent = new DoctorUpdateComponent(this.DoctorService)
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
  }

  save()
  {
    this.DoctorService.AddToList().subscribe((res)=>{
      this.userSerive.nUser.type=this.type
      this.userSerive.AddToList().subscribe((res)=>{
        this.router.navigate(['admin/doctorList'])
      })
    },(error)=>{alert("this Id already exist")})
  } 


  update()
  {
    if(this.nDoctor != undefined)
    {
      this.updat.SaveDoc(this.nDoctor)
      this.router.navigate(['admin/doctorList'])
    }
  }

}
