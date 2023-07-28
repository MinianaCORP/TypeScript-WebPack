// //! --------------------------------------------------------------------------
// //! UNA ARROW FUNCTION CAMBIA EL THIS a diferencia de la FUNCIÓN TRADICIONAL
// //! --------------------------------------------------------------------------

// //! Un decorador solo es una función que se utiliza para expandir funcionalidades para un objeto << se utiliza "@" >> que se ejecuta en la transpilación o ejecución del código

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon( 'Charmander' );

// charmander.savePokemonToDB(20);

// charmander.publicApi = 'Nuevo'; //<- No se puede asignar por el decorador << @readOnly >>

console.log( charmander );