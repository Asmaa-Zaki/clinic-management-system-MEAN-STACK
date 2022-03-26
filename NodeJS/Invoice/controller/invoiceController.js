const mongoose = require('mongoose');
const validationIncvoice = require('../middleware/invoiceMiddleware');
const { Invoice } = require('../model/InoviceModel');
const { patient } = require('../../Patient/models/patient');
const express = require('express');
const router = express.Router();

//--------------------------------------Get List
router.get('/', async (req, res) => {
    const invoice = await Invoice.find()
    res.send(invoice);
});//End Get

//--------------------------------------Get By Id
router.get('/:id', async (req, res) => {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) return res.status(400).send("Invalid Id");
});// End Gert ID

//--------------------------------------Add
router.post('/', async (req, res) => {
    const pat = await patient.findById(req.body.patientId);
    if (!pat) return res.status(400).send('Invalid patient Id');

    const { error } = validationIncvoice(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);
    console.log("enter");
    let invoice = new Invoice({
        _id: req.body._id,
        patientId: {
            _id: pat._id,
            patientName: pat.patientName
        },
        taxOfBill: req.body.taxOfBill,
        dateOfBill: req.body.dateOfBill
    });
    const checkPassword = await Invoice.findById(req.body._id);
    if (checkPassword) return res.status(400).send("This Id already registred");
    invoice = await invoice.save();
    res.send(invoice);
});//end ofAdd

//--------------------------------------Update
router.put('/:id', async (req, res) => {
    const pat = await patient.findById(req.body.patientId);
    if (!pat) return res.status(400).send('Invalid Id');

    const { error } = validationIncvoice(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    const invoice = await Invoice.findByIdAndUpdate(req.params.id, {
        _id: req.body._id,
        patientId: {
            _id: pat._id,
            patientName: pat.patientName
        },
        taxOfBill: req.body.taxOfBill,
        dateOfBill: req.body.dateOfBill
    }, { new: true });

    if (!invoice) return res.status(400).send('Invalid Invoice Id');
    res.send({"Updated  \t" : invoice});

});//end App

//--------------------------------------Delete
router.delete('/:id', async (req, res) => {
    const invoice = await Invoice.findByIdAndRemove(req.params.id);
    if (!invoice) return res.status(400).send("Invalid ID");
    res.send({"Deleted \t" : invoice});
});
module.exports = router;