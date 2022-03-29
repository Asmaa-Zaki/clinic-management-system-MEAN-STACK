import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public InvoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.show()
  }
  show() {
    this.InvoiceService.GetList().subscribe((res) => {
      this.InvoiceService.InvoiceList = res as Invoice[];
    }, (error)=> {
      if(error instanceof HttpErrorResponse)
      {
        if(error.status === 403)
        {
          alert("U don't have permission")
          this.router.navigate(['forbidden'])
        }
      }
    })
  }
}
