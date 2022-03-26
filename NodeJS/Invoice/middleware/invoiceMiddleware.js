const Joi = require('joi');

module.exports = function validationInvoice(req) {
    const schema = Joi.object({
        _id: Joi.number().required(),
        patientId: Joi.number().required(),
        taxOfBill: Joi.number().required(),
        dateOfBill: Joi.date().required(),
        payment: Joi.string().valid('Cash', 'Credit Card')
    })
    return schema.validate(req);
};
