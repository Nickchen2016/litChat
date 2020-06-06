import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from './store';
import { userStructure } from './redux/reduxTypes';

type HandleClick = (info: userStructure) => void;

function ChooseUser(props: PickMyUser) {

    const handleClick: HandleClick = (info) => {
        props.pickUser(info);
    }

    // console.log('props form choose user ',props.users)
    return (
            <div id='pick_user'>
                {props.users.map((user,idx)=>{
                    return (
                        <div className='user_box' key={idx} onClick={()=>handleClick(user)}>{user.name}</div>
                    )
                })}
            </div>
    )
}

interface getUsers {
    users: userStructure[];
}

const mapState = (state: AppState): getUsers =>({
    users: state.users
})

export default connect(mapState)(ChooseUser);