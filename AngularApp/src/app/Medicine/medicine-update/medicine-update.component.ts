import { Component, Input, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/Features/medicine.service';
import { Medicine } from 'src/app/Module/medicine';

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
  styleUrls: ['./medicine-update.component.css']
})
export class MedicineUpdateComponent implements OnInit {
  @Input() medicinee: Medicine = new Medicine(0, "", "", "")
  
  constructor(private medService: MedicineService) { }

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
    },(error)=>alert(error))
  }

}
