import mongoose from 'mongoose';

export async function connect() {
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
