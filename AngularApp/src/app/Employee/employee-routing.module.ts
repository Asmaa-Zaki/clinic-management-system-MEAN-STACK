import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeReadComponent } from './employee-read/employee-read.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes: Routes=[
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //RouterModule.forChild(routes)
  ]
})
export class EmployeeRoutingModule { }
