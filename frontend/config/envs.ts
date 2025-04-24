import Joi from 'joi';
import Constants from 'expo-constants';

const envSchema = Joi.object({
    API_URL: Joi.string().uri().required(),
}).unknown(true); 

const envVars = Constants.expoConfig?.extra || {};

const { error, value: validatedEnv } = envSchema.validate(envVars);

if (error) {
    throw new Error(`Environment variable validation error: ${error.message}`);
}

export const API_URL = validatedEnv.API_URL;