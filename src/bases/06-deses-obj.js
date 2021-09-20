//desestructuración
//asignacion desestructurante

const persona={
    nombre:'tony',
    edad:45,
    clave:'Ironman',
    rango:'superhero',
}

// const {nombre, edad, clave}= persona
// console.log(nombre, edad, clave)


// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


//funciones
// const retornaPersona = (usuario)=>{
//     const {edad, clave, nombre}= usuario
//     console.log(edad, clave, nombre)
// }

//otra forma
// const retornaPersona = ({nombre, edad, rango='hero'})=>{
//     console.log(nombre, edad, rango)
// }

// const retornaPersona = ({clave, nombre, edad, rango='hero'})=>{
//     return{
//         nombreClave:clave,
//         anios: edad,
//     }
// }
// const avenger = retornaPersona(persona);
// console.log(avenger)


const useContext = ({clave, nombre, edad, rango='hero'})=>{
    return{
        nombreClave:clave,
        anios: edad,
        latLng:{
            lat:14.1232,
            lng:-12.3232,
        }
    }
}
const {nombreClave, anios, latLng:{lat, lng}} = useContext(persona);
// console.log(avenger)


console.log(nombreClave,anios);
console.log(lat, lng);

// retornaPersona(persona);