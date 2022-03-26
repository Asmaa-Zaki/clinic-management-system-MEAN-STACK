export class Prescription {
    constructor(public _id: number, public doctorId: number, public patientId: number, public medicineId: number, public numberOfDoses: string, public dateOfPrescript: Date) { }
}
