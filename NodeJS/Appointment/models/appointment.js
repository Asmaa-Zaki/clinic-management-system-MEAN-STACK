//mongoose
const mongoose = require('../../db.js')
const { doctorSchema } = require('../../Doctor/models/doctor')
const { patientSchema } = require('../../Patient/models/patient');

const appointmentSchema = mongoose.Schema({
    _id: { type: Number },
    doctorId: {
        type: doctorSchema,
        required: true
    },
    patientId: {
        type: patientSchema,
        required: true
    },
    startTime: { type: Number },
    endTime: { type: Number },
    medicalSpecialty: { type: String },
});
//model schema
let appointment = mongoose.model('Appointment', appointmentSchema)

//export the appointment model
module.exports = { appointment }

