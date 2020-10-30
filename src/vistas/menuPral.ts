import { leerTeclado } from './entradaTeclado'

export const menu = async () => {
    let num: number
    console.log('\n')
    console.log('1.- CREAR COCHE')
    console.log('2.- BORRAR COCHE')
    console.log('3.- VER COCHES')
    console.log('4.- ELEGIR COCHE')
    console.log('0.- SALIR')
    num = parseInt( await leerTeclado('ELIJA UNA OPCIÓN') )
    return num
}

export const menucoche = async () => {
    let num: number
    console.log('\n')
    console.log('1.- VER COCHE')
    console.log('2.- STAR/STOP')
    console.log('3.- AÑADIR VELOCIDAD')
    console.log('4.- CALCULAR CONSUMO')
    console.log('0.- SALIR')
    num = parseInt( await leerTeclado('ELIJA UNA OPCIÓN') )
    return num
}