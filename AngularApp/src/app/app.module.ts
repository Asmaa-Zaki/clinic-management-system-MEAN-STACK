import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentCreateComponent } from './Appointment/appointment-create/appointment-create.component';
import { AppointmentReadComponent } from './Appointment/appointment-read/appointment-read.component';
import { AppointmentUpdateComponent } from './Appointment/appointment-update/appointment-update.component';
import { AppointmentDeleteComponent } from './Appointment/appointment-delete/appointment-delete.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AppointmentService } from './Features/appointment.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterbySpecialityPipe } from './pipes/filterby-speciality.pipe';
import { MedicineCreateComponent } from './Medicine/medicine-create/medicine-create.component';
import { MedicineDeleteComponent } from './Medicine/medicine-delete/medicine-delete.component';
import { MedicineUpdateComponent } from './Medicine/medicine-update/medicine-update.component';
import { MedicineReadComponent } from './Medicine/medicine-read/medicine-read.component';
import { MedicineService } from './Features/medicine.service';
import { SortComponentPipe } from './pipes/sort-Component.pipe';
import { FilterMedicineNamePipe } from './pipes/filter-medicine-name.pipe';
import { EmployeeCreateComponent } from './Employee/employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './Employee/employee-delete/employee-delete.component';
import { EmployeeReadComponent } from './Employee/employee-read/employee-read.component';
import { EmployeeUpdateComponent } from './Employee/employee-update/employee-update.component';
import { FilterEmployeeNamePipe } from './pipes/filter-employee-name.pipe';
import { HomeComponent } from './home/home.component';
import {NavbarComponent} from './Core/navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { ServiceCreateComponent } from './ClinicServices/service-create/service-create.component';
import { ServiceDeleteComponent } from './ClinicServices/service-delete/service-delete.component';
import { ServiceReadComponent } from './ClinicServices/service-read/service-read.component';
import { ServiceUpdateComponent } from './ClinicServices/service-update/service-update.component'
import {DoctorCreateComponent} from './Doctor/doctor-create/doctor-create.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { AdminDashboardComponent } from './Core/admin-dashboard/admin-dashboard.component';
import { DoctorDeleteComponent } from './Doctor/doctor-delete/doctor-delete.component';
import { DoctorUpdateComponent } from './Doctor/doctor-update/doctor-update.component';
import { DoctorReadComponent } from './Doctor/doctor-read/doctor-read.component';
import { FilterbyDocnamePipe } from './pipes/filterby-docname.pipe';
import { SortDoctorPipe } from './pipes/sort-doctor.pipe';
import { PatientCreateComponent } from './Patient/patient-create/patient-create.component';
import { PatientDeleteComponent } from './Patient/patient-delete/patient-delete.component';
import { PatientReadComponent } from './Patient/patient-read/patient-read.component';
import { PatientUpdateComponent } from './Patient/patient-update/patient-update.component';
import { PrescriptionCreateComponent } from './Prescription/prescription-create/prescription-create.component';
import { PrescriptionUpdateComponent } from './Prescription/prescription-update/prescription-update.component';
import { PrescriptionDeleteComponent } from './Prescription/prescription-delete/prescription-delete.component';
import { PrescriptionReadComponent } from './Prescription/prescription-read/prescription-read.component';
import { InvoiceCreateComponent } from './Invoice/invoice-create/invoice-create.component';
import { InvoiceDeleteComponent } from './Invoice/invoice-delete/invoice-delete.component';
import { InvoiceReadComponent } from './Invoice/invoice-read/invoice-read.component';
import { InvoiceUpdateComponent } from './Invoice/invoice-update/invoice-update.component';
import { FilterbyPatnamePipe } from './pipes/filterby-patname.pipe';
import { SortPatientPipe } from './pipes/sort-patient.pipe';
import { SortPrescriptPipe } from './pipes/sort-prescript.pipe';
import { FilterbyPrescriptPipe } from './pipes/filterby-prescript.pipe';
import { UsersReadComponent } from './Users/users-read/users-read.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentCreateComponent,
    AppointmentReadComponent,
    AppointmentUpdateComponent,
    AppointmentDeleteComponent,
    FilterbySpecialityPipe,
    MedicineCreateComponent,
    MedicineDeleteComponent,
    MedicineUpdateComponent,
    MedicineReadComponent,
    SortComponentPipe,
    SortPatientPipe,
    SortPrescriptPipe,
    FilterbyPrescriptPipe,
    FilterMedicineNamePipe,
    FilterbyPatnamePipe,
    FilterbyDocnamePipe,
    SortDoctorPipe,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    EmployeeReadComponent,
    DoctorDeleteComponent,
    DoctorUpdateComponent,
    DoctorCreateComponent,
    DoctorReadComponent,
    PatientCreateComponent,
    PatientDeleteComponent,
    PatientReadComponent,
    PatientUpdateComponent,
    PrescriptionCreateComponent,
    PrescriptionUpdateComponent,
    PrescriptionDeleteComponent,
    PrescriptionReadComponent,
    InvoiceCreateComponent,
    InvoiceDeleteComponent,
    InvoiceReadComponent,
    InvoiceUpdateComponent,
    MedicineCreateComponent,
    MedicineDeleteComponent,
    MedicineReadComponent,
    MedicineUpdateComponent,
    EmployeeUpdateComponent,
    FilterEmployeeNamePipe,
    HomeComponent,
    NavbarComponent,
    ErrorComponent,
    ServiceCreateComponent,
    ServiceDeleteComponent,
    ServiceReadComponent,
    ServiceUpdateComponent,
    DoctorCreateComponent,
    EmployeeComponent,
    AdminDashboardComponent,
    UsersReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AppointmentService, MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
