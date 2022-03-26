const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = function validationAppointment(req) {
    const schema = Joi.object({
        _id: Joi.number().required(),
        doctorId: Joi.number().required(),
        startTime: Joi.number().required(),
        endTime: Joi.number().required(),
        medicalSpecialty: Joi.string().max(100).required()
    });
    return schema.validate(req);
}
