//mongoose
const mongoose = require('../../db.js')

//model schema
const medicineSchema = mongoose.Schema({
    _id: {
        type: Number,
       // required: true
    }
    ,
    medicineName: {
        type: String,
        //required: true
    }
    ,
    brand: {
        type: String
    }
    ,
    description: {
        type: String
    }
});
const medicine = mongoose.model('Medicine', medicineSchema)
//export the medicine model
exports.medicine = medicine;
exports.medicineSchema = medicineSchema;
