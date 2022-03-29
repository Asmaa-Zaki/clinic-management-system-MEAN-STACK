import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/Features/medicine.service';
import { Medicine } from 'src/app/Module/medicine';
import { MedicineUpdateComponent } from '../medicine-update/medicine-update.component';

@Component({
  selector: 'app-medicine-create',
  templateUrl: './medicine-create.component.html',
  styleUrls: ['./medicine-create.component.css']
})
export class MedicineCreateComponent implements OnInit {
  type: any
  path=""
  data:any
  nMedicine?:Medicine= new Medicine(0,"","","")
  private updat: MedicineUpdateComponent= new MedicineUpdateComponent(this.medicineService,this.router)
  constructor(public medicineService: MedicineService,public router: Router, public ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((r)=>{
      this.nMedicine= this.medicineService.MedicineList.find((med)=>{
        return med._id== r['id']
      })
      if(this.nMedicine != undefined)
      {
        this.medicineService.nMedicine= this.nMedicine
      }
    })

    this.data= JSON.parse(localStorage.getItem("data")||'{}') 
    this.type= this.data.data.type
    if(this.type== "admin")
    {
      this.path= "admin/medicineList"
    }
    else if(this.type== "Recpt")
    {
      this.path= "recept/medicineList"
    }
    else
    {
      this.path= "doctor/medicineList"
    }
  }

  save()
  {
    this.medicineService.AddToList().subscribe((res)=>{
      this.router.navigate([this.path])
    }, (error)=> {
      if(error instanceof HttpErrorResponse)
      {
        if(error.status === 403)
        {
          alert("U don't have permission")
          this.router.navigate(['forbidden'])
        }
        else if(error.status === 400)
        {alert("this Id already exist")}
      }
    })
  }

  update()
  {
    if(this.nMedicine != undefined)
    {
      this.updat.SaveMedicine(this.nMedicine)
      this.router.navigate([this.path])
    }
    else
    {
      this.router.navigate([this.path])
    }
  }
}


