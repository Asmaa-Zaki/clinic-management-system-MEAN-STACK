const validationDoctor = require('../middleware/doctorValidationMiddle');
//const validationMedicine = require('../middleware/medicineValidationMiddle');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { Doctor } = require('../models/doctor');
const express = require('express');
const router = express.Router()

//-------------------------------------------Get List
//read
//localhost:3000/doctor/
router.get('/', async (req, res) => {
    const doc = await Doctor.find();
    if (doc) return res.send(doc);
    return res.status(400).send('Not Found Any Record');
    // appointment.find((err, docs) => {
    //     if (!err)
    //         res.send(docs)
    //     else
    //         console.log("Error in Retriving Appointments : " + JSON.stringify(err, undefined, 2))
    // })
});

//-----------------------------------------------Get By ID
router.get('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    const doc = await Doctor.findById(req.params.id);

    if (!doc) return res.status(404).send('The genre with the given ID was not found.');

    res.send(doc);

})

//-----------------------------------------------Add
//create
router.post('/', async (req, res) => {
    const { error } = validationDoctor(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let doc = new Doctor(_.pick(req.body, ['_id', 'doctorName', 'SSN', 'phone',
        'address', 'medicalSpecialty', 'username', 'password']));
    //check id if  it found or not -- هنا بشوف ال متسجل قبل كده ولا لا(id)
    //👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯
    const check = await Doctor.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    doc = await doc.save();
    res.send(doc);
})


//-----------------------------------------------Update
router.put('/:id', (req, res) => {
    //--------------Check Body Request
    const { error } = validationDoctor(req.body);
    if (error==true) return res.status(400).send(error.details[0].message);

    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    var newDoctor = new Doctor({
        _id: req.params.id,
        doctorName: req.body.doctorName,
        SSN: req.body.SSN,
        phone: req.body.phone,
        address: req.body.address,
        medicalSpecialty: req.body.medicalSpecialty,
        username: req.body.username,
        password: req.body.password
    })


    Doctor.findByIdAndUpdate(req.params.id, { $set: newDoctor }, { new: true }, (err, doc) => {
        if (!err)
            res.send(doc)
        else
            console.log("Error in Doctor Update: " + JSON.stringify(err, undefined, 2))
    })
    // res.send(newAppointment)
})


//-----------------------------------------------Delete
router.delete('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    const doc = await Doctor.findByIdAndRemove(req.params.id);

    if (!doc) return res.status(404).send('The genre with the given ID was not found.');

    res.send("DELETE FROM DB\t" + doc);
})

module.exports = router