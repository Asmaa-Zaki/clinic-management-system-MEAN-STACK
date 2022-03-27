import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../Module/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  nMedicine: Medicine = new Medicine(1, "", "", "")

  readonly baseURL= 'http://localhost:3000/medicine'

  constructor(private http: HttpClient) { }

  MedicineList: Medicine[]=[]

  //addToList
  AddToList()
  {
    console.log(this.nMedicine)
    return this.http.post(this.baseURL, this.nMedicine)
  }

  GetList()
  {
    return this.http.get(this.baseURL)
  }

  DeleteMedicine(med:Medicine)
  {
    return this.http.delete(this.baseURL+'/'+med._id)
  }

  EditMedicine(med: Medicine)
  {
    console.log(med)
    console.log(this.baseURL+'/'+this.nMedicine._id)
    return this.http.put(this.baseURL+`/${this.nMedicine._id}`, this.nMedicine)
  }
}
