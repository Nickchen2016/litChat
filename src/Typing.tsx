import React, { useState } from 'react';
import './app.scss';

interface addCommentProps {
    addComment: AddCommentFunc;
}

export const Typing:React.FC<addCommentProps> = addComment => {

    const [newText, setnewText] = useState('');

    const updateText:UpdateTextFunc = (e)=> {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
            <div id='typing_area'>
                <form id='typing_area'>
                    <input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>updateText(e)}/>
                    <input type='submit' />
                </form>
            </div>
    )
}