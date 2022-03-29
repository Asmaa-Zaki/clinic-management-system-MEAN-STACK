import { HttpErrorResponse } from '@angular/common/http';
import { Component,Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/Features/doctor.service';
import { Doctor } from 'src/app/Module/doctor';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {
  @Input() doctor:Doctor= new Doctor(0,"",0,0,"","","","","")

  doc: Doctor= new Doctor(0,"",0,0,"","","","","")
  constructor(private doctorService: DoctorService, public router: Router) { }

  ngOnInit(): void {
  }
  EditDoc()
  {
    console.log(this.doctor)
    this.doctorService.nDoctor=this.doctor
  }

  SaveDoc(doc:Doctor)
  {
    this.doctorService.EditDoc(doc).subscribe((res)=>{
      alert("updated")
    }, (error)=> {
      if(error instanceof HttpErrorResponse)
      {
        if(error.status === 403)
        {
          alert("U don't have permission")
          this.router.navigate(['forbidden'])
        }
        else if(error.status === 400)
        {alert("not exist")}
      }
    })
  }
}
