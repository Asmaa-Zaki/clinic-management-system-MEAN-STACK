import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortComponent'
})
export class SortComponentPipe implements PipeTransform {

  transform(items: any, direction: string, column: string, type: string) {
    let sortedItems = [];
    sortedItems = direction === "asc" ?
      this.sortAscending(items, column, type) :
      this.sortDescending(items, column, type)
    return sortedItems;
  }
  sortAscending(items: any, column: string, type: string) {
    return items.sort(function(a: any, b: any) {
      if (type === "string"  && a[column].toUpperCase() < b[column].toUpperCase()) 
      {
        return -1;
      }
      else if(type === "string"  && a[column].toUpperCase() >= b[column].toUpperCase())
      {
        return;
      }
      else 
      {
        return a[column] - b[column];
      }
    })
  }
  sortDescending(items: any, column: any, type: any) {
    return items.sort(function (a: any, b: any) {
      if (type === "string"  && a[column].toUpperCase() > b[column].toUpperCase()) 
      {
        return -1;
      }
      else if(type === "string"  && a[column].toUpperCase() <= b[column].toUpperCase())
      {
        return;
      }
      else 
      {
        return b[column] - a[column];
      }
    })
  }
}
