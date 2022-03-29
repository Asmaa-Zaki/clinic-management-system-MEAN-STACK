import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from 'src/app/Features/patient.service';
import { Patient } from 'src/app/Module/patient';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {
  @Input() patient: Patient = new Patient(0,"",0,0,"","","",0)
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
  }

  DeletePatient()
  {
    this.patientService.DeletePat(this.patient).subscribe((res)=>{
      alert("Patient with Id: "+this.patient._id+" Deleted")
    },(error)=>alert("Failed to delete this patient"))
  }

}
