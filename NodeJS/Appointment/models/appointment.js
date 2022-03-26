//mongoose
const mongoose = require('../../db.js')
const { doctorSchema } = require('../../Doctor/models/doctor')

//model schema
let appointment = mongoose.model('Appointment',
    {
        _id: { type: Number },
        doctorId: {
            type: doctorSchema,
            required: true
        },
        startTime: { type: Number },
        endTime: { type: Number },
        medicalSpecialty: { type: String },
    });

//export the appointment model
module.exports = { appointment }

