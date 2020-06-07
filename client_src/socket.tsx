import io from 'socket.io-client';
import { fetchComments } from './redux/getComments'; 
import store from './store';

interface Val {
    userId: string;
    name: string;
}

const socket = io(window.location.origin);

socket.on('connect', ()=>{
    console.log('connected to the server!');

    socket.on('reload_comments', (value: boolean) => {
        console.log('lets_reload_it', value);
        store.dispatch(fetchComments());
    })

    socket.on('show_typing', (value: boolean) => {
        console.log('show_typing_icon ', value);
    })

    socket.on('choose_another_user', (value: Val) => {
        console.log('choose_another_user', value);
    })

})

export default socket;