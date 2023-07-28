// //! Decorador es una función;
function printToConsole( constructor: Function ) {
  console.log( constructor );
}


// //! Decorador Factory es un decorador que retorna una función
const printToConsoleConditional = ( print: boolean = false ): Function => {
  if ( print ) {
    return printToConsole;
  } else {
    return () => {}
  }
}

const blockPrototype = function ( constructor: Function ) {
  // Object.seal( constructor );
  // Object.seal( constructor.prototype );
}

function CheckValidPokemonId(): Function {
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    // console.log({ target, propertyKey, descriptor });

    const originalMethod = descriptor.value;

    descriptor.value = ( id: number ) => {
      if ( id < 1 || id > 800 ) {
        return console.error( 'El id del pokemon debe estar entre 1 y 800' );
      } else {
        return originalMethod( id );
      }
    }
  }
}

// //! Dependiendo de donde coloquemos el decorador se recibirán los argumentos.
// //! Clase -> constructor
// //! Metodo -> target: any, propertyKey: string, descriptor: PropertyDescriptor
// //! Propiedad -> target: any, propertyKey: string

function readOnly( isWritable: boolean = true ): Function {
  return function( target: any, propertyKey: string ) {
    
    const descriptor: PropertyDescriptor = {
      get() {
        console.log( this, 'Yoelgetter' );
        return 'Yoel';
      }
      , set ( this, val ) {
        // console.log( this, val );
        Object.defineProperty( 
          this
          , propertyKey
          , {
            value: val
            , writable: !isWritable
            , enumerable: false
          }
        )
      }
    }

    return descriptor;
  }
}

// //* Decorador
// //* Trabajar con el << tsconfig.json >> en el item ( "experimentalDecorators": true )
// //* Aveces hay que reiniciar el NPM, cancelar la consola y "npm start" para que no muestre el error


// @printToConsole
@blockPrototype
@printToConsoleConditional( false )
export class Pokemon {
  
  @readOnly()
  public publicApi: string = 'https://pokeapi.co'

  constructor( public name: string ) {
  }

  @CheckValidPokemonId()
  savePokemonToDB( id: number ) {
    console.log( `Pokemon ${ id } guardado en la DB` );
  }
}