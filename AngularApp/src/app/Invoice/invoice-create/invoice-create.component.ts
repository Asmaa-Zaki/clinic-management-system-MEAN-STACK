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
  nInvoice?: Invoice = new Invoice(0, 0, 0, new Date())
  private updat: InvoiceUpdateComponent = new InvoiceUpdateComponent(this.InvoiceService)
  constructor(public InvoiceService: InvoiceService, public router: Router, public ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((r)=>{
      this.nInvoice= this.InvoiceService.InvoiceList.find((inv)=>{
        return inv._id == r['id']
      })
      if(this.nInvoice != undefined)
      {
        this.InvoiceService.nInvoice = this.nInvoice
      }
    })
  }

  save() {
    this.InvoiceService.AddToList().subscribe((res) => {
      this.router.navigate(['admin/invoiceList'])
    },(error)=>alert("this id already exist"))
  }

  update()
  {
    if(this.nInvoice != undefined)
    {
      this.updat.SaveInvoice(this.nInvoice)
      this.router.navigate(['admin/invoiceList'])
    }
  }
}
