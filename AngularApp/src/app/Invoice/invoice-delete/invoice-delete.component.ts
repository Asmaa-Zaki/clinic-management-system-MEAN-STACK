import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from '../../Module/invoice';
import { InvoiceService } from 'src/app/Features/invoice.service';

@Component({
  selector: 'app-invoice-delete',
  templateUrl: './invoice-delete.component.html',
  styleUrls: ['./invoice-delete.component.css']
})
export class InvoiceDeleteComponent implements OnInit {
  @Input() invoice: Invoice = new Invoice(0, 0, 0, new Date("2013-02-01"), "")
  constructor(private InvoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  DeleteInvoice() {
    this.InvoiceService.DeleteInvoice(this.invoice).subscribe((res) => {
      alert(`Invoice with Id ${this.invoice._id} deleted`)
    }, (error) => alert(`Invoice with id ${this.invoice._id} not exist`))
  }
}
