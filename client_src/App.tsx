import React, { useState, useEffect } from 'react';
import { Typing } from './Typing';
import { Comment } from './Comment';
import { connect } from 'react-redux';
import { fetchComments } from './redux/getComments';
import { AppState } from './store';
import { ThunkDispatch } from "redux-thunk";
import { Dispatch, bindActionCreators } from "redux";
import { dataStructure, ActionTypes } from './redux/reduxTypes';
import './app.scss';

const initialComment: Array<CommentStructure> = [
    {text: 'Hey, Nick, hows goin?', who: '1'},
    {text: 'Yo, I am doing well tho', who: '2'}
]

function App(props: any) {

    const [comments, setcomment] = useState(initialComment);

    useEffect(()=>{
        console.log('here is the props ', props.fetchComments())
        // props.fetchComments();
    },[])

    const addComment:AddCommentFunc = data => {
        setcomment([...comments, data]);
    }

    return (
        <div id='chat_window'>
            <Comment comments={comments}/>
            <Typing addComment={addComment}/>
        </div>
    )
}

interface getData {
    comments: dataStructure[];
}

interface fetchData {
    fetchComments: () => void;
}

const mapState = (state: AppState): getData => ({
    comments: state.comments
});

const mapDispatch = (dispatch: ThunkDispatch<any, any, ActionTypes>): fetchData => ({
    fetchComments: bindActionCreators(fetchComments, dispatch)
})




export default connect(mapState,mapDispatch)(App);