import mongoose from 'mongoose';

export interface IDatabase {
  connect(): Promise<void>;
}

export class MongoDatabase implements IDatabase {
  constructor() {}

  async connect(): Promise<void> {
    try {
      console.log('DB Connection Start...');

      if (process.env.MONGO_URL) {
        mongoose.Promise = global.Promise;

        await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        console.log('MongoDB Connected');
      }
    } catch (e) {
      console.error('DB Connection Failed');
    }
  }
}
