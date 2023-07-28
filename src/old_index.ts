// //? Export específico
import { Hero } from "./classes/Hero";

// //? Export general y default
import * as HeroClasses from "./classes/Hero";
import powers from "./data/powers";



import { getPokemon } from "./generics/get-pokemon";
import { genericFunction, printObject } from "./generics/generics";

// //* Importación individual
// import { HeroI } from './interfaces/hero';
// import { VillianI } from "./interfaces/villian";

// //* Importación con base en un "index.ts"
import { HeroI, VillianI } from "./interfaces";

const ironman = new Hero( 'Ironman', 1, 55 );
const ironman2 = new HeroClasses.Hero( 'Ironman', 1, 55 );

// //! import y export
// console.log( ironman, ironman2 );
// console.log( powers );

// //! Genérico
// console.log( genericFunction( 1 ).toFixed(2) );
// console.log( genericFunction( 'Hola' ).toUpperCase() );
// console.log( genericFunction( new Date() ).getDay() );

const deadpool = {
  name: 'Deadpool'
  , realName: 'Wade Winston Wilson'
  , dangerLevel: 130
}

// console.log( genericFunction<HeroI>( deadpool ).realName );
// console.log( genericFunction<VillianI>( deadpool ).dangerLevel );



// //! Promesa
// //! Utilizando << npm i axios >>
getPokemon( 1 )
  .then( pokemon => console.log( pokemon.sprites.front_default ) )
  .catch( err => console.error( err ) )
  .finally( () => console.log( 'Fin de getPokemon' ) );

