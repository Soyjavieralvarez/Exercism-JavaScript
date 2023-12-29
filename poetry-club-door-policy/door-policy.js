// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
 // toUpperCase para aplicar en mayúscula la primera letra 

 const CAPITALIZE_LETTERS = word.toUpperCase();

 // slice para quedarnos solo con la primera letra 

 const LETTERS = CAPITALIZE_LETTERS.slice(1);

 // nos quedamos con esa posición 

 const FIRST_LETTER = CAPITALIZE_LETTERS[0];

 // toLowerCase para dejar el resto de letras en minúsculas 

 const LETOVER_LETTERS = LETTERS.toLowerCase()

 // encadenamos todo 

 let doorPassword = FIRST_LETTER + LETOVER_LETTERS;

 return doorPassword

}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  // Utilizamos el método .trim para eliminar los espacios en blanco, tanto al principio como al final

  const RESPONSE_WITHOUT_SPACES = line.trim();

  // length para saber la longitud del string

  let responseLength = RESPONSE_WITHOUT_SPACES.length;

  // Nos quedamos con la última posición de ese string, restando 1

  let lastPosition = responseLength -1;

  // Con el método slice nos quedamos solo con la última letra 

  let lastLetter = RESPONSE_WITHOUT_SPACES.slice(lastPosition);

  return lastLetter


  
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {

  // Convertimos la primera letra de la palabra a mayúscula
  const CAPITALIZE_LETTERS = word.toUpperCase();

  // Nos quedamos con la primera letra 

  const LETTERS = CAPITALIZE_LETTERS.slice(1);

  // Guardamos esa posición 

  const FIRST_LETTER = CAPITALIZE_LETTERS[0];

  // Dejamos el resto en minúscula 

  const LETOVER_LETTERS = LETTERS.toLocaleLowerCase();

  let backDoor = FIRST_LETTER + LETOVER_LETTERS

  return backDoor + ", please"
}
