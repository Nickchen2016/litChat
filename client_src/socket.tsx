import io from 'socket.io-client';
import { fetchComments } from './redux/getComments'; 
import { counterIsTyping, counterNotTyping } from './redux/isCounterTyping';
import store from './store';

// interface Val {
//     userId: string;
//     name: string;
// }

const socket = io(window.location.origin);

socket.on('connect', ()=>{
    console.log('connected to the server!');

    socket.on('reload_comments', () => {
        store.dispatch(fetchComments());
    })

    socket.on('show_typing', (value: boolean) => {
        value?store.dispatch(counterIsTyping()):store.dispatch(counterNotTyping());
    })

    // socket.on('choose_another_user', (value: Val) => {
    //     console.log('choose_another_user', value);
    // })

})

export default socket;