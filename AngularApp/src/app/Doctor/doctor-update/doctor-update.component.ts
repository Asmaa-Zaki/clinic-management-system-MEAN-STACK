import { Component,Input, OnInit, Output } from '@angular/core';
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
  constructor(private doctorService: DoctorService) { }

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
    },(error)=>alert("not exist"))
  }
}
