import React, { useState } from 'react';
import { dataStructure } from './redux/reduxTypes';
import socket from './socket';

interface addCommentProps {
    addComment: AddCommentFunc;
    pickedUser: string;
    users: dataStructure[];
}

export const Form:React.FC<addCommentProps> = ({addComment, pickedUser, users}) => {

    const [newText, setnewText] = useState('');

    const handleChange:UpdateTextFunc = (e)=> {
        e.preventDefault();
        socket.emit('is_typing', true);
        setnewText(e.target.value);
    }
    const handleSubmit:UpdateTextFunc = (e: React.FormEvent) => {
        e.preventDefault();
        if(newText!=''){
            let newComment ={
                text: newText,
                userId: pickedUser
            };
            addComment(newComment);
            setnewText('');
        }
    }
    const handleClick: UpdateTextFunc = () => {
        socket.emit('is_typing', false);
    }

    return (
            <div id='typing_area' onClick={handleClick}>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={newText} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e)}/>
                    <input type='submit'/>
                </form>
            </div>
    )
}