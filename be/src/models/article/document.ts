import mongoose from 'mongoose';

export default interface ArticleDocument extends mongoose.Document {
  title: string;
  link: string;
}
