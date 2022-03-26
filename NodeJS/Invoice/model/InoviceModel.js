const mongoose = require('mongoose');
const { patientSchema } = require('../../Patient/models/patient');
const invoiceSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    patientId: {
        type: patientSchema
    },
    taxOfBill: {
        type: Number,
        required: true
    },
    dateOfBill: {
        type: Date,
        default: Date.now
    },
    payment: {
        type: String,
        enum: ['Cash', 'Credit Card'],
        default: 'Cash'
    }

});
const Invoice = mongoose.model('Invoice', invoiceSchema);

exports.Invoice = Invoice;
exports.invoiceSchema = invoiceSchema;