import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "name must have at least 3 characters please!",
        "string.max": "name must be less than 21 characters please!",
        "any.required": "name is required", //para cuando NO se envía el dato
        "string.empty": "name is required"  //para cuando se envía VACÍO
    }),
    mail: joi.string().required().min(10).max(30).messages({
        'string.min': "mail must have at least 10 characters please!",
        "string.max": "mail must be less than 31 characters please!",
        "any.required": "mail is required", //para cuando NO se envía el dato
        "string.empty": "mail is required"  //para cuando se envía VACÍO
    }),
    password: joi.string().required().min(3).max(20).messages({
        'string.min': "password must have at least 3 characters please!",
        "string.max": "password must be less than 21 characters please!",
        "any.required": "password is required", //para cuando NO se envía el dato
        "string.empty": "password is required"  //para cuando se envía VACÍO
    }),
    country: joi.string().required().min(3).max(20).messages({
        'string.min': "country must have at least 3 characters please!",
        "string.max": "country must be less than 21 characters please!",
        "any.required": "country is required", //para cuando NO se envía el dato
        "string.empty": "country is required"  //para cuando se envía VACÍO
    }),
    lastName: joi.string().min(3).max(20).empty("").messages({
        'string.min': "last name must have at least 3 characters please!",
        "string.max": "last name must be less than 21 characters please!",
    }),
    photo: joi.string().min(3).max(50).empty("").messages({
        'string.min': "Photo Url must have at least 3 characters please!",
        "string.max": "Photo Url must be less than 21 characters please!",
    })
})

export default registerSchema
