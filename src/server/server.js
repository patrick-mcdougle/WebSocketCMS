const io = require('socket.io')();

function focusEventHandler(id) {
    this.broadcast.emit('focusEvent', id);
}

function blurEventHandler(obj) {
    this.broadcast.emit('blurEvent', obj);
}

io.on('connection', client => {
    client.on('focusEvent', focusEventHandler);
    client.on('blurEvent', blurEventHandler);
});

io.listen(3000);
