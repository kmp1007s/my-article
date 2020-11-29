import {createAction} from "typesafe-actions";

import {Article, Pedia} from "api/search";

export const SEARCH_ARTICLES_SUCCESS = "search/SEARCH_ARTICLES_SUCCESS";
export const SEARCH_PEDIAS_SUCCESS = "search/SEARCH_PEDIAS_SUCCESS";

export const searchArticlesSuccess = createAction(SEARCH_ARTICLES_SUCCESS)<Array<Article>>();
export const searchPediasSuccess = createAction(SEARCH_PEDIAS_SUCCESS)<Array<Pedia>>();