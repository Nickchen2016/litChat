import React, { useEffect } from 'react';
import { userStructure } from './redux/reduxTypes';

interface LoopComments {
    comments: Array<CommentStructure>;
    pickedUser: string;
    users: Array<userStructure>;
    isUser: boolean;
    isTyping: boolean;
}

export const Comment:React.FC<LoopComments> = ({comments, pickedUser, isUser, isTyping}) => {

    useEffect(()=>{
        const node = document.querySelector('#comment_area');
        node!.scrollTop = node!.scrollHeight;
    }, [comments,isUser,isTyping])

    useEffect(()=>{
    if(isTyping){
        const nodes = document.querySelectorAll('.counter_text');
        const parent = document.createElement('div')
        parent.className = 'loading-dots';
        const child = document.createElement('div')
        child.className = 'loading-dots--dot';
        const child2 = child.cloneNode(true);
        const child3 = child.cloneNode(true);
        parent.appendChild(child);
        parent.appendChild(child2);
        parent.appendChild(child3);
        nodes.forEach((e,idx)=>{
            if(idx===nodes.length-1){
                e.after(parent);
            }
        })
    }else{
        document.querySelectorAll('.loading-dots').forEach(e=>{
            e.remove();
        })
    }
    },[isTyping])

    if(pickedUser!=''){
        return (
                <div id='comment_area'>
                    {comments.map((data,index)=>{
                        if(pickedUser===data.userId){
                            return (<div className='text_box' style={{float:'right'}} key={index}>
                                        {data.text}
                                    </div>)
                        }else{
                            return (<div className='text_box counter_text' style={{float:'left'}} key={index}>
                                        {data.text}
                                    </div>)
                        }

                    })}
                </div>
        )
    }else{
        return <div id='comment_area'></div>
    }
}