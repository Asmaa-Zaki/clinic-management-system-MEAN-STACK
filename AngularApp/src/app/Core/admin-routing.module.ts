import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentCreateComponent } from '../Appointment/appointment-create/appointment-create.component';
import { AppointmentReadComponent } from '../Appointment/appointment-read/appointment-read.component';

const routes: Routes=[
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
