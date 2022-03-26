import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentReadComponent } from './appointment-read/appointment-read.component';



const routes: Routes=[
  {path:"appointmentCreate", component: AppointmentCreateComponent},
  {path:"appointmentList", component: AppointmentReadComponent},
  {path:"appointmentList/edit/:id", component:AppointmentCreateComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})

export class AppointmentRoutingModule { }
