const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const reqToken = req.header('x-auth-token');
    if (!reqToken) {
        return res.status(401).send('Access rejected');
    }
    try {
        const decodedToken = jwt.verify(reqToken, 'PrivateTokenKey');
        req.register = decodedToken;
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid Token!');
    }

}