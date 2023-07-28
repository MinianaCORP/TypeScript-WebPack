export const printObject = ( argument: any ) => {
  console.log( argument );
}

// //! Función tradicional
export function genericFunctionBase( argument: any ) {
  return argument;
}

// //! Función genérica
// //? tipo tradicional
// export function genericFunction<T>( argument: T ): T {
//   return argument;
// }

// //? tipo simplificada
// export const genericFunction = <T>( argument: T ) : T => {
//   return argument
// };

// //? tipo recontra simplificada, cuando todo entra en una línea
export const genericFunction = <T>( argument: T ) : T => argument;