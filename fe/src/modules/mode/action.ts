import {createAction} from "typesafe-actions";

export const GET_ARTICLES_START = "mode/GET_ARTICLES_START";
export const SEARCH_START = "mode/SEARCH_START";

export const getArticlesStart = createAction(GET_ARTICLES_START)();
export const searchStart = createAction(SEARCH_START)();