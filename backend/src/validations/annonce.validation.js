import Joi from "joi";

export const annonceSchema = Joi.object({
    title: Joi.string().min(3).required().max(200),
    price: Joi.number().required().positive().precision(2),
    city: Joi.string().min(3).max(150).required(),
    user_id: Joi.number(),
    category_id: Joi.number()
})