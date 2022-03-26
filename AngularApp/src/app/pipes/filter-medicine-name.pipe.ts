import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMedicineName'
})
export class FilterMedicineNamePipe implements PipeTransform {

  transform(medicineList: Array<any>, search?:string): any {
    if(medicineList && search)
    {
      if(search)
      return medicineList.filter((med)=>{
        return med.name == search
      })
    }
    return medicineList
  }

}
