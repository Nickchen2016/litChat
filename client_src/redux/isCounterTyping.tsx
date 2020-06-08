import { Dispatch } from "redux";
import { ActionTypes, IS_TYPING, ShowTypingType, doneTypingType, NOT_TYPING } from './reduxTypes';


//Initial State
const initialState: boolean = false;

//Action Creator
export function showTyping(data: boolean): ShowTypingType {
    return {type: IS_TYPING, isTyping: data}
}

export function doneTyping(data: boolean): doneTypingType {
    return {type: NOT_TYPING, notTyping: data}
}

//Thunk creator
export const counterIsTyping = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(showTyping(true));
    }
}

export const counterNotTyping = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(doneTyping(false));
    }
}

//reducer
const TypingReducer = (state = initialState, action: ActionTypes): boolean =>{
    switch(action.type){
        case IS_TYPING:
            return action.isTyping;
        case NOT_TYPING:
            return action.notTyping;
        default:
            return state;
    }
}

export default TypingReducer;