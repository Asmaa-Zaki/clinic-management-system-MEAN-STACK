const { mongoose } = require('./db.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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

//call express 
var App = express();

//use middleware
App.use(bodyParser.json())
App.use(cors({ origin: 'http://localhost:4200' }));

//listen
App.listen(3000, () => {
    console.log("Server started at port: 3000")
})

App.use('/login', loginController);
App.use('/appointment', appointmentController);
App.use('/medicine', medicineController)
App.use('/invoice', Invoice);
App.use('/prescript', Prescription);
App.use('/doctor', doctorController);
App.use('/patient', patientController)
App.use('/employee', employeeController);
App.use('/users', userController);
App.use('/clinicService', clinicServiceController)