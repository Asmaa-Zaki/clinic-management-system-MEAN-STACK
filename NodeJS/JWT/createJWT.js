const jwt = require('jsonwebtoken');
registerSchema.methods.generateToken = function () {
    const idtoken = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, 'PrivateTokenKey');
    return idtoken;
}