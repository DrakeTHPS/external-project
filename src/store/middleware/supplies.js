import {auth} from "../../utils/utils";
import {
    GET_SUPPLIES_ACTION,
    ADD_SUPPLY_ACTION,
    DELETE_SUPPLY_ACTION,
    CHANGE_SUPPLY_ACTION,
    setSupplies
} from "../actions/supplies";

export const suppliesMiddleware = () => {
    return store => next => action => {
        switch (action.type) {
            case GET_SUPPLIES_ACTION:
                fetch("http://localhost:8080/supplies")
                    .then(response => response.json())
                    .then(jsonData => store.dispatch(setSupplies(jsonData)));
                break;
            case ADD_SUPPLY_ACTION:
                fetch("http://localhost:8080/supplies/", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "POST",
                    body: JSON.stringify(action.payload)
                }).then(response => {
                        if (response.status === 201) {
                            return response.json();
                        } else {
                            alert("Не удалось добавить")
                        }
                    }
                ).then(jsonData => {
                    let supplies = store.getState().supplies.supplies.slice();
                    supplies.push(jsonData);
                    store.dispatch(setSupplies(supplies));
                })
                break;
            case CHANGE_SUPPLY_ACTION:
                fetch("http://localhost:8080/supplies/" + action.payload.id, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "PUT",
                    body: JSON.stringify(action.payload)
                }).then(response => {
                        if (response.status === 200) {
                            let supplies = store.getState().supplies.supplies.slice();
                            let changedSupplies = supplies.map(dealer =>
                                dealer.id === action.payload.id ?
                                    action.payload : dealer
                            )
                            store.dispatch(setSupplies(changedSupplies));
                        } else {
                            alert("Не удалось изменить")
                        }
                    }
                )
                break;
            case DELETE_SUPPLY_ACTION:
                fetch("http://localhost:8080/supplies/" + action.payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "DELETE",
                }).then(response => {
                        if (response.status === 200) {
                            let supplies = store.getState().supplies.supplies.filter(item => item.id !== action.payload);
                            store.dispatch(setSupplies(supplies));
                        } else {
                            alert("Не удалось удалить")
                        }
                    }
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}