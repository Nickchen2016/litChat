import React, { useState, useEffect } from 'react';
import { Form } from './Form';
import { Comment } from './Comment';
import { ChooseUser } from './ChooseUser';
import { connect } from 'react-redux';
import { fetchComments, postComment } from './redux/getComments';
import { fetchUsers } from './redux/getUserInfo';
import { AppState } from './store';
import { ThunkDispatch } from "redux-thunk";
import { Dispatch, bindActionCreators } from "redux";
import { dataStructure, ActionTypes, userStructure } from './redux/reduxTypes';
import socket from './socket';
import './app.scss';



function App(props: AppProps) {

    const [commentList, setcomment] = useState(props.comments);
    const [pickedUser, setpickedUser] = useState('');
    const [isUser, setisUser] = useState(false);

    useEffect(()=>{
        props.fetchComments();
        props.fetchUsers();
    },[])

    useEffect(()=>{
        setcomment(props.comments)
    },[props])

    const addComment:AddCommentFunc = data => {
        props.addAComment(data);
        socket.emit('is_typing', false);
    }

    const pickUser:PickUser = (info) => {
        setpickedUser(info.userId);
        setisUser(!isUser);
    }

    return (
        <div id='chat_window'>
            <Comment comments={commentList} pickedUser={pickedUser} users={props.users} isUser={isUser} isTyping={props.isTyping} />
            {isUser?
                <Form addComment={addComment} pickedUser={pickedUser} users={props.users} />
                :<ChooseUser pickUser={pickUser} users={props.users} />
            }
        </div>
    )
}

interface getData {
    comments: dataStructure[];
    users: userStructure[];
    isTyping: boolean;
}

interface fetchData {
    fetchComments: () => void;
    addAComment: (data: dataStructure)=> void;
    fetchUsers: () => void;
}

const mapState = (state: AppState): getData => ({
    comments: state.comments,
    users: state.users,
    isTyping: state.isTyping
});

const mapDispatch = (dispatch: ThunkDispatch<any, any, ActionTypes>): fetchData => ({
    fetchComments: bindActionCreators(fetchComments, dispatch),
    addAComment: bindActionCreators(postComment ,dispatch),
    fetchUsers: bindActionCreators(fetchUsers, dispatch)
})




export default connect(mapState,mapDispatch)(App);