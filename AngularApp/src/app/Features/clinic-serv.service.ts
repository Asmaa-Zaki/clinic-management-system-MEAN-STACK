import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClinicServ } from '../Module/clinic-serv';

@Injectable({
  providedIn: 'root'
})

export class ClinicServService {
  nClinicServ: ClinicServ = new ClinicServ(0, 0, "", "",0)

  readonly baseURL= 'http://localhost:3000/clinicService'

  constructor(private http: HttpClient) { }
  ClinicServLists: ClinicServ[]= []

  //AddToList
  AddToList()
  {
    return this.http.post(this.baseURL,this.nClinicServ)
  }

  GetList()
  {
    return this.http.get(this.baseURL)
  }

  DeleteClinicSer(ser:ClinicServ)
  {
    return this.http.delete(this.baseURL+'/'+ser._id)
  }

  EditClinicServ(ser:ClinicServ)
  {
    return this.http.put(this.baseURL+'/'+ser._id, ser)
  }
}
