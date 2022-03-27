const validationPatient = require('../middleware/patientValidationMiddle');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { patient } = require('../models/patient');
const auth = require('../../JWT/jwtMiddleware');
const express = require('express');
const router = express.Router()

//-------------------------------------------Get List
router.get('/', [auth.checkReceptionest], async (req, res) => {
    const pat = await patient.find();
    if (pat) return res.send(pat);
    return res.status(400).send('Not Found Any Record');

});

//-----------------------------------------------Get By ID
router.get('/:id', [auth.accessAll], async (req, res) => {
    const pat = await patient.findById(req.params.id);

    if (!pat) return res.status(404).send('The genre with the given ID was not found.');

    res.send(pat);

})

//-----------------------------------------------Add
//create
router.post('/', [auth.checkReceptionest], async (req, res) => {
    const { error } = validationPatient(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    let pat = new patient(_.pick(req.body, ['_id', 'patientName', 'SSN', 'phone',
        'address', 'gender', 'insuranceId']));
    const check = await patient.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    pat = await pat.save();
    res.send(pat);
})


//-----------------------------------------------Update
router.put('/:id', [auth.checkReceptionest], (req, res) => {
    //--------------Check Body Request
    const { error } = validationPatient(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    var newPatient = new patient({
        _id: req.params.id,
        patientName: req.body.doctorName,
        SSN: req.body.SSN,
        phone: req.body.phone,
        address: req.body.address,
        gender: req.body.gender,
        insuranceId: req.body.insuranceId
    })


    patient.findByIdAndUpdate(req.params.id, { $set: newPatient }, { new: true }, (err, pat) => {
        if (!err)
            res.send(pat)
        else
            console.log("Error in Patient Update: " + JSON.stringify(err, undefined, 2))
    });
})


//-----------------------------------------------Delete
router.delete('/:id', [auth.checkReceptionest], async (req, res) => {

    const pat = await patient.findByIdAndRemove(req.params.id);

    if (!pat) return res.status(404).send('The genre with the given ID was not found.');

    res.send({ "DELETE FROM DB\t": pat });
})

module.exports = router