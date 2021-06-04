export const GET_USERS_ACTION = 'GET_USERS_ACTION';
export const SET_USERS_ACTION = 'SET_USERS_ACTION';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';

export const getUsers = users =>({
    type: GET_USERS_ACTION,
    payload: users
})

export const setUsers = users =>({
    type: SET_USERS_ACTION,
    payload: users
})

export const addUser = user => ({
    type: ADD_NEW_USER,
    payload: user
})

export const editUser = user => ({
    type: EDIT_USER,
    payload: user
})

export const deleteUser = user =>({
    type: DELETE_USER,
    payload: user
})