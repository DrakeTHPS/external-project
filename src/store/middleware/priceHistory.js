import {GET_HISTORY_ACTION, setHistory} from "../actions/priceHistory";

export const historyMiddleware = () => {
    return store => next => action => {
        switch (action.type) {
            case GET_HISTORY_ACTION:
                fetch("http://localhost:8080/price_history")
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