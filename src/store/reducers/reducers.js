import {combineReducers} from "redux";
import {authReducer} from "./auth";
import {basketReducer} from "./basket";
import {catalogReducer} from "./catalog";
import {dealersReducer} from "./dealers";
import {historyReducer} from "./priceHistory";
import {suppliesReducer} from "./supplies";
import {usersReducer} from "./users";

export default combineReducers({
    auth: authReducer,
    basket: basketReducer,
    catalog: catalogReducer,
    dealers: dealersReducer,
    history: historyReducer,
    supplies: suppliesReducer,
    users: usersReducer,
})