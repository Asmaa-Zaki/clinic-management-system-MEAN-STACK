const { required } = require('joi')
const Joi = require('joi')

module.exports = function validationEmployee(req)
{
    const schema = Joi.object({
        _id: Joi.number().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.number().required(),
        userName: Joi.string().required(),
        password: Joi.string().required(),
        type: Joi.string().required()
    })
    return schema.validate(req)
}