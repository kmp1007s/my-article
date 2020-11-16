import { Router } from 'express';
import * as ctrl from './ctrl';

const article = Router();
article.get('/', ctrl.getAllArticles);
article.post('/', ctrl.saveArticle);
article.delete('/:_id', ctrl.deleteArticle);

export default article;
