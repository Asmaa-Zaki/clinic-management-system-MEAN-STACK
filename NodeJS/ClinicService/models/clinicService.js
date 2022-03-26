const mongoose = require('../../db.js')

//model schema
let clinicService= mongoose.model('ClinicService',
{
    _id: {type: Number},
    doctorId: {type:Number},
    name: {type: String},
    description: {type: String},
    price: {type: Number}
})

module.exports = {clinicService}