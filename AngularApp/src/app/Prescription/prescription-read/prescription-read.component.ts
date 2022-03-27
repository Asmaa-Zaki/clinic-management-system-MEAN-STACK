import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from './../../Features/prescription.service';
import { Prescription } from '../../Module/prescription';

@Component({
  selector: 'app-prescription-read',
  templateUrl: './prescription-read.component.html',
  styleUrls: ['./prescription-read.component.css']
})
export class PrescriptionReadComponent implements OnInit {
  searchValue?: string
  direction: string = ''
  column: string = ''
  type: string = ''
  constructor(public prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
    this.show()
  }
  show() {
    this.prescriptionService.GetList().subscribe((res) => {
      this.prescriptionService.PrescriptList = res as Prescription[];
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
    this.column = 'patientId'
    this.type = 'string'
  }

  sortPatIdDesc() {
    this.direction = 'desc'
    this.column = 'patientId'
    this.type = 'string'
  }

  sortMedIdAsc() {
    this.direction = 'asc'
    this.column = 'medicineId'
    this.type = 'string'
  }

  sortMedIdDesc() {
    this.direction = 'desc'
    this.column = 'medicineId'
    this.type = 'string'
  }

  sortNumOfDoAsc() {
    this.direction = 'asc'
    this.column = 'numberOfDoses'
    this.type = 'string'
  }

  sortNumOfDoDesc() {
    this.direction = 'desc'
    this.column = 'numberOfDoses'
    this.type = 'string'
  }
  sortDateAsc() {
    this.direction = 'asc'
    this.column = 'dateOfPrescription'
    this.type = 'number'
  }
  sortDateDesc() {
    this.direction = 'asc'
    this.column = 'dateOfPrescription'
    this.type = 'number'
  }
}
