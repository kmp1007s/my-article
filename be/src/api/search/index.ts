import { Router } from 'express';
import * as ctrl from './ctrl';

const search = Router();

search.get('/articles', ctrl.searchArticles);
search.get('/pedia', ctrl.searchPedia);

export default search;
