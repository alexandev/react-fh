const persona={
    nombre:'tony',
    apellido:'stark',
    edad:45,
    direccion:{
        ciudad:'NY',
        zip:55321321,
        lat:14.444444,
        lng:19.9999,
    }
}

console.log(persona)

const persona2={...persona}
persona2.nombre='Peter'

console.log(persona)
console.log(persona2)
