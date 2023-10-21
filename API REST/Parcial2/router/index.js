const express = require('express');
const empleado = require('./empleado.js');
const app = express();

app.use('/empleado',empleado.router);
app.listen(3000,function(err){
    if (err) console.log(console.error); {
        console.log("Servidor escuchando en puerto 3000")
    }
});

