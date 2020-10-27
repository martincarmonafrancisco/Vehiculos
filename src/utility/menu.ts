import { leerTeclado } from '../utility/lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- CREAR COCHE')
    console.log('2.- VER COCHES')
    console.log('3.- BORRAR COCHE')
    console.log('4.- ELEGIR COCHE')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

export const menu2 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- VER COCHE')
    console.log('2.- ENCENDER/APAGAR COCHE')
    console.log('3.- CAMBIAR VELOCIDAD COCHE')
    console.log('4.- CALCULAR CONSUMO COCHE')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}