import React, { useState } from 'react';
import ChooseUser from './ChooseUser';

interface addCommentProps {
    addComment: AddCommentFunc;
}

export const Form:React.FC<addCommentProps> = ({addComment}) => {

    const [newText, setnewText] = useState('');
    const [pickedUser, setpickedUser] = useState('');
    const [isUser, setisUser] = useState(false);

    const handleChange:UpdateTextFunc = (e)=> {
        e.preventDefault();
        console.log(e.target.value);
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

    const pickUser:PickUser = (info) => {
        setpickedUser(info.userId);
        setisUser(!isUser);
    }

    if(isUser){
        return (
                <div id='typing_area'>
                    <form id='typing_area' onSubmit={handleSubmit}>
                        <input type='text' value={newText} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e)}/>
                        <input type='submit'/>
                    </form>
                </div>
        )
    }else{
        return  (
            <div id='typing_area'>
                <ChooseUser pickUser={pickUser}/>
            </div>)
    }
}