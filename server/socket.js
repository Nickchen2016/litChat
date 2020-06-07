module.exports = io => {
    io.on('connection', socket => {
        console.log(`*************A socket connection to the server has been made: ${socket.id}`)

        socket.on('update_counter_comment', value => {
            console.log('here is the trigger value', value);
            socket.broadcast.emit('reload_comments', value);
        })

        socket.on('is_typing', value => {
            console.log('counter part is tying: ', value);
            socket.broadcast.emit('show_typing', value);
        })

        socket.on('one_user_has_been_choosed', value => {
            console.log('one_user_has_been_choosed', value);
            socket.broadcast.emit('choose_another_user', value);
        })

        socket.on('disconnect', socket => {
            console.log('sad it cut off:(')
        })
    })
}