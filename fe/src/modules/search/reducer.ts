import {ActionType, createReducer} from "typesafe-actions";

import * as actions from "./action";

import {Article, Pedia} from "api/search";

type SearchState = {
    articles: Array<Article>;
    pedias: Array<Pedia>;
};

type SearchAction = ActionType<typeof actions>;

const initialState: SearchState = {
    articles: [],
    pedias: []
}

const reducer = createReducer<SearchState, SearchAction>(initialState, {
    [actions.SEARCH_ARTICLES_SUCCESS]: (state, action) => ({...state, articles: action.payload, pedias: []}),
    [actions.SEARCH_PEDIAS_SUCCESS]: (state, action) => ({...state, pedias: action.payload, articles: []})
});

export default reducer;