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
const path = require('path');
const mysql = require('mysql2');
var app = express()

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a' })

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







