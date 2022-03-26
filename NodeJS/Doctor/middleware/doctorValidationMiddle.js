const Joi = require('joi');

module.exports = function validationDoctor(req) {
    const schema = Joi.object({
        _id: Joi.number().required(),
        doctorName: Joi.string().required(),
        SSN: Joi.number().required(),
        phone: Joi.number().required(),
        address: Joi.string().required(),
        medicalSpecialty: Joi.string().max(100).required(),
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string().min(3)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        //,repeat_password: Joi.ref('password')
    });
    return schema.validate(req);
}
