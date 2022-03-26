import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DoctorDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    Router,
    RouterModule
  ]
})
export class CoreModule { }
