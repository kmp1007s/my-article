import api from './api';

import express from 'express';
import { MongoDatabase } from './database';

export interface IServer {
  app: any;
  port: any;

  connectDB(): Promise<void>;
  setMiddleware(): void;
  start(): Promise<void>;
}

class NullInstanceError implements Error {
  message: string;
  name: string;

  constructor(message: string, name: string) {
    this.message = message;
    this.name = name;
  }
}

export class ExpressServer implements IServer {
  app = express();
  port: number | null = null;

  constructor(port: number) {
    this.port = port;
  }

  async connectDB(): Promise<void> {
    await new MongoDatabase().connect();
  }

  setMiddleware(): void {
    try {
      console.log('Setting Middleware...');

      this.app.use(express.static('public')); // static
      this.app.use(express.json()); // body-parser
      this.app.use('/api', api); // router
    } catch (e) {
      console.error('Setting Middleware Failed');
    }
  }

  async start(): Promise<void> {
    try {
      console.log('Starting Server...');

      if (this.port === null) {
        throw new NullInstanceError(
          'Port instance is null',
          'Port instance null exception'
        );
      }

      await this.connectDB();
      this.setMiddleware();

      this.app.listen(this.port, () => {
        console.log(`Server is running on ${this.port}`);
      });
    } catch (e) {
      if (e instanceof NullInstanceError) {
        console.error(e.name);
      }

      console.error('Starting Server Failed');
    }
  }
}
