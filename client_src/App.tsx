import React, { useState, useEffect } from 'react';
import { Form } from './Form';
import { Comment } from './Comment';
import { connect } from 'react-redux';
import { fetchComments, postComment } from './redux/getComments';
import { fetchUsers } from './redux/getUserInfo';
import { AppState } from './store';
import { ThunkDispatch } from "redux-thunk";
import { Dispatch, bindActionCreators } from "redux";
import { dataStructure, ActionTypes, userStructure } from './redux/reduxTypes';
import './app.scss';



function App(props: AppProps) {

    const [commentList, setcomment] = useState(props.comments);

    useEffect(()=>{
        props.fetchComments();
        props.fetchUsers();
    },[])

    useEffect(()=>{
        setcomment(props.comments)
    },[props])
    console.log('we props',props)

    const addComment:AddCommentFunc = data => {
        props.addAComment(data);
    }

    return (
        <div id='chat_window'>
            <Comment comments={commentList}/>
            <Form addComment={addComment}/>
        </div>
    )
}

interface getData {
    comments: dataStructure[];
    users: userStructure[];
}

interface fetchData {
    fetchComments: () => void;
    addAComment: (data: dataStructure)=> void;
    fetchUsers: () => void;
}

const mapState = (state: AppState): getData => ({
    comments: state.comments,
    users: state.users
});

const mapDispatch = (dispatch: ThunkDispatch<any, any, ActionTypes>): fetchData => ({
    fetchComments: bindActionCreators(fetchComments, dispatch),
    addAComment: bindActionCreators(postComment ,dispatch),
    fetchUsers: bindActionCreators(fetchUsers, dispatch)
})




export default connect(mapState,mapDispatch)(App);