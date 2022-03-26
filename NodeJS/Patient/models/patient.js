//mongoose
const mongoose = require('../../db.js')

//model schema
const patientSchema = mongoose.Schema({
    _id: { type: Number },
    patientName: { type: String },
    SSN: { type: Number },
    phone: { type: Number },
    address: { type: String },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male'
    },
    insuranceId: { type: Number }
})
const patient = mongoose.model('Patient', patientSchema);

//export the model
exports.patient = patient
exports.patientSchema = patientSchema;

