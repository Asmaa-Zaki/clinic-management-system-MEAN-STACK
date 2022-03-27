import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentCreateComponent } from './Appointment/appointment-create/appointment-create.component';
import { AppointmentReadComponent } from './Appointment/appointment-read/appointment-read.component';
import { AuthGuard } from './Auth/auth.guard';
import { HomeGuard } from './Auth/home.guard';
import { ServiceCreateComponent } from './ClinicServices/service-create/service-create.component';
import { ServiceReadComponent } from './ClinicServices/service-read/service-read.component';
import { AdminDashboardComponent } from './Core/admin-dashboard/admin-dashboard.component';
import { DoctorCreateComponent } from './Doctor/doctor-create/doctor-create.component';
import { DoctorReadComponent } from './Doctor/doctor-read/doctor-read.component';
import { EmployeeCreateComponent } from './Employee/employee-create/employee-create.component';
import { EmployeeReadComponent } from './Employee/employee-read/employee-read.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { InvoiceCreateComponent } from './Invoice/invoice-create/invoice-create.component';
import { InvoiceReadComponent } from './Invoice/invoice-read/invoice-read.component';
import { MedicineCreateComponent } from './Medicine/medicine-create/medicine-create.component';
import { MedicineReadComponent } from './Medicine/medicine-read/medicine-read.component';
import { PatientCreateComponent } from './Patient/patient-create/patient-create.component';
import { PatientReadComponent } from './Patient/patient-read/patient-read.component';
import { PrescriptionCreateComponent } from './Prescription/prescription-create/prescription-create.component';
import { PrescriptionReadComponent } from './Prescription/prescription-read/prescription-read.component';
import { UsersReadComponent } from './Users/users-read/users-read.component';
import {HomeCopyComponent} from './home-copy/home-copy.component'

const routes: Routes= [
  {path:"home", component:HomeCopyComponent, canActivate:[HomeGuard]},
  {path:"login", component:HomeComponent, canActivate:[HomeGuard]},
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"doctor",component: AdminDashboardComponent,},
  {path:"admin",component: AdminDashboardComponent, canActivate:[AuthGuard], children:
  [{path:"appointmentCreate", component: AppointmentCreateComponent},
    {path:"appointmentList", component: AppointmentReadComponent},
    {path:"appointmentList/edit/:id", component:AppointmentCreateComponent},
    {path:"employeeCreate", component: EmployeeCreateComponent},
    {path:"employeeList", component: EmployeeReadComponent},
    {path:"employeeList/edit/:id", component:EmployeeCreateComponent},
    {path:"doctorCreate", component:DoctorCreateComponent},
    {path:"doctorList", component:DoctorReadComponent},
    {path:"doctorList/edit/:id", component:DoctorCreateComponent},
    {path:"patientCreate", component:PatientCreateComponent},
    {path:"patientList", component:PatientReadComponent},
    {path:"patientList/edit/:id", component:PatientCreateComponent},
    {path:"medicineCreate", component:MedicineCreateComponent},
    {path:"medicineList", component:MedicineReadComponent},
    {path:"medicineList/edit/:id", component:MedicineCreateComponent},
    {path:"prescriptionCreate", component:PrescriptionCreateComponent},
    {path:"prescriptionList", component:PrescriptionReadComponent},
    {path:"prescriptionList/edit/:id", component:PrescriptionCreateComponent},
    {path:"prescriptionCreate", component:PrescriptionCreateComponent},
    {path:"prescriptionList", component:PrescriptionReadComponent},
    {path:"prescriptionList/edit/:id", component:PrescriptionCreateComponent},
    {path:"invoiceCreate", component:InvoiceCreateComponent},
    {path:"invoiceList", component:InvoiceReadComponent},
    {path:"invoiceList/edit/:id", component:InvoiceCreateComponent},
    {path:"serviceCreate", component:ServiceCreateComponent},
    {path:"serviceList", component:ServiceReadComponent},
    {path:"serviceList/edit/:id", component:ServiceCreateComponent},
    {path:"UsersList", component:UsersReadComponent}
  ]},
  //{path:"admin", loadChildren: ()=> import('./Core/admin-routing.module').then(m=>m.AdminRoutingModule)},
  {path:"employee", component:EmployeeComponent},
  // {path:"employee", loadChildren:()=>import('./Employee/employee-routing.module').then(m=>m.EmployeeRoutingModule)},
  // {path:"appointment", loadChildren:()=>import('./Appointment/appointment-routing.module').then(m=>m.AppointmentRoutingModule)},
  {path:"**", component:ErrorComponent}, //must be the last
]


@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
