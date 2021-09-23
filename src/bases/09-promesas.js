import {getHeroById} from './bases/08-imp-exp'


// const promesa = new Promise( (resolve, reject )=>{

//     setTimeout(() => {
//         // console.log('2 segundos despues')
//         const heroe= getHeroById(2);
//         // console.log(heroe);

//         // resolve(heroe);
//         reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then( (heroe)=>{
//     console.log('heroe', heroe)
//     console.log('then de la promesa')
// } )
// .catch(err => console.warn( err ))

const getHeroByIdAsync = (id)=>{

    return new Promise( (resolve, reject )=>{

            setTimeout(() => {
                // console.log('2 segundos despues')
                const heroe= getHeroById(id);
                // console.log(heroe);
                
                if(heroe){
                    resolve(heroe);
                }else{
                    reject('No se pudo encontrar el héroe');
                }
            }, 2000);
        });
        
    
    
}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.warn)
