import { Schema } from 'mongoose';

const ArticleSchema = new Schema({
  title: String,
  link: String,
});

ArticleSchema.statics.getAllArticles = async function () {
  const articles = await this.find();
  return articles.length > 0 ? articles : null;
};

ArticleSchema.statics.saveArticle = async function (param: {
  title: string;
  link: string;
}) {
  try {
    const { title, link } = param;
    if (title && link) {
      const savedArticle = await new this({
        title,
        link,
      }).save();

      return savedArticle;
    }
  } catch (e) {
    console.error('필수 파라미터 없음');
  }
};

ArticleSchema.statics.deleteArticle = async function (_id: string) {
  const result = await this.deleteOne({ _id });
  return result.ok ? true : false;
};

export default ArticleSchema;
