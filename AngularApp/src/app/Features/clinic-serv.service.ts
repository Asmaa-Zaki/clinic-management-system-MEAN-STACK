import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClinicServ } from '../Module/clinic-serv';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClinicServService {
  nClinicServ: ClinicServ = new ClinicServ(1, 1, "", "", 1000)

  readonly baseURL = 'http://localhost:3000/clinicService'

  constructor(private http: HttpClient) { }
  ClinicServLists: ClinicServ[] = []

  //AddToList
  AddToList() {
    return this.http.post<any>(this.baseURL, this.nClinicServ).pipe(tap(res => console.log(res)));

  }

  GetList() {
    return this.http.get<any>(this.baseURL).pipe(tap(res => console.log(res)));
  }

  DeleteClinicSer(ser: ClinicServ) {
    return this.http.delete(this.baseURL + '/' + ser._id)
  }

  EditClinicServ(ser: ClinicServ) {
    return this.http.put(this.baseURL + '/' + ser._id, ser)
  }
}
