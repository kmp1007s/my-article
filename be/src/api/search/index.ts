import { Router } from 'express';
import * as ctrl from './controller';

const search = Router();

search.get('/articles', ctrl.searchArticles);
search.get('/pedia', ctrl.searchPedia);

export default search;
