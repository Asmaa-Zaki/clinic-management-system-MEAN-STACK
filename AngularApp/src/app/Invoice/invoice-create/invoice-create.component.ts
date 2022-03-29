import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { InvoiceService } from 'src/app/Features/invoice.service';
import { Invoice } from 'src/app/Module/invoice';
import { InvoiceUpdateComponent } from '../invoice-update/invoice-update.component';
@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {
  nInvoice?: Invoice = new Invoice(1, 1, 0, new Date(), "")
  private updat: InvoiceUpdateComponent = new InvoiceUpdateComponent(this.InvoiceService, this.router)
  constructor(public InvoiceService: InvoiceService, public router: Router, public ar: ActivatedRoute) { }
  type:any
  path=""
  data:any
  ngOnInit(): void {
    this.ar.params.subscribe((r) => {
      this.nInvoice = this.InvoiceService.InvoiceList.find((inv) => {
        return inv._id == r['id']
      })
      if (this.nInvoice != undefined) {
        this.InvoiceService.nInvoice = this.nInvoice
      }
    })
    
    this.data= JSON.parse(localStorage.getItem("data")||'{}') 
    this.type= this.data.data.type
    if(this.type== "admin")
    {
      this.path= "admin/invoiceList"
    }
    else if(this.type== "Recpt")
    {
      this.path= "recept/invoiceList"
    }
    else
    {
      this.path= "doctor/invoiceList"
    }
  }

  save() {
    this.InvoiceService.AddToList().subscribe((res) => {
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
  }

  update() {
    if (this.nInvoice != undefined) {
      this.updat.SaveInvoice(this.nInvoice)
      this.router.navigate([this.path])
    }
    else
    {
      this.router.navigate([this.path])
    }
  }
}
