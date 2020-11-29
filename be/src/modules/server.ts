import express from 'express';
import api from '../api';

import cors from "cors";

const port = process.env.PORT || 8080;
const app = express();

async function setMiddleware() {
  return new Promise<void>((resolve, reject) => {
    try {
      console.log('Setting Middleware...');

      app.use(express.static('public')); // static
      app.use(express.json()); // body-parser
      app.use(cors());
      app.use('/api', api); // router

      resolve();
    } catch (e) {
      console.error('Setting Middleware Failed');
      reject();
    }
  });
}

export async function run() {
  try {
    console.log('Starting Server...');

    setMiddleware();

    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (e) {
    console.error('Starting Server Failed');
  }
}
