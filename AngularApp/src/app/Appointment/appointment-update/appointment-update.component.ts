import { Component, Input, OnInit, Output } from '@angular/core';
import { AppointmentService } from 'src/app/Features/appointment.service';
import { Appointment } from 'src/app/Module/appointment';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css']
})
export class AppointmentUpdateComponent implements OnInit {
  @Input() appointment: Appointment = new Appointment(0, 0, 0, 0, 0, "")
  //@Output() cAppointment:Appointment= new Appointment(0,0,0,0,"")
  //appoint: Appointment= new Appointment(0,0,0,0,"")
  constructor(private appointymentService: AppointmentService) { }

  ngOnInit(): void {
  }

  EditAppoint() {
    console.log(this.appointment)
    this.appointymentService.nAppointment = this.appointment
  }

  SaveAppoint(app: Appointment) {
    this.appointymentService.EditAppoint(app).subscribe((res) => {
      alert("updated")
    }, (error) => alert("not exist"))
  }
}
