import { Component, Input, OnInit } from '@angular/core';
import { Prescription } from 'src/app/Module/prescription';
import { PrescriptionService } from './../../Features/prescription.service';
@Component({
  selector: 'app-prescription-delete',
  templateUrl: './prescription-delete.component.html',
  styleUrls: ['./prescription-delete.component.css']
})
export class PrescriptionDeleteComponent implements OnInit {
  @Input() prescription: Prescription = new Prescription(0, 0, 0, 0, "", new Date('M/d/yy, h:mm a'))
  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
  }
  DeletePrescription() {
    this.prescriptionService.Deleteprescript(this.prescription).subscribe((res) => {
      alert(`Prescription with Id: ${this.prescription._id} deleted`)
    }, (error)=> alert(`Prescription with Id: ${this.prescription._id} isn't exist to delete it`))
  }
}
