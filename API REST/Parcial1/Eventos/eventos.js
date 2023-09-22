events = require('events');
emisor = new events.EventEmitter();
emisor.on('Saludar', (nombre) => { console.log('hola ' + nombre) });

emisor.emit('Saludar', 'Daniel');


function saludar() {
    const emisor = new events.EventEmitter();
    setTimeout(() => emisor.emit('Saludar', 'si'), 5000);
    setTimeout(() => emisor.emit('Saludar', 'no'), 500);
    setTimeout(() => emisor.emit('Saludar', 'no lo se'), 2000);
    return emisor
}

let sal = saludar();

sal.on('Saludar', (nombre) => {
    console.log('hola ' + nombre)
})

//app.use(bearerToken(),validartoken());