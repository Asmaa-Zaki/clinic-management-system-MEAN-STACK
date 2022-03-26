import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AppComponent } from '../app.component';
import { Invoice } from '../Module/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  nInvoice: Invoice = new Invoice(0, 0, 0, new Date(2015 - 1 - 1), "");

  readonly baseURL = 'http://localhost:3000/invoice'
  constructor(private http: HttpClient) { }
  InvoiceList: Invoice[] = [];
  //addToList
  AddToList() {
    console.log(this.nInvoice);
    return this.http.post(this.baseURL, this.nInvoice)
  }

  GetList() {
    return this.http.get(this.baseURL)
  }

  DeleteInvoice(inv: Invoice) {
    return this.http.delete(this.baseURL + '/' + inv._id)
  }

  EditInvoice(invoice: Invoice) {
    console.log("" + (this.baseURL) + `/${invoice._id}`)
    return this.http.put(this.baseURL + `/${invoice._id}`, invoice)

  }
}
