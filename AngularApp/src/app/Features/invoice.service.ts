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
    return this.http.post<any>(this.baseURL, this.nInvoice).pipe(tap(res => console.log(res)));
  }

  GetList() {
    return this.http.get<any>(this.baseURL).pipe(tap(res => console.log(res)));
  }

  DeleteInvoice(inv: Invoice) {
    return this.http.delete<any>(this.baseURL + '/' + inv._id)
  }

  EditInvoice(invoice: Invoice) {
    console.log("" + (this.baseURL) + `/${invoice._id}`)
    return this.http.put<any>(this.baseURL + `/${invoice._id}`, invoice)

  }
}
