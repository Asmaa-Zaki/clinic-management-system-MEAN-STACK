import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyPrescript'
})
export class FilterbyPrescriptPipe implements PipeTransform {

  transform(PrescriptList: Array<any>, search?: string): any {
    if (PrescriptList && search) {
      if (search)
        return PrescriptList.filter((prescript) => {
          return prescript.numberOfDoses == search
        })
    }
    return PrescriptList;
  }

}
