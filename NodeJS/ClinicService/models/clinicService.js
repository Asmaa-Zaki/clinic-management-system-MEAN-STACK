const mongoose = require('../../db.js');
const { doctorSchema } = require('../../Doctor/models/doctor');

//model schema
let clinicService = mongoose.model('ClinicService',
    {
        _id: { type: Number },
        doctorId: { type: doctorSchema, required: true },
        name: { type: String },
        description: { type: String },
        price: { type: Number }
    })

module.exports = { clinicService }