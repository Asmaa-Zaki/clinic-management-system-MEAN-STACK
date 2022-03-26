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
  private updat: PrescriptionUpdateComponent=  new PrescriptionUpdateComponent(this.prescriptionService)

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
  }
  save() {
    this.prescriptionService.AddToList().subscribe((res) => {
      this.router.navigate(['admin/prescriptionList'])
    }, (error)=> alert(`this id ${this.prescriptionService.nPrescription._id} already exist`))
  }

  update()
  {
  if(this.nPres != undefined)
  {
    this.updat.SavePrescript(this.nPres)
    this.router.navigate(['admin/prescriptionList'])
  }
  }
}
