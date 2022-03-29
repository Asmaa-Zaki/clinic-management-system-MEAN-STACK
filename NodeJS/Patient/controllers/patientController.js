const validationPatient = require('../middleware/patientValidationMiddle');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const { patient } = require('../models/patient');
const auth = require('../../JWT/jwtMiddleware');
const express = require('express');
const { countBy } = require('lodash');
const { path } = require('express/lib/application');
const router = express.Router()
var multer = require('multer');

//multer
// var multer = require('multer');
// var storage = multer.diskStorage({
//     destination:(req,file,cb) => {
//         cb(null, './public/images' );
//     },
//     filename: (req, file , cb) => {

//         console.log(file);

//         var filetype= '';
//         if(file.mimetype === 'image/gif')
//         {
//             filetype ='gif';
//         }
//         if(file.mimetype === 'image/png')
//         {
//             filetype ='png';
//         }
//         if(file.mimetype === 'image/jpeg')
//         {
//             filetype ='jpg';
//         }
//         cb(null, 'image' + Date.now() + '.' + filetype);
//     }

// });

// var upload = multer ({storage : storage});

// var upload = multer({
//     storage:Storage
// }).single('file');


// var upload = multer ({storage : storage}).single('file');
// var storage = multer.diskStorage({
//        destination:"./public/uploads/" , 
//        filename:(req,file,cb)=>{
//         cb(null, file, filename+"_"+Date.now()+path.extname(file.originalname))
//        }
// });

//-------------------------------------------Get List
router.get('/', [auth.accessAll], async (req, res) => {
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
    // router.post('/', upload.single('file') ,async (req, res) => {
        //  router.post('/' ,async (req, res) => {
       //multer Middleware
        // if(!req.file){
        //     return res.status(500).send({message: 'Upload fail'});
        // }
        // else{
        //     req.body.imageURL='http://192.168.0.7:3000/images/' + req.file.filename;            
        // }
    const { error } = validationPatient(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    let pat = new patient(_.pick(req.body, ['_id', 'patientName', 'SSN', 'phone',
        'address', 'gender','imageURL', 'insuranceId']));
  
    const check = await patient.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    pat = await pat.save();
    res.send(pat);
});


//-----------------------------------------------Update
router.put('/:id', [auth.checkReceptionest], (req, res) => {
    // router.put('/:id', (req, res) => {
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
        imageURL: req.body.imageURL,
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