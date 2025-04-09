import Joi from "joi";

const signupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const validateSignup = (req, res, next) => {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: 400, message: error.details[0].message });
    }
    next();
};

export const validateLogin = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: 400, message: error.details[0].message });
    }
    next();
};