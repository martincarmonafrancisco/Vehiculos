import { leerTeclado } from './entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- CREAR COCHE')
    console.log('2.- BORRAR COCHE')
    console.log('3.- VER COCHES')
    console.log('4.- ELEGIR COCHE')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('ELIJA UNA OPCIÓN') )
    return n
}

export const menucoche = async () => {
    let n: number
    console.log('\n')
    console.log('1.- VER COCHE')
    console.log('2.- STAR/STOP')
    console.log('3.- AÑADIR VELOCIDAD')
    console.log('4.- CALCULAR CONSUMO')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('ELIJA UNA OPCIÓN') )
    return n
}