import{SET_HISTORY_ACTION} from "../actions/priceHistory";

const defaultState = {
    priceHistory:[]
}

export const historyReducer = (state = defaultState, action) =>{
    switch (action.type){
        case SET_HISTORY_ACTION:
            return {
                ...state,
                priceHistory: action.payload
            }
        default:
            return state;
    }
}