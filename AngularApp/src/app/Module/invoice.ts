export class Invoice {
    constructor(public _id: number,
        public patientId: number,
        public taxOfBill: number,
        public dateOfBill: Date = new Date()) { }
}
