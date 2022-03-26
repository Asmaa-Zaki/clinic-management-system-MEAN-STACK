import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/Features/appointment.service';
import { Appointment } from 'src/app/Module/appointment';

@Component({
  selector: 'app-appointment-delete',
  templateUrl: './appointment-delete.component.html',
  styleUrls: ['./appointment-delete.component.css']
})
export class AppointmentDeleteComponent implements OnInit {
  @Input() appointment: Appointment = new Appointment(0, 0, 0, 0, "")

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

  DeleteAppointment() {
    this.appointmentService.DeleteAppoint(this.appointment).subscribe((res) => {
      alert("Appointment with Id: "+this.appointment._id+" Deleted")
    })
  }

}
