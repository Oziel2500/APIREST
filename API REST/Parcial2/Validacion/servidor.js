const express = require("express");
const {check,validationResult} = require('express-validator');
const app = express();

app.use(express.json());
app.post("/usuario",[
     check('edad').IsNumeric(),
     check('correo').IsEmail(),
    ],(req,res)=>{
    const result = validationResult(req);
    if (resourceLimits.IsEmpty()) {
        console.log(req.body);
        res.json({ mensaje: "Respuesta a peticion post" });
    } else{
        res.json(result);
    }
});

app.listen(8080,()=>{
    console.log("Servidor escuchando en el puerto 8080");
});

//descagrar en esta carpeta express validator paquete 
//npm install express validator