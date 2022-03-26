const Joi = require("joi")

module.exports = function validationClinicService(req)
{
    const schema = Joi.object({
        _id: Joi.number().required(),
        doctorId: Joi.number().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required()
    })
    return schema.validate(req)
}