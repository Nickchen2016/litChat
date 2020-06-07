import React, { useEffect } from 'react';
import { userStructure } from './redux/reduxTypes';

interface LoopComments {
    comments: Array<CommentStructure>;
    pickedUser: string;
    users: Array<userStructure>;
    isUser: boolean;
}

export const Comment:React.FC<LoopComments> = ({comments, pickedUser, isUser}) => {
    
    useEffect(()=>{
        const doc = document.querySelector('#comment_area');
        doc!.scrollTop = doc!.scrollHeight;
    }, [comments,isUser])

    if(pickedUser!=''){
        return (
                <div id='comment_area'>
                    {comments.map((data,index)=>{
                            return (
                                    <div className='text_box' style={{float:pickedUser===data.userId?'right':'left'}} key={index}>
                                        {data.text}
                                    </div>
                                )
                    })}
    
                </div>
        )
    }else{
        return <div id='comment_area'></div>
    }
}