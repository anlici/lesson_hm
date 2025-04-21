// openai 实例化
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config({
  path: '.env'
});

export const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
})