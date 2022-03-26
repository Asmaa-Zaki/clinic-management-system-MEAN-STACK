import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/Module/invoice';
import { InvoiceService } from '../../Features/invoice.service';
@Component({
  selector: 'app-invoice-read',
  templateUrl: './invoice-read.component.html',
  styleUrls: ['./invoice-read.component.css']
})
export class InvoiceReadComponent implements OnInit {
  searchValue?: string
  direction: string = ''
  column: string = ''
  type: string = ''
  constructor(public InvoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.show()
  }
  show() {
    this.InvoiceService.GetList().subscribe((res) => {
      this.InvoiceService.InvoiceList = res as Invoice[];
    })
  }
  // sortIdAsc() {
  //   this.direction = 'asc'
  //   this.column = '_id'
  //   this.type = 'number'
  // }

  // sortIdDesc() {
  //   this.direction = 'desc'
  //   this.column = '_id'
  //   this.type = 'number'
  // }

  // sortPatientIdAsc() {
  //   this.direction = 'asc'
  //   this.column = 'doctorId'
  //   this.type = 'number'
  // }

  // sortPatientIdDesc() {
  //   this.direction = 'desc'
  //   this.column = 'doctorId'
  //   this.type = 'number'
  // }

  // sorttaxAsc() {
  //   this.direction = 'asc'
  //   this.column = 'startTime'
  //   this.type = 'number'
  // }

  // sorttaxDesc() {
  //   this.direction = 'desc'
  //   this.column = 'startTime'
  //   this.type = 'number'
  // }

  // sortdateAsc() {
  //   this.direction = 'asc'
  //   this.column = 'endTime'
  //   this.type = 'number'
  // }

  // sortdateDesc() {
  //   this.direction = 'desc'
  //   this.column = 'endTime'
  //   this.type = 'number'
  // }

}
