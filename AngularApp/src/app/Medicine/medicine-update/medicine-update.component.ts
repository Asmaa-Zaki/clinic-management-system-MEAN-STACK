import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from 'src/app/Features/medicine.service';
import { Medicine } from 'src/app/Module/medicine';

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
  styleUrls: ['./medicine-update.component.css']
})
export class MedicineUpdateComponent implements OnInit {
  @Input() medicinee: Medicine = new Medicine(0, "", "", "")
  
  constructor(private medService: MedicineService, private router: Router) { }

  ngOnInit(): void {
  }

  EditMedicine()
  {
    this.medService.nMedicine=this.medicinee
  }

  SaveMedicine(med:Medicine)
  {
    this.medService.EditMedicine(med).subscribe((res)=>{
      alert("updated")
    }, (error)=> {
      if(error instanceof HttpErrorResponse)
      {
        if(error.status === 403)
        {
          alert("U don't have permission")
          this.router.navigate(['forbidden'])
        }
        else if(error.status === 400)
        {alert("not exist")}
      }
    })
  }

}
