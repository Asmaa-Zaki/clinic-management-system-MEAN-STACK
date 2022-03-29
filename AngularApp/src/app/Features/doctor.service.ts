import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {Doctor} from '../Module/doctor'
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  nDoctor: Doctor=new Doctor(0,"",0,0,"","","","","");
  readonly baseURL = 'http://localhost:3000/doctor'

  constructor(private http: HttpClient) { }
  DocList:Doctor[]=[];

  //addToList:
  AddToList()
  {
    console.log(this.nDoctor);
    return this.http.post(this.baseURL, this.nDoctor)
  }
  GetList()
  {
    return this.http.get(this.baseURL)
  }

  DeleteDoc(doc:Doctor)
  {
    return this.http.delete(this.baseURL+'/'+doc._id)
  }

  EditDoc(doc:Doctor)
  {
    console.log(""+(this.baseURL)+`/${doc._id}`)
    return this.http.put(this.baseURL+`/${doc._id}`,doc)
  } 
}