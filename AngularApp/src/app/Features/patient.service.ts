import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Patient } from '../Module/patient'
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  nPatient: Patient=new Patient(1,"",0,0,"","","",0);
  readonly baseURL = 'http://localhost:3000/patient'

  constructor(private http: HttpClient) { }
  PatList: Patient[] = [];

  //addToList:
  AddToList() {
    console.log(this.nPatient);
    return this.http.post<any>(this.baseURL, this.nPatient)
  }
  GetList() {
    return this.http.get(this.baseURL)
  }

  DeletePat(pat: Patient) {
    console.log("" + (this.baseURL) + `/${pat._id}`)
    return this.http.delete(this.baseURL + '/' + pat._id)

  }

  EditPat(pat: Patient) {
    console.log("" + (this.baseURL) + `/${pat._id}`)
    return this.http.put(this.baseURL + `/${pat._id}`, pat)
  }
}
