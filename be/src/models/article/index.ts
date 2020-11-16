import ArticleSchema from './schema';
import ArticleDocument from './document';
import { Model, model } from 'mongoose';

interface Article {
  title: String;
  link: String;
}

interface ArticleModel extends Model<ArticleDocument> {
  getAllArticles(): Promise<Array<ArticleDocument> | null>;
  saveArticle(param: Article): Promise<ArticleDocument>;
  deleteArticle(_id: string): boolean;
}

const Article = model<ArticleDocument, ArticleModel>('Article', ArticleSchema);

export default Article;
