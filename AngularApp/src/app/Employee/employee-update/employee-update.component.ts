import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Features/employee.service';
import { Employee } from 'src/app/Module/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  @Input() employee: Employee= new Employee(0, "", "", "", 0, "", "", "")

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
  }

  EditEmp()
  {
    this.empService.nEmployee= this.employee
  }

  SaveEmp(emp:Employee)
  {
    this.empService.EditEmployee(emp).subscribe((res)=>{
      alert("updated")
    },(error)=>alert("not exist"))
  }

}
