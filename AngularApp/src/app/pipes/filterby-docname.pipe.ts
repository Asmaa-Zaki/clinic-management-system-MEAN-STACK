import { Pipe, PipeTransform } from '@angular/core';
import { DoctorService } from '../Features/doctor.service';

@Pipe({
  name: 'filterbyDocname'
})
export class FilterbyDocnamePipe implements PipeTransform {

  transform(docList: Array<any>, search?: string): any {
    if (docList && search)
    {
     if(search)
      return docList.filter((doc)=>
      {
        return doc.doctorName == search
      })
    }
    return docList;
  }

}
