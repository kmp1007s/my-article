import { asyncWrapper } from '@module/async';
import articleModel from '@model/article';

export const getAllArticles = asyncWrapper(async (req, res) => {
  const articles = await articleModel.getAllArticles();

  console.log(articles);
  res.status(200).json(articles);
});

export const saveArticle = asyncWrapper(async (req, res) => {
  console.log(req.body);

  const savedArticle = await articleModel.saveArticle({
    title: req.body.title,
    link: req.body.link,
  });

  console.log(savedArticle);

  res.status(201).json(savedArticle);
});

export const deleteArticle = asyncWrapper(async (req, res) => {
  if (req.params._id) {
    const { _id } = req.params;
    const deleteResult = await articleModel.deleteArticle(_id);

    console.log(deleteResult);
    res.status(200).json(deleteResult);
  }
});
