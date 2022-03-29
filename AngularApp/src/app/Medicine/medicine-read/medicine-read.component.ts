import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from 'src/app/Features/medicine.service';
import { Medicine } from 'src/app/Module/medicine';

@Component({
  selector: 'app-medicine-read',
  templateUrl: './medicine-read.component.html',
  styleUrls: ['./medicine-read.component.css']
})
export class MedicineReadComponent implements OnInit {
  searchValue?: string
  direction: string=''
  column: string=''
  type: string=''

  constructor(public medicineService: MedicineService, private router: Router) { }

  ngOnInit(): void {
    this.show()
  }
  
show()
{
  this.medicineService.GetList().subscribe((res) => {
  this.medicineService.MedicineList = res as Medicine[];
  }, (error)=> {
    if(error instanceof HttpErrorResponse)
    {
      if(error.status === 403)
      {
        alert("U don't have permission")
        this.router.navigate(['forbidden'])
      }
    }
  })
}

sortIdAsc()
{
  this.direction='asc'
  this.column='_id'
  this.type='number'
}

sortIdDesc()
{
  this.direction='desc'
  this.column='_id'
  this.type='number'
}

sortNameAsc()
{
  this.direction='asc'
  this.column='name'
  this.type='string'
}

sortNameDesc()
{
  this.direction='desc'
  this.column='name'
  this.type='string'
}

sortBrandAsc()
{
  this.direction='asc'
  this.column='brand'
  this.type='string'
}

sortBrandDesc()
{
  this.direction='desc'
  this.column='brand'
  this.type='string'
}

sortDescAsc()
{
  this.direction='asc'
  this.column='description'
  this.type='string'
}

sortDescDesc()
{
  this.direction='desc'
  this.column='description'
  this.type='string'
}
}
