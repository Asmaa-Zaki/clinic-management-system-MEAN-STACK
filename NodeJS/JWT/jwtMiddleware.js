const jwt = require('jsonwebtoken');

exports.accessAll = (req, res, next) => {
    const reqToken = req.headers.authorization.split(' ')[1];
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        if (decodedToken.type == 'Doctor' || decodedToken.type == 'Recipt' || decodedToken.type == 'Admin') {
            next();
        }
        else {
            res.status(403).send('Invalid Token!');
        }
    } catch (err) {
        res.status(403).send('Invalid Token!');
    }
}
exports.checkDoctor = (req, res, next) => {
    //const reqToken = req.header('x-auth-token');
    const reqToken = req.headers.authorization.split(' ')[1];
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        if (decodedToken.type == 'Doctor' || decodedToken.type == 'Admin') {
            next();
        }
        else {
            res.status(403).send('Invalid Token!');
        }

    }
    catch (ex) {
        res.status(403).send('Invalid Token!');
    }

};
exports.checkDoctorOnly = (req, res, next) => {
   // const reqToken = req.header('x-auth-token');
   const reqToken = req.headers.authorization.split(' ')[1];
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        if (decodedToken.type == 'Doctor') {
            next();
        }
        else {
            res.status(403).send('Invalid Token!');
        }

    }
    catch (ex) {
        res.status(403).send('Invalid Token!');
    }

};
exports.checkReceptionest = (req, res, next) => {
    console.log("ddd");
   // const reqToken = req.header('x-auth-token');
   const reqToken = req.headers.authorization.split(' ')[1];
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {

        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        console.log(decodedToken.type)
        if (decodedToken.type == 'Recipt' || decodedToken.type == 'Admin') {
            next();
        }
        else {
            console.log("ddd");
            res.status(403).send('Invalid Token!');
        }

    }
    catch (ex) {
        console.log("هييddd");
        res.status(403).send('Invalid Token!');
    }
}
exports.checkAdmin = (req, res, next) => {
    // const reqToken = req.header('x-auth-token');
    const reqToken = req.headers.authorization.split(' ')[1];
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        console.log(decodedToken.type)
        if (decodedToken.type == 'Admin') {
            next();
        }
        else {
            res.status(403).send('Invalid Token!');
        }

    }
    catch (ex) {
        res.status(403).send('Invalid Token!');
    }
}
