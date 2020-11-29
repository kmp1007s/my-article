import {ActionType, createReducer} from "typesafe-actions";

import * as actions from "./action";

type ModeState = {
    getArticles: boolean;
    search: boolean;
};

type ModeAction = ActionType<typeof actions>;

const initialState: ModeState = {
    getArticles: false,
    search: true
}

const reducer = createReducer<ModeState, ModeAction>(initialState, {
    [actions.GET_ARTICLES_START]: (state, action) => ({...state, getArticles: true, search: false}),
    [actions.SEARCH_START]: (state, action) => ({...state, search: true, getArticles: false}),
});

export default reducer;