import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployeeName'
})
export class FilterEmployeeNamePipe implements PipeTransform {

  transform(employeeList: Array<any>, search?: string): any {
    if(employeeList && search)
    {
      if(search)
      return employeeList.filter((emp)=>{
        return emp.firstName == search
      })
    }
    return employeeList
  }

}
