//mongoose
const mongoose = require('../../db.js')

//model schema 
let employee = mongoose.model('Employee',
{
    _id: {type: Number},
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    phone: {type: Number},
    userName: {type: String},
    password: {type: String},
    imageURL: {type: String},
    type: {type: String}
})

//export the employee model
module.exports = {employee}