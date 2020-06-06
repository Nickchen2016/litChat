import axios from 'axios';
import { Dispatch } from "redux";
import { ActionTypes, POST_COMMENT, GET_COMMENTS, dataStructure, userStructure, GET_USERS } from './reduxTypes';


//Initial State
const initialState: userStructure[] = [];

//Action Creator
export function getAllUsers(data: userStructure[]): ActionTypes{
    return {type: GET_USERS, users: data}
}

//Thunk creator
export const fetchUsers = () => {

    return (dispatch: Dispatch<ActionTypes>) => {
        axios.get('/users')
            .then(res=>{
                dispatch(getAllUsers(res.data))
            }).catch(err=>console.log(err));
    }
}

//reducer
const userReducer = (state = initialState, action: ActionTypes): userStructure[] =>{
    switch(action.type){
        case GET_USERS:
            return state.concat(action.users);
        default:
            return state;
    }
}

export default userReducer;