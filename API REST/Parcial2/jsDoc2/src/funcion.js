/**
 * Aqui tenemos un arreglo de 4 elementos, y nos devuelve un elemento al azar.
 */
let frases = ["Hola", "Adios", "Bye", "Hello"];
export function ObtenerFrase(indice) {
    return Promise.resolve(frases[indice]);
}

