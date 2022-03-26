import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from '../../Module/invoice';
import { InvoiceService } from './../../Features/invoice.service';

@Component({
  selector: 'app-invoice-update',
  templateUrl: './invoice-update.component.html',
  styleUrls: ['./invoice-update.component.css']
})
export class InvoiceUpdateComponent implements OnInit {
  @Input() invoice: Invoice = new Invoice(0, 0, 0, new Date(2015 / 1 / 1), "");

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  EditInvoice() {
    console.log(this.invoice);
    this.invoiceService.nInvoice = this.invoice
  }
  SaveInvoice(inv: Invoice) {
    this.invoiceService.EditInvoice(inv).subscribe((res) => {
      alert("updated")
    }, (error) => alert("not exist"))
  }
}
