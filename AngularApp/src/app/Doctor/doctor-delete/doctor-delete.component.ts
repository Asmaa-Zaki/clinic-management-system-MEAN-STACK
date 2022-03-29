import { Component, Input, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/Features/doctor.service';
import { Doctor } from 'src/app/Module/doctor';


@Component({
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.component.html',
  styleUrls: ['./doctor-delete.component.css']
})
export class DoctorDeleteComponent implements OnInit {
  @Input() doctor: Doctor = new Doctor(0,"",0,0,"","","","","")
 

  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
  }

  DeleteDoctor()
  {
    this.doctorService.DeleteDoc(this.doctor).subscribe((res)=>{
      alert("Doctor with Id: "+this.doctor._id+" Deleted")
    })
  }

}
