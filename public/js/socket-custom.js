var socket = io();

socket.on('connect', function(){
    console.log('conectado al servidor');
});

// Escucha mensaje del servidor
socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje)
});

// on: escucha
socket.on('disconnect', function() {
    console.log('perdimos conexión con el servidor');
});

// emit: emite información
socket.emit('enviarMensaje', {
    usuario: 'Nico',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuesta server: ', resp);
});