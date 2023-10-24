import _ from 'underscore';
//validaciones
//esto sirve para decir nuestros propios errores
//para no tener los errores propios de js que es dificil de depurar
//que si no viene esto la funcion no funciona o algo asi
//y tambien es util para que cuando venga otro desarrollador sepa que tipo de objetos y argumentos
//son lo que esta esperando y que tipo de retorno esta esperando
/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo:['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo:['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
//si el tipos de carta no viene por eso ponemos la negacion entonces
//que diga que tiposdecarta es obligatorio
//tenemos que asegurarnos que esto funcione, si estuvieramos en tyscript esto no hace falta colocarlo
//esos errores vendrian automaticamente a la hora de escribir
    if ( !tiposDeCarta || tiposDeCarta.length === 0  ) 
    throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0  ) 
    throw new Error('TiposEspeciales es obligatorio como un arreglo de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
//esta es la exportacion por defecto de crear deck
//export default crearDeck;