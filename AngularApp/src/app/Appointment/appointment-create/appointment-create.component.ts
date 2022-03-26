import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { Appointment } from '../../Module/appointment'
import { AppointmentService } from '../../Features/appointment.service'
import { AppComponent } from 'src/app/app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorUpdateComponent } from 'src/app/Doctor/doctor-update/doctor-update.component';
import { AppointmentUpdateComponent } from '../appointment-update/appointment-update.component';
import { empty } from 'rxjs';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})


export class AppointmentCreateComponent implements OnInit {

  constructor(public appointmentService: AppointmentService, public usersSer:AppointmentService ,public router: Router, public ar: ActivatedRoute) { }

  nApppoint?: Appointment= new Appointment(0, 0, 0, 0 , "")

  private updat: AppointmentUpdateComponent = new AppointmentUpdateComponent(this.appointmentService)

  ngOnInit(): void {
    this.ar.params.subscribe((r)=>{
      this.nApppoint= this.appointmentService.AppiontList.find((doc)=>{
        return doc._id == r['id']
      })
      if(this.nApppoint != undefined)
      {
        this.appointmentService.nAppointment = this.nApppoint
      }
    })
  }


  save() {
    this.appointmentService.AddToList().subscribe((res) => {
      this.router.navigate(['admin/appointmentList'])
    },(error)=>{alert(`this Id ${this.nApppoint?._id} already exist`)})
  }

  update()
  {
    if(this.nApppoint!= undefined)
    {
      this.updat.SaveAppoint(this.nApppoint)
      this.router.navigate(['admin/appointmentList'])
    }
  }
}
