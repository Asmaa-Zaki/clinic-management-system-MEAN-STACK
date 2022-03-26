//connect to mongodb
const { json } = require('body-parser');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ClinicDB', (err)=>
{
    if(!err)
        console.log("MongoDB connection Succeded")
    else
        console.log("MongoDB connection Failed"+ JSON.stringify(err,undefined,2))
});

//export mongoose
module.exports = mongoose;