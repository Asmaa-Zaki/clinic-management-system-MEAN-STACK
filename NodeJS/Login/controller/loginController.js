const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const { Doctor } = require('../../Doctor/models/doctor');
const { employee } = require('../../Employee/models/employee');
const { Login } = require('../model/loginModel');
const validationLogin = require('../middleware/loginValidation');

const express = require('express');
const router = express.Router();
router.post('/', async (req, res, next) => {
    //------------------Check username
    if (req.body.type == 'doctor') {
        //------------------Check username
        let userDoc = await Doctor.findOne({ username: req.body.username });
        if (!userDoc) return res.status(400).send('Invalid doc UserName or Password');
        //------------------Check Password
        if (userDoc.password != req.body.password)
            return res.status(400).send('Invalid doc UserName or Password');
        //creeate token
        const token = jwt.sign({ _id: this._id, type: "Doctor" }, 'PrivateTokenKey');
        res.status(200).send({ token: token, data: userDoc });
    }
    else {
        //------------------Check username
        // let userEmp = 
        let userEmp = await employee.findOne({ username: req.body.username });
        if (!userEmp) return res.status(400).send('Invalid Emp wwUserName or Password');

        //------------------Check Password
        if (userEmp.password != req.body.password) {
            console.log(userEmp.password);
            return res.status(400).send('Invalid Emp qqUserName or Password');
        } else {
            if (req.body.type == 'Admin') {
                const token = jwt.sign({ _id: this._id, type: "Admin" }, 'PrivateTokenKey');
                res.status(200).send({ token: token, data: userEmp });
            }
            else {
                const token = jwt.sign({ _id: this._id, type: "Recipt" }, 'PrivateTokenKey');
                res.status(200).send({ token: token, data: userEmp });
            }
        }
    }
});
module.exports = router;

