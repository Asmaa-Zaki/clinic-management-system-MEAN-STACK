import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from '../../Module/prescription';
import { PrescriptionService } from './../../Features/prescription.service';

@Component({
  selector: 'app-prescription-update',
  templateUrl: './prescription-update.component.html',
  styleUrls: ['./prescription-update.component.css']
})
export class PrescriptionUpdateComponent implements OnInit {
  @Input() prescription: Prescription = new Prescription(0, 0, 0, 0, "", new Date('M/d/yy, h:mm a'))

  constructor(private prescriptionService: PrescriptionService, private router: Router) { }

  ngOnInit(): void {
  }

  EditPrescript() {
    console.log(this.prescription)
    this.prescriptionService.nPrescription = this.prescription
  }

  SavePrescript(pres: Prescription) {
    this.prescriptionService.Editprescript(pres).subscribe((res) => {
      alert(`Prescription with id ${this.prescription._id} updated`)
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
