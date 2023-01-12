import * as Joi from 'joi';

export const bookCreateSchema = Joi.object().keys({
    title: Joi.string().min().required(),
    description:  Joi.string().min().required(),
    authors:Joi.string().optional(),
    favorite: Joi.string().min(18).required(),
    fileCover: Joi.string().optional()
});