import React from 'react';

interface LoopComments {
    comments: Array<CommentStructure>
}

export const Comment:React.FC<LoopComments> = ({comments}) => {


    return (
            <div id='comment_area'>
                {comments.map((data,index)=>{
                    return (
                        <div className='text_box' key={index}>
                            {data.text}
                        </div>
                    )
                })}

            </div>
    )
}