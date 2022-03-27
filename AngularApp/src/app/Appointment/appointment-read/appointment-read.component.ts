import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Module/appointment';
import { AppointmentService } from '../../Features/appointment.service'

@Component({
  selector: 'app-appointment-read',
  templateUrl: './appointment-read.component.html',
  styleUrls: ['./appointment-read.component.css'],
})

export class AppointmentReadComponent implements OnInit {
  searchValue?: string
  direction: string = ''
  column: string = ''
  type: string = ''

  constructor(public appointmentService: AppointmentService) {

  }

  ngOnInit(): void {
    this.show()
  }

  async show() {
    (await this.appointmentService.GetList()).subscribe((res) => {
      this.appointmentService.AppiontList = res as Appointment[];
    })
  }

  sortIdAsc() {
    this.direction = 'asc'
    this.column = '_id'
    this.type = 'number'
  }

  sortIdDesc() {
    this.direction = 'desc'
    this.column = '_id'
    this.type = 'number'
  }

  sortDocIdAsc() {
    this.direction = 'asc'
    this.column = 'doctorId'
    this.type = 'string'
  }

  sortDocIdDesc() {
    this.direction = 'desc'
    this.column = 'doctorId'
    this.type = 'string'
  }
  sortPatIdAsc() {
    this.direction = 'asc'
    this.column = 'doctorId'
    this.type = 'number'
  }

  sortPatIdDesc() {
    this.direction = 'desc'
    this.column = 'doctorId'
    this.type = 'number'
  }

  sortStTimeAsc() {
    this.direction = 'asc'
    this.column = 'startTime'
    this.type = 'number'
  }

  sortStTimeDesc() {
    this.direction = 'desc'
    this.column = 'startTime'
    this.type = 'number'
  }

  sortEnTimeAsc() {
    this.direction = 'asc'
    this.column = 'endTime'
    this.type = 'number'
  }

  sortEnTimeDesc() {
    this.direction = 'desc'
    this.column = 'endTime'
    this.type = 'number'
  }

  sortSpecialityAsc() {
    this.direction = 'asc'
    this.column = 'medicalSpecialty'
    this.type = 'string'
  }

  sortSpecialityDesc() {
    this.direction = 'desc'
    this.column = 'medicalSpecialty'
    this.type = 'string'
  }

}

