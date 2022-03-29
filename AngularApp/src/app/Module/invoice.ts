export class Invoice {
    constructor(public _id: number, public patientId: any, public taxOfBill: number, public dateOfBill: Date = new Date(),
        public payment: string) { }
}
