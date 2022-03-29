import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Features/appointment.service';
import { Appointment } from 'src/app/Module/appointment';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css']
})
export class AppointmentUpdateComponent implements OnInit {
  @Input() appointment: Appointment = new Appointment(0, 0, 0, 0, 0, "")
  constructor(private appointymentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
  }

  EditAppoint() {
    console.log(this.appointment)
    this.appointymentService.nAppointment = this.appointment
  }

  SaveAppoint(app: Appointment) {
    this.appointymentService.EditAppoint(app).subscribe((res) => {
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
