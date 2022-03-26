const jwt = require('jsonwebtoken');
exports.accessAll = (req, res, next) => {
    const reqToken = req.header('x-auth-token');
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        if (decodedToken.type == 'Doctor' || decodedToken.type == 'Recipt' || decodedToken.type == 'Admin') {
            next();
        }
        else {
            res.status(400).send('Invalid Token!');
        }
    } catch (err) {
        res.status(400).send('Invalid Token!');
    }
}
exports.checkDoctor = (req, res, next) => {
    const reqToken = req.header('x-auth-token');
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        if (decodedToken.type == 'Doctor' || decodedToken.type == 'Admin') {
            next();
        }
        else {
            res.status(400).send('Invalid Token!');
        }

    }
    catch (ex) {
        res.status(400).send('Invalid Token!');
    }

}
exports.checkReceptionest = (req, res, next) => {
    const reqToken = req.header('x-auth-token');
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        console.log(PrivateTokenKey);
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        if (decodedToken.type == 'Recipt' || decodedToken.type == 'Admin') {
            next();
        }
        else {
            res.status(400).send('Invalid Token!');
        }

    }
    catch (ex) {
        res.status(400).send('Invalid Token!');
    }
}
exports.checkAdmin = (req, res, next) => {
    const reqToken = req.header('x-auth-token');
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        console.log(PrivateTokenKey);
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        if (decodedToken.type == 'Admin') {
            next();
        }
        else {
            res.status(400).send('Invalid Token!');
        }

    }
    catch (ex) {
        res.status(400).send('Invalid Token!');
    }
}