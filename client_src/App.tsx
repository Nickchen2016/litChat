import React, { useState, useEffect } from 'react';
import { Typing } from './Typing';
import { Comment } from './Comment';
import { connect } from 'react-redux';
import { fetchComments, postComment } from './redux/getComments';
import { AppState } from './store';
import { ThunkDispatch } from "redux-thunk";
import { Dispatch, bindActionCreators } from "redux";
import { dataStructure, ActionTypes } from './redux/reduxTypes';
import './app.scss';


interface AppProps {
    comments: dataStructure[],
    fetchComments: () => void,
    addAComment: (data: dataStructure)=> void
}

function App(props: AppProps) {

    const [commentList, setcomment] = useState(props.comments);

    useEffect(()=>{
        props.fetchComments();
    },[])

    useEffect(()=>{
        setcomment(props.comments)
    },[props])
    console.log(props, commentList)

    const addComment:AddCommentFunc = data => {
        // setcomment([...comments, data]);
        props.addAComment(data);
    }

    return (
        <div id='chat_window'>
            <Comment comments={commentList}/>
            <Typing addComment={addComment}/>
        </div>
    )
}

interface getData {
    comments: dataStructure[];
}

interface fetchData {
    fetchComments: () => void;
    addAComment: (data: dataStructure)=> void;
}

const mapState = (state: AppState): getData => ({
    comments: state.comments
});

const mapDispatch = (dispatch: ThunkDispatch<any, any, ActionTypes>): fetchData => ({
    fetchComments: bindActionCreators(fetchComments, dispatch),
    addAComment: bindActionCreators(postComment ,dispatch)
})




export default connect(mapState,mapDispatch)(App);