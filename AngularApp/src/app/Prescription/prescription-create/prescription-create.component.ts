import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Prescription } from '../../Module/prescription';
import { PrescriptionUpdateComponent } from '../prescription-update/prescription-update.component';
import { PrescriptionService } from './../../Features/prescription.service';

@Component({
  selector: 'app-prescription-create',
  templateUrl: './prescription-create.component.html',
  styleUrls: ['./prescription-create.component.css']
})
export class PrescriptionCreateComponent implements OnInit {

  constructor(public prescriptionService: PrescriptionService,public router: Router, public ar: ActivatedRoute) { }
  nPres?: Prescription= new Prescription(0, 0, 0, 0, "", new Date())
  private updat: PrescriptionUpdateComponent=  new PrescriptionUpdateComponent(this.prescriptionService, this.router)
  type:any
  data:any
  path=""
  ngOnInit(): void {
    this.ar.params.subscribe((r)=>{
      this.nPres= this.prescriptionService.PrescriptList.find((pres)=>{
        return pres._id == r['id']
      })
      if(this.nPres != undefined)
      {
        this.prescriptionService.nPrescription = this.nPres
      }
    })
    this.data= JSON.parse(localStorage.getItem("data")||'{}') 
    this.type= this.data.data.type
    if(this.type== "admin")
    {
      this.path= "admin/prescriptionList"
    }
    else if(this.type== "Recpt")
    {
      this.path= "recept/prescriptionList"
    }
    else
    {
      this.path= "doctor/prescriptionList"
    }
  }

  save() {
    this.prescriptionService.AddToList().subscribe((res) => {
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
  if(this.nPres != undefined)
  {
    this.updat.SavePrescript(this.nPres)
    this.router.navigate([this.path])
  }
  }
}
