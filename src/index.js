import SocketIO from 'socket.io-client';

var socket = SocketIO('http://localhost:3000');

document.addEventListener('focusin', function onInputFocus(e) {
    if (e.target.type === 'text') {
        socket.emit('focusEvent', e.target.id);
    }
});

document.addEventListener('focusout', function onInputBlur(e) {
    if (e.target.type === 'text') {
        socket.emit('blurEvent', {
            id: e.target.id,
            value: e.target.value
        });
    }
});

socket.on('focusEvent', function(id) {
    var elem = document.getElementById(id);
    elem.disabled = true;
    elem.style.backgroundColor = 'lightgrey';
});

socket.on('blurEvent', ({id, value}) => {
    var elem = document.getElementById(id);
    elem.value = value;
    elem.disabled = false;
    elem.style.backgroundColor = 'inherit';
});
