import heroes, {owners} from '../data/heroes'

console.log(heroes)
console.log(owners)

export const getHeroById = (id) => heroes.find (heroe=>heroe.id===id)

// console.log(getHeroById(2))


export const getHeroesByOwner = ( owner ) => heroes.filter(heroe => heroe.owner === owner );

// console.log(getHeroesByOwner('DC'))