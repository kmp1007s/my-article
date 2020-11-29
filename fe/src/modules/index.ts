import {combineReducers} from "redux";

import search from "./search";
import article from "./article";
import mode from "./mode";

const rootReducer = combineReducers({
    search,
    article,
    mode
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;