import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Appointment } from '../Module/appointment'
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})


export class AppointmentService {

  nAppointment: Appointment = new Appointment(0, 0, 0, 0, "")

  readonly baseURL = 'http://localhost:3000/appointment'

  constructor(private http: HttpClient) { }
  AppiontList: Appointment[] = [];

  //addToList
  AddToList() {
    console.log(this.nAppointment);
    return this.http.post(this.baseURL, this.nAppointment)
  }

  GetList() {
    return this.http.get(this.baseURL)
  }

  DeleteAppoint(appoint:Appointment)
  {
    return this.http.delete(this.baseURL+'/'+appoint._id) 
  }

  EditAppoint(appoint:Appointment)
  {
    console.log(""+(this.baseURL)+`/${appoint._id}`)
      return this.http.put(this.baseURL+`/${appoint._id}`,appoint)
      
  }
}
