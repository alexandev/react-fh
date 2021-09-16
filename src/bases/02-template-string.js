const nombre = 'Alexander';
const apellido= 'Herrera';

const nombreCompleto = `
${nombre} 
${apellido}
${1+1}
`;

console.log(nombreCompleto)

function getSaludo(){
    return 'Hola mundo';
}

console.log(`Este es un texto: ${getSaludo()}`);