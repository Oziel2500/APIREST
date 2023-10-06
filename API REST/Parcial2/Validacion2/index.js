const express = require("express");
const { check, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.post("/usuario", [
    check('edad').isNumeric(),
    check('correo').isEmail(),
], (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        console.log(req.body);
        res.json({ mensaje: "Respuesta a peticion post" });
    } else {
        res.json(result);
    }
});
            //♥ alt+3
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 8080");
});

//descagrar en esta carpeta express validator paquete
//npm install express validator