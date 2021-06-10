import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {catalogMiddleware} from "./catalog";
import {dealersMiddleware} from "./dealers";
import {detailsMiddleware} from "./details";
import {historyMiddleware} from "./priceHistory";
import {suppliesMiddleware} from "./supplies";


export const middleware = applyMiddleware(...[thunk, catalogMiddleware(), dealersMiddleware(), detailsMiddleware(), historyMiddleware(), suppliesMiddleware()]);