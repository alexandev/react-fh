// const saludar = function(nombre){
//     return `hi, ${nombre}`;
// }
const saludar2= (nombre)=> `hi, ${nombre}`;
const saludar4= ()=> `hello world`;



console.log(saludar2('alexxx'));
console.log(saludar4());

const getUser=()=>{
    return {
        uid:'ABC123',
        username:'dddddd'
    }
}

console.log(getUser())


//tarea

// function getUsuarioActivo(nombre){
//     return{
//         uid:'abc456',
//         username: nombre,
//     }
// }

// const usuarioActivo= getUsuarioActivo('fernando')
// console.log(usuarioActivo)

const getUsuarioActivo= (nombre)=>({
    uid:'abc456',
    username: nombre,
})


const usuarioActivo= getUsuarioActivo('fernando')
console.log(usuarioActivo)