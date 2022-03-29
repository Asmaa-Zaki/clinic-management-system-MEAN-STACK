const { mongoose } = require('./db.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path= require('path')
var multer = require('multer');

// var patient = patientSchema.find({});
// var uploadModel= require('./Patient/Upload.js');
//controller
const doctorController = require('./Doctor/controllers/doctorController');
const patientController = require('./Patient/controllers/patientController');
const appointmentController = require('./Appointment/controllers/apointmentController.js')
const Prescription = require('./Prescription/controller/prescriptionController');
const Invoice = require('./Invoice/controller/invoiceController');
const medicineController = require('./Medicine/controllers/medicineController.js');
const userController = require('./Users/controllers/userController');
const employeeController = require('./Employee/controllers/employeeController.js')
const clinicServiceController = require('./ClinicService/controllers/clinicServiceController');
const loginController = require('./Login/controller/loginController');
const router = require('./Doctor/controllers/doctorController');
const { patientSchema } = require('./Patient/models/patient.js');
const { required } = require('joi');
// const {UploadSchema} = required('./Patient/Upload.js');

//call express 
var App = express();

//use middleware
App.use(bodyParser.json())
App.use(cors({ origin: 'http://localhost:4200' }));

//listen
App.listen(3000, () => {
    console.log("Server started at port: 3000")
})

var upload = multer ({storage : storage}).single('file');
var storage = multer.diskStorage({
       destination:"./public/uploads/" , 
       filename:(req,file,cb)=>{
        cb(null, file, filename+"_"+Date.now()+path.extname(file.originalname))
       }
});


router.post('/Upload', upload, function(req,res)
{
    var imageFile= req.file.filename;
     var success= req.file.filename+"uploaded successfully";
    
         var imageDetails= new uploadModel({
             imageURL: imageFile

         });
         imageDetails.save(function(err,doc)
         {
            if(err) throw err;
             res.render('upload-file',{title:'Upload File', success:success})
         }
         )
});
// router.get('/upload', function(req,res){

// });


App.use('/login', loginController);
App.use('/appointment', appointmentController);
App.use('/medicine', medicineController)
App.use('/invoice', Invoice);
App.use('/prescript', Prescription);
App.use('/doctor', doctorController);
App.use('/patient', patientController)
App.use('/employee', employeeController);
App.use('/users', userController);
App.use('/clinicService', clinicServiceController);
// App.use('/Upload', )
