import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Module/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  nEmployee: Employee= new Employee(0, "", "", "", 0, "", "","" ,"")

  readonly baseURL = 'http://localhost:3000/employee'

  constructor(private http: HttpClient) { }
  
  EmployeeList: Employee[]= []

  AddToList()
  {
    return this.http.post(this.baseURL, this.nEmployee)
  }

  GetList()
  {
    return this.http.get(this.baseURL)
  }

  DeleteEmployee(emp:Employee)
  {
    return this.http.delete(this.baseURL+'/'+emp._id)
  }

  EditEmployee(emp:Employee)
  {
    return this.http.put(this.baseURL+'/'+emp._id, emp)
  }
}
