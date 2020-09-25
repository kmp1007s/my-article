import path from 'path';
import dotenv from 'dotenv';

export default () => {
  dotenv.config({
    path: path.resolve(
      process.cwd(),
      process.env.NODE_ENV === 'prod' ? '.env' : '.env.development'
    ),
  });
};
