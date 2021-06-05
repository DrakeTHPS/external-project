import {auth} from "../../utils/utils";
import {
    GET_USERS_ACTION,
    ADD_USER_ACTION,
    DELETE_USER_ACTION,
    CHANGE_USER_ACTION,
    setUsers
} from "../actions/users";

export const usersMiddleware = () => {
    return store => next => action => {
        switch (action.type) {
            case GET_USERS_ACTION:
                fetch("http://localhost:8080/users")
                    .then(response => response.json())
                    .then(jsonData => store.dispatch(setUsers(jsonData)));
                break;
            case ADD_USER_ACTION:
                fetch("http://localhost:8080/users/", {
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
                    let users = store.getState().users.users.slice();
                    users.push(jsonData);
                    store.dispatch(setUsers(users));
                })
                break;
            case CHANGE_USER_ACTION:
                fetch("http://localhost:8080/users/" + action.payload.id, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "PUT",
                    body: JSON.stringify(action.payload)
                }).then(response => {
                        if (response.status === 200) {
                            let users = store.getState().users.users.slice();
                            let changedUsers = users.map(user =>
                                user.id === action.payload.id ?
                                    action.payload : user
                            )
                            store.dispatch(setUsers(changedUsers));
                        } else {
                            alert("Не удалось изменить")
                        }
                    }
                )
                break;
            case DELETE_USER_ACTION:
                fetch("http://localhost:8080/users/" + action.payload, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...auth()
                    },
                    method: "DELETE",
                }).then(response => {
                        if (response.status === 200) {
                            let users = store.getState().users.users.filter(item => item.id !== action.payload);
                            store.dispatch(setUsers(users));
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