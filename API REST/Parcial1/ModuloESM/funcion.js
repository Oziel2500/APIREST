const frases = ["Hola", "Adios", "Bye", "Hello"];
function generarNumeroAleatorio(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
var numeroAleatorio = generarNumeroAleatorio(0, 3); // Genera un número entre 1 y 100
export function ObtenerFrase() {
    return frases[numeroAleatorio];
}

