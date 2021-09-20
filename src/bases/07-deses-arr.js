const personajes = ['Goku', 'Vegueta', 'Trunnks'];

const [,,p3]= personajes;
console.log(p3);

const retornaArreglo =()=>{
    return ['ABC', 123 ]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

//tarea
const useState = (valor)=>{
    return [valor, ()=>{console.log('hola mundo')}];
}

// const arr = useState('Goku');
// console.log(arr)
// arr[1]()

const [nombre, setNombre] = useState('goku')
console.log(nombre)
setNombre()