import {createAction} from "typesafe-actions";

import {ArticleDoc} from "api/article";

export const GET_ARTICLES_SUCCESS = "article/GET_ARTICLES_SUCCESS";

export const getArticlesSuccess = createAction(GET_ARTICLES_SUCCESS)<Array<ArticleDoc>>();