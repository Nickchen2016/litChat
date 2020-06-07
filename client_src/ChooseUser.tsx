import React, { useState } from 'react';
import { userStructure } from './redux/reduxTypes';
import socket from './socket';

type HandleClick = (info: userStructure) => void;

export function ChooseUser(props: PickMyUser) {

    const handleClick: HandleClick = (info) => {
        props.pickUser(info);
        socket.emit('one_user_has_been_choosed', info);
    }

    // console.log('props form choose user ',props.users)
    return (
            <div id='typing_area'>
                {props.users.map((user,idx)=>{
                    return (
                        <div className='user_box' key={idx} onClick={()=>handleClick(user)}>{user.name}</div>
                    )
                })}
            </div>
    )
}