//mongoose
const mongoose = require('../../db.js')

//model schema
const doctorSchema = mongoose.Schema({
    _id: { type: Number },
    doctorName: { type: String },
    SSN: { type: Number },
    phone: { type: Number },
    address: { type: String },
    medicalSpecialty: { type: String },
    username: { type: String },
    password: { type: String }

});
const Doctor = mongoose.model('Doctor', doctorSchema);

//export the model
exports.Doctor = Doctor;
exports.doctorSchema = doctorSchema;

