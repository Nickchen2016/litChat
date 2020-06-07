import axios from 'axios';
import { Dispatch } from "redux";
import { ActionTypes, POST_COMMENT, GET_COMMENTS, dataStructure } from './reduxTypes';
import { AppState } from '../store';
import socket from '../socket';


//Initial State
const initialState: dataStructure[] = [];

//Action creator
export function postAComment(data: dataStructure): ActionTypes{
    return {type: POST_COMMENT, comment: data}
}

export function getAllComments(data: dataStructure[]): ActionTypes{
    return {type: GET_COMMENTS, comments: data}
}

//Thunk creator
export const fetchComments = () =>{

    return (dispatch: Dispatch<ActionTypes>) =>{
        axios.get('/comments')
            .then(res=>{
                dispatch(getAllComments(res.data));
            }).catch(err=>console.log(err));
    }
}

export const postComment = (data: dataStructure) =>{

    return (dispatch: Dispatch<ActionTypes>) =>
        axios.post('/comments', data)
            .then(res=>{
                dispatch(postAComment(res.data));
                socket.emit('update_counter_comment', true);
            }).catch(err=>console.log(err))
}


//reducer
const commentReducer = (state = initialState, action: ActionTypes): dataStructure[] =>{
    switch(action.type){
        case GET_COMMENTS:
            return action.comments;
        case POST_COMMENT:
            return state.concat(action.comment);
        default:
            return state;
    }
}

export default commentReducer;