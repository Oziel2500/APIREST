import express from 'express'
import dotenv from 'dotenv'
//import jwt from 'jsonwebtoken'
import authRouter from './auth.routes.js'

dotenv.config("C:/Users/Adan/Documents/APIREST/API REST/Parcial2/Servidor jwt/.env")

const app = express();
const PORT = process.env.port;

app.use(express.urlencoded({ extended: true }));

app.use(express.json())
    .use('/', authRouter)
    .get('/notlogin', (req, res) => {
        res.status(200).json({ message: "No esta logueado aun, Eres un invitado en esta ruta" })
    })
    .listen(PORT, () => {
        console.log('Servidor corriendo en el puerto - ' + PORT);
    }
    )