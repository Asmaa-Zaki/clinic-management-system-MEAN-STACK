const validationClinicService = require('../middleware/clinicServiceValidationMiddle');
const _ = require('lodash');
const bcrypt = require('bcrypt');
//apointment
const { clinicService } = require('../models/clinicService');

//express
const express = require('express');

//router
const router = express.Router()

//-------------------------------------------Get List
//read
//localhost:3000/clinicService/
router.get('/', async (req, res) => {
    const clinicServ = await clinicService.find();
    if (clinicServ) return res.send(clinicServ);
    return res.status(400).send('Not Found Any Record');

});

//-----------------------------------------------Get By ID
router.get('/:id', async (req, res) => {

    if (!req.params.id)
    return res.status(400).send("No record given with id: " + req.params.id)

    const clinicServ = await clinicService.findById(req.params.id);

    if (!clinicServ) return res.status(404).send('The genre with the given ID was not found.');

    res.send(clinicServ);

})

//-----------------------------------------------Add
//create
router.post('/', async (req, res) => {
    const { error } = validationClinicService(req.body);
    if (error== true) return res.status(400).send(error.details[0].message);

    let clinicServ = new clinicService(_.pick(req.body, ['_id', 'doctorId', 'name', 'description','price']));
    //check id if  it found or not -- هنا بشوف ال متسجل قبل كده ولا لا(id)
    //👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯
    const check = await clinicService.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    clinicServ = await clinicServ.save();
    res.send(clinicServ);
})

//-----------------------------------------------Update
router.put('/:id', async (req, res) => {
    //--------------Check Body Request
    const { error } = validationClinicService(req.body);
    if (error==true) return res.status(400).send(error.details[0].message);

    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    let newClinicService = new clinicService({
        _id: req.params.id,
        doctorId: req.body.doctorId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })


    clinicService.findByIdAndUpdate(req.params.id, { $set: newClinicService }, { new: true }, (err, doc) => {
        if (!err)
            res.send(doc)
        else
            console.log("Error in clinicService Update: " + JSON.stringify(err, undefined, 2))
    })
});

//-----------------------------------------------Delete
router.delete('/:id', async (req, res) => {
    const clinicServ = await clinicService.findByIdAndRemove(req.params.id);

    if (!clinicServ) return res.status(404).send('The medicine with the given ID was not found.');

    res.send({"DELETE FROM DB" : clinicServ});
})

module.exports = router