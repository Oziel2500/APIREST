/*let http = require('http');

let servidor = http.createServer(function (req, res) {

    //brina el acceso al core

    res.setHeader("Access-Control-Allow-Origin", "*");

    //repuesta del servidor node

    res.write('servidor HTTP contestando');
    res.end();

});

servidor.listen(8080, () => {

    console.log("Servidor Node-Http escuchando en pueto 8080");

});
*/
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
var cors = require('cors');
const path = require('path');
const mysql = require('mysql2');
// const bearer = require('express-bearer-token');
// const axios = require('axios');
// var app = express()

// app.use(cors());
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a' })


// const bearerToken = require('express-bearer-token');

// app.use(bearerToken());



// // Middleware para verificar si se proporciona un token de portador válido

// app.use((req, res, next) => {

//     const token = req.token;



//     if (!token) {

//         return res.status(401).json({ error: 'Token de portador no proporcionado.' });

//     }



//     next(); // Continúa con la solicitud si el token es válido.

// });



// // Ruta para obtener información del usuario de GitHub

// app.get('/github', async (req, res) => {

//     try {

//         const token = req.token;

//         const response = await axios.get('https://api.github.com/users/Oziel2500', {

//             headers: {

//                 Authorization: `Bearer ${token}`,

//             },

//         });



//         const userData = response.data;

//         res.json(userData);

//     } catch (error) {

//         console.error('Error al obtener información del usuario de GitHub:', error);

//         res.status(500).json({ error: 'Error al obtener información del usuario de GitHub.' });

//     }

// });
app.get("/Empleados", async(req,res)=>{
    try {
        const conn = await mysql.createConnection({host:'localhost',user:'root',password:'', database:'empleados', port:3307})
        const [rows, fields] = await conn.promise().query('SELECT * FROM turnoa')
        res.json(rows)
    } catch (error) {
        res.status(500).json({mensaje:error.sqlMessage})
    }
})

app.get("/Empleados/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const conn = await mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'empleados', port: 3307 })
        const [rows, fields] = await conn.promise().query('SELECT * FROM turnoa WHERE idTurno = '+req.params.id)
        
        res.json(rows)
    } catch (error) {
        res.status(500).json({ mensaje: error.sqlMessage })
    }
})

app.delete("/Empleados/:id", async (req, res) => {
    try {
        console.log(req.query.id)
        const conn = await mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'empleados', port: 3307 })
        const [rows, fields] = await conn.promise().query('DELETE FROM turnoa WHERE idTurno = ' + req.params.id)

        res.json(rows)
    } catch (error) {
        res.status(500).json({ mensaje: error.sqlMessage })
    }
})

app.use(express.json())
app.get("/Empleados", (req,res)=>{
    res.send("Servidor express constestando peticion get")
})
app.listen(3000,(req,res)=>{
    console.log("El servidor express esta escuchando bad bunny")
})







