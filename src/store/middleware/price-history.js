import {GET_HISTORY_ACTION, setHistory} from "../actions/price-history";
import {auth} from "../../utils/utils";

export const historyMiddleware = () => {
    return store => next => action => {
        switch (action.type) {
            case GET_HISTORY_ACTION:
                fetch("/api/price_history", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "GET",
                    body: JSON.stringify(action.payload)
                })
                    .then(response => response.json())
                    .then(jsonData => store.dispatch(setHistory(jsonData)));
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}