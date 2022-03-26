const validationuser = require('../middleware/userValidation');
const { Users } = require('../models/usersModel');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const { use, route } = require('../../Doctor/controllers/doctorController');
const router = express.Router();

//-------------------------Get List
router.get('/', async (req, res) => {
    const user = await Users.find(req.Users);
    if (!user) return res.status(400).send('Not found any row');
    return res.send(user);
});//end Get

//-------------------------------Get By Id
router.get('/:id', async (req, res) => {
    const user = await Users.findById(req.params.id).select('_id type');
    if (!user) return res.status(400).send('Invalid Id');
    res.send(user);

});//Enf Get By Id
//-------------------------------Post
router.post('/', async (req, res) => {
    const { error } = validationuser(req.body);
    if (error== true) return res.status(400).send(error.details[0].message);

    let user = new Users(_.pick(req.body, ['_id', 'username', 'password', 'type']));
    const check = await Users.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    user = await user.save();
    res.send(user);
});//End Post
//-----------------------------------Upadet
router.put('/:id', async (req, res) => {
    const { error } = validationuser(req.body);
    if (error== true) return res.status(400).send(error.details[0].message);
    // const check = await Users.findById(req.body._id);
    // if (check) return res.status(400).send('Invalid Id!');

    let user = new Users(_.pick(req.body, ['_id', 'username', 'password', 'type']));
    user = await Users.findById(req.params.id, { user }, { new: true });
    if (!user) return res.status(400).send('Invalid Id!');
    user = await user.save();
    res.send('Updated \t' + user);

});//End Put
router.delete('/:id', async (req, res) => {
    const user = await Users.findByIdAndRemove(req.params.id);
    if (!user) return res.status(400).send('Invalid Id');
    res.send('Deleted \t' + user);
});
module.exports = router;