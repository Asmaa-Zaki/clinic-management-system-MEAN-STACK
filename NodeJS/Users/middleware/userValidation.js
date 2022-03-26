const Joi = require('joi');

module.exports = function validationUser(req) {
    const schema = Joi.object({
        _id: Joi.number().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        type: Joi.string().required()
    });
    return schema.validate(req);
}