const Joi = require('joi');

module.exports = function validationMedicine(req) {
    const schema = Joi.object({
        _id: Joi.number().required(),
        medicineName: Joi.string().required(),
        brand: Joi.string().required(),
        description: Joi.string().required()
    });
    return schema.validate(req);
}