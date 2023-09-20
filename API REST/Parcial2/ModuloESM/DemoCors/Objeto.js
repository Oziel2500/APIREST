let objeto = { idTurno:1,
               nombre:"Adan",
               Salario:"100"}

let campo=Object.keys(objeto);
let valores=Object.values(objeto);
let llaves = Object.entries(objeto);

console.log(campo);
console.log(valores);
console.log(llaves);

let sentenciasql="";
let cadenaUpdate="update turnoa";
let cadenaSet="";
let cadenaWhere="where";

campo.forEach(campo=>{
    console.log(campo+'='+objeto[campo]+' ,');
    if (campo=='id') {
        cadenaWhere=campo+'='+objeto[campo]+',';
    } else {
        cadena
    }
})



