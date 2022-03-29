const { required } = require('joi')
const Joi = require('joi')
const { join } = require('lodash')

module.exports = function validationEmployee(req) {
    const schema = Joi.object({
        _id: Joi.number().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        phone: Joi.number().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        imageURL: join.string().required(),
        type: Joi.string().required()
    })
    return schema.validate(req)
}