import Joi from "joi";

export const annonceSchema = Joi.object({
    title: Joi.string().min(3).required().max(200),
    price: Joi.number().required(),
    city: Joi.string().min(3).max(150).required(),
    images: Joi.string().max(500)
})