import{SET_SUPPLIES_ACTION} from "../actions/supplies";

const defaultState = {
    supplies:[]
}

export const suppliesReducer = (state = defaultState, action) =>{
    switch (action.type){
        case SET_SUPPLIES_ACTION:
            return {
                ...state,
                supplies: action.payload
            }
        default:
            return state;
    }
}