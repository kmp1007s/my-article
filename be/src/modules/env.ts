import path from 'path';
import dotenv from 'dotenv';

export const loadEnvVars = () => {
  dotenv.config({
    path: path.resolve(
      process.cwd(),
      process.env.NODE_ENV === 'prod' ? '.env' : '.env.development'
    ),
  });
};
