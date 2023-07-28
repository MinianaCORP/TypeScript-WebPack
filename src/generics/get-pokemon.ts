import axios from "axios";
import { Pokemon } from '../interfaces';




// //! async transforma una función a promesa
// //! Sin AXIOS
// export const getPokemon = async () => {
//   console.log( 'Hola Pokemon' );

  
//   // //* Lanza el catch
//   if ( true ) throw new Error( `Esto es un error manual` );

//   return 1;
// }

// //! con AXIOS
// //! Para el tipado automático existen JSON converter como << quicktype.io >>
export const getPokemon = async ( pokemonId: number ) : Promise<Pokemon> => {
  
  // //*El genérico no lo transforma, solo le indica el tipo, puede que el tipo tenga atributos que la repuesta no y muestre "undefinded"
  const { data } = await axios.get<Pokemon>( `https://pokeapi.co/api/v2/pokemon/${ pokemonId }` )
  return data;
}


