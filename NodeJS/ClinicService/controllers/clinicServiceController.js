const validationClinicService = require('../middleware/clinicServiceValidationMiddle');
const { Doctor } = require('../../Doctor/models/doctor');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const auth = require('../../JWT/jwtMiddleware');
//apointment
const { clinicService } = require('../models/clinicService');

//express
const express = require('express');

//router
const router = express.Router()

//-------------------------------------------Get List
//read
//localhost:3000/clinicService/
router.get('/', [auth.accessAll], async (req, res) => {
    const clinicServ = await clinicService.find();
    if (clinicServ) return res.send(clinicServ);
    return res.status(400).send('Not Found Any Record');

});

//-----------------------------------------------Get By ID
router.get('/:id', [auth.accessAll], async (req, res) => {

    const clinicServ = await clinicService.findById(req.params.id);

    if (!clinicServ) return res.status(404).send('The genre with the given ID was not found.');

    res.send(clinicServ);

})

//-----------------------------------------------Add
//create
router.post('/', [auth.checkAdmin], async (req, res) => {
    const { error } = validationClinicService(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    const doctor = await Doctor.findById(req.body.doctorId);
    if (!doctor) return res.status(400).send('Invalid doc Id');
    let clinic = new clinicService({
        _id: req.body._id,
        doctorId: {
            _id: doctor._id,
            doctorName: doctor.doctorName
        },
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    const check = await clinicService.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    clinic = await clinic.save();
    res.send(clinic);
})

//-----------------------------------------------Update
router.put('/:id', [auth.checkAdmin], async (req, res) => {
    //--------------Check Body Request
    const { error } = validationClinicService(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    const doctor = await Doctor.findById(req.body.doctorId);
    if (!doctor) return res.status(400).send('Invalid doc Id');
    let clinic = new clinicService({
        _id: req.body._id,
        doctorId: {
            _id: doctor._id,
            doctorName: doctor.doctorName
        },
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    const cs = clinicService.findByIdAndUpdate(req.body.id, { clinic }, { new: true });
    if (!cs) return res.status(400).send("Invalid Id ");
    res.send('Updated\t' + cs);
});

//-----------------------------------------------Delete
router.delete('/:id', [auth.checkAdmin], async (req, res) => {
    const clinicServ = await clinicService.findByIdAndRemove(req.params.id);

    if (!clinicServ) return res.status(404).send('The medicine with the given ID was not found.');

    res.send({ "DELETE FROM DB": clinicServ });
})

module.exports = router