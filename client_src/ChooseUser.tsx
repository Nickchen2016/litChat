import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from './store';
import { userStructure } from './redux/reduxTypes';


function ChooseUser(props: PickMyUser) {


    console.log('props form choose user ',props.users)
    return (
            <div id='pick_user'>
                {props.users.map((user,idx)=>{
                    return (
                        <div className='user_box' key={idx}>{user.name}</div>
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