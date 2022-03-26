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
  
  nMedicine?:Medicine= new Medicine(0,"","","")
  private updat: MedicineUpdateComponent= new MedicineUpdateComponent(this.medicineService)
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
  }

  save()
  {
    this.medicineService.AddToList().subscribe((res)=>{
      this.router.navigate(['admin/medicineList'])
    },(error)=>{alert(`this id: ${this,this.medicineService.nMedicine._id} already exist`)})
  }

  update()
  {
    if(this.nMedicine != undefined)
    {
      this.updat.SaveMedicine(this.nMedicine)
      this.router.navigate(['admin/medicineList'])
    }
  }
}


