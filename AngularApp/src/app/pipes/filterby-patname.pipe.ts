import { Pipe, PipeTransform } from '@angular/core';
import { PatientService } from '../Features/patient.service';


@Pipe({
  name: 'filterbyPatname'
})
export class FilterbyPatnamePipe implements PipeTransform {

  transform(patList: Array<any>, search?: string): any {
    if (patList && search)
    {
     if(search)
      return patList.filter((pat)=>
      {
        return pat.patientName == search
      })
    }
    return patList;
  }

}