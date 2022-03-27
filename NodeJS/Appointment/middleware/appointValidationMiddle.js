const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = function validationAppointment(req) {
    const schema = Joi.object({
        _id: Joi.number().required().min(1),
        doctorId: Joi.number().required().min(1),
        patientId: Joi.number().min(1),
        startTime: Joi.number().required().min(1).max(12),
        endTime: Joi.number().required().min(1).max(12),
        medicalSpecialty: Joi.string().max(100).required()
    });
    return schema.validate(req);
}
