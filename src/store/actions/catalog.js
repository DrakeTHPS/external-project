export const GET_CATALOG_ACTION = "GET_CATALOG_ACTION";
export const SET_CATALOG_ACTION = "SET_CATALOG_ACTION";

export const getCatalog = catalog =>({
    type: GET_CATALOG_ACTION,
    payload: catalog
})

export const setCatalog = catalog =>({
    type: SET_CATALOG_ACTION,
    payload: catalog
})