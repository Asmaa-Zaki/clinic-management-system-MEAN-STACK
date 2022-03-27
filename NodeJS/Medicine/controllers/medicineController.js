const validationMedicine = require('../middleware/medicineValidationMiddle');
const _ = require('lodash');
const { medicine } = require('../models/medicine');
const auth = require('../../JWT/jwtMiddleware');
const express = require('express');
const router = express.Router();

//-------------------------------------------Get List
router.get('/', [auth.accessAll], async (req, res) => {
    const med = await medicine.find().select('-__v');
    if (med) return res.send(med);
    return res.status(400).send('Not Found Any Record');

});
//-----------------------------------------------Get By ID
router.get('/:id', [auth.accessAll], async (req, res) => {

    const med = await medicine.findById(req.params.id);

    if (!med) return res.status(404).send('The genre with the given ID was not found.');

    res.send(med);
});

//-----------------------------------------------Add
router.post('/', [auth.checkDoctor], async (req, res) => {
    const { error } = validationMedicine(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    let med = new medicine(_.pick(req.body, ['_id', 'medicineName', 'brand', 'description']));
    const check = await medicine.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    med = await med.save();
    res.send(med);
})

//-----------------------------------------------Update
router.put('/:id', [auth.checkDoctor], async (req, res) => {
    //--------------Check Body Request
    const { error } = validationMedicine(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    let newMedicine = new medicine({
        _id: req.params.id,
        medicineName: req.body.medicineName,
        brand: req.body.brand,
        description: req.body.description,
    })


    medicine.findByIdAndUpdate(req.params.id, { $set: newMedicine }, { new: true }, (err, doc) => {
        if (!err)
            res.send(doc)
        else
            console.log("Error in Medicine Update: " + JSON.stringify(err, undefined, 2))
    });
});

//-----------------------------------------------Delete
router.delete('/:id', [auth.checkDoctor], async (req, res) => {
    const med = await medicine.findByIdAndRemove(req.params.id);

    if (!med) return res.status(404).send('The medicine with the given ID was not found.');

    res.send({ "DELETE FROM DB\t": med });
})

module.exports = router