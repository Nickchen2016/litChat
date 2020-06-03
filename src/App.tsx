import React, { useState } from 'react';
import { Typing } from './Typing';
import { Comment } from './Comment';
import './app.scss';

const initialComment: Array<CommentStructure> = [
    {text: 'Hey, Nick, hows goin?', who: '1'},
    {text: 'Yo, I am doing well tho', who: '2'}
]

export default function App() {

    const [comments, setcomment] = useState(initialComment);

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