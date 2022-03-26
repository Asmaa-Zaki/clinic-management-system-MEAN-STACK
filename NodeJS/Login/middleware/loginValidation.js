const Joi = require('joi');
module.exports = function validateLogin(login) {
    const schema = Joi.object({
        username: Joi.string().required().email(),
        password: Joi.string().min(10).max(50),
        type: Joi.string()
    });
    return schema.validate(login);
}