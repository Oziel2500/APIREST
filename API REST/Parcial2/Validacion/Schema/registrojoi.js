const joi = require('joi');

module.exports = {
    registroSchema: joi.object({
        usuario: joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    confirmar_password: joi.ref('password'),

    nombre: joi.string().required(),

    edad: joi.number()
             .integer()
             .min(0)
             .max(150)
             .required(),

    calle: joi.string().required(),
    ciudad: joi.string().required(),

    correo: joi.string().required()
        .email({minDomainSegments: 2, tlds: {allow: ['com','net']}})
        .required(),

    fecha_registro: joi.date().iso().required(),
    }),
};