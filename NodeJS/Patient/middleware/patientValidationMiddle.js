const Joi = require('joi');

module.exports = function validationPatient(req) {
    const schema = Joi.object({
        _id: Joi.number().required(),
        patientName: Joi.string().required(),
        SSN: Joi.number().required(),
        phone: Joi.number().required(),
        address: Joi.string().required(),
        gender: Joi.string().required(),
        insuranceId: Joi.number().required()
    });
    return schema.validate(req);
}
