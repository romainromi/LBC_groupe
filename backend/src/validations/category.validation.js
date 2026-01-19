import Joi from "joi";

export const categoryModel = Joi.object({
    name:Joi.string().min(3).max(100).required()
})