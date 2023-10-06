const express = require('express');
const app = express();
var mysql2 = require('mysql2/promise');



app.use(express.json())


app.post("/Alumnos", async (req, resp, next) => {
    try {
        let nombre, apellido;
        nombre = req.body.nombre;
        apellido = req.body.apellido;
        const conexion = await mysql2.createConnection(dataDeBase);
        const sql = ' INTO ejemplo.nombre (nombre, apellido) VALUES (?, ?)';
        const [result] = await conexion.execute(sql, [nombre, apellido]);

        if (result.affectedRows === 1) {
            resp.status(201).json({ mensaje: "Alumno creado exitosamente" });
        } else {
            //resp.status(500).json({ mensaje: "Error al crear el alumno" });
            let error = new Error("Error al crear el alumno")
            next(error)
        }
    } catch (err) {
        //resp.status(500).json({ mensaje: "Error de conexión", tipo: err.message, sql: err.sqlMessage });
        let error = new Error("Error de conexión" + err.message + err.sqlMessage)
        next(error)
    }
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

app.listen(3000, (req, resp) =>{
    console.log("Servidor escuchando en puerto 3000");
})