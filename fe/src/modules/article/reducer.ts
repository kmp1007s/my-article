import {ActionType, createReducer} from "typesafe-actions";

import * as actions from "./action";

import {ArticleDoc} from "api/article";

type ArticleState = {
    data: Array<ArticleDoc>;
};

type ArticleAction = ActionType<typeof actions>;

const initialState: ArticleState = {
    data: [],
}

const reducer = createReducer<ArticleState, ArticleAction>(initialState, {
    [actions.GET_ARTICLES_SUCCESS]: (state, action) => ({...state, data: action.payload}),
});

export default reducer;