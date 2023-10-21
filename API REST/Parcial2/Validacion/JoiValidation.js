const validation = require("./middleware/joinValidation")
const {registroSchema} = require("./schemas/registrojoi")
const express=require('express');
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.post("/clientes", validation(registroSchema), (req,res) =>{
    const {usuario,password,confirmar_password, nombre,edad,calle,ciudad,correo,fecha_registro} = req.body;
    res.send("usuario"+usuario+"password:"+password+"confirmar_password:"+confirmar_password+"nombre:"+nombre+
    "edad:"+edad+"calle:"+calle+"ciudad:"+ciudad+"correo:"+correo+"fecha_registro:"+fecha_registro);
})

app.listen(3000,() => {
        console.log("Servidor escuchando en puerto 3000")
    
});

