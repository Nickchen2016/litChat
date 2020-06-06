import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from './store';
import { userStructure } from './redux/reduxTypes';


function ChooseUser(props: PickMyUser) {


    console.log('props form choose user ',props)
    return (
            <div id='pick_user'>
                hello
                {/* {userIdArr.map((user,idx)=>{
                    return (
                        <div className='user_box' key={idx}></div>
                    )
                })} */}
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