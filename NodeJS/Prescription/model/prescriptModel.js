const mongoose = require('../../db.js');
const { doctorSchema } = require('../../Doctor/models/doctor');
const { patientSchema } = require('../../Patient/models/patient');
const { medicineSchema } = require('../../Medicine/models/medicine');

const prescriptSchema = mongoose.Schema({
    _id: {
        type: Number,

    },
    doctorId: {
        type: doctorSchema,

    },
    patientId: {
        type: patientSchema,

    },
    medicineId: {
        type: medicineSchema,
    },
    numberOfDoses: {
        type: String
    },
    dateOfPrescript: {
        type: String

    }
});
const Prescription = mongoose.model('Prescription', prescriptSchema);

exports.Prescription = Prescription;
exports.prescriptSchema = prescriptSchema;