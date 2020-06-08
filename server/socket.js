module.exports = io => {
    io.on('connection', socket => {
        console.log(`*************A socket connection to the server has been made: ${socket.id}`)

        socket.on('update_counter_comment', () => {
            socket.broadcast.emit('reload_comments');
        })

        socket.on('is_typing', value => {
            socket.broadcast.emit('show_typing', value);
        })

        // socket.on('one_user_has_been_choosed', value => {
        //     console.log('one_user_has_been_choosed', value);
        //     socket.broadcast.emit('choose_another_user', value);
        // })

        socket.on('disconnect', socket => {
            console.log('sad it cut off:(')
        })
    })
}