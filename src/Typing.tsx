import React, { useState } from 'react';
import './app.scss';

interface addCommentProps {
    addComment: AddCommentFunc;
}

export const Typing:React.FC<addCommentProps> = ({addComment}) => {

    const [newText, setnewText] = useState('');

    const handleChange:UpdateTextFunc = (e)=> {
        e.preventDefault();
        console.log(e.target.value);
        setnewText(e.target.value);
    }
    const handleSubmit:UpdateTextFunc = (e: React.FormEvent) => {
        e.preventDefault();
        let newComment ={
            text: newText,
            who: '1'
        };
        addComment(newComment);
        setnewText('');
    }

    return (
            <div id='typing_area'>
                <form id='typing_area' onSubmit={handleSubmit}>
                    <input type='text' value={newText} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e)}/>
                    <input type='submit'/>
                </form>
            </div>
    )
}