import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { Appointment } from '../../Module/appointment'
import { AppointmentService } from '../../Features/appointment.service'
import { AppComponent } from 'src/app/app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorUpdateComponent } from 'src/app/Doctor/doctor-update/doctor-update.component';
import { AppointmentUpdateComponent } from '../appointment-update/appointment-update.component';
import { empty } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})

export class AppointmentCreateComponent implements OnInit {
  doctorId= 1
  patientIId= 1
  type:any
  path=""
  data:any

  constructor(public appointmentService: AppointmentService, public usersSer: AppointmentService, public router: Router, public ar: ActivatedRoute) { }
  nApppoint?: Appointment = new Appointment(1, 1, 1, 0, 0, "")
  private updat: AppointmentUpdateComponent = new AppointmentUpdateComponent(this.appointmentService, this.router)

  ngOnInit(): void {
    this.ar.params.subscribe((r) => {
      this.nApppoint = this.appointmentService.AppiontList.find((doc) => {
        return doc._id == r['id']
      })
      if (this.nApppoint != undefined) {
        this.appointmentService.nAppointment = this.nApppoint
      }
    })
    this.data= JSON.parse(localStorage.getItem("data")||'{}') 
    this.type= this.data.data.type
    
    console.log(this.type)
    if(this.type== "admin")
    {
      this.path= "admin/appointmentList"
    }
    else if(this.type== "Recpt")
    {
      this.path= "recept/appointmentList"
    }
    else
    {
      this.path= "doctor/appointmentList"
    }
  }


  save() {
    console.log(this.appointmentService.AppiontList)
    // if(this.appointmentService.AppiontList.filter((appoint)=>appoint.doctorId==this.appointmentService.nAppointment.doctorId && appoint.startTime== this.appointmentService.nAppointment.startTime) == null)
    //   {
        this.appointmentService.nAppointment.doctorId=this.doctorId
        this.appointmentService.nAppointment.patientId=this.patientIId
        this.appointmentService.AddToList().subscribe((res) => {
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
      //}
    //    }, (error) => { alert(`this Id ${this.appointmentService.nAppointment} already exist`) })
    //   }
    // else
    // {
    //   alert("This Doctor Already Busy in this Time")
    // }
}

  update() {
    if (this.nApppoint != undefined) {
      this.appointmentService.nAppointment.doctorId=this.doctorId
      this.appointmentService.nAppointment.patientId=this.patientIId
      this.updat.SaveAppoint(this.nApppoint)
      this.router.navigate([this.path])
    }
    else
    {
      this.router.navigate([this.path])
    }
  }
}
