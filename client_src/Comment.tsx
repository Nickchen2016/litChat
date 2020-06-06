import React from 'react';

interface LoopComments {
    comments: Array<CommentStructure>
}

export const Comment:React.FC<LoopComments> = ({comments}) => {


    return (
            <div id='comment_area'>
                {comments.map((data,index)=>{
                    return (
                        <li key={index}>
                            {data.text}
                        </li>
                    )
                })}

            </div>
    )
}