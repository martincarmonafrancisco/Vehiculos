import { Coche } from './models/coche'
import { menu, menu2 } from './utility/menu'
import { leerTeclado } from './utility/lecturaTeclado'

const main = async() => {
    let coches: Array<Coche> = new Array()
    let n: number 
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Usted está creando un nuevo coche')
                let matricula:string , consumo:number
                matricula=await leerTeclado('Introduzca la matrícula del coche (XXXXNNN)')
                consumo = parseInt( await leerTeclado('Introduzca el consumo del vehículo(Litros cada 100KM)'))
                let coche=new Coche(matricula, consumo)
                let existe = false
                coches.forEach(Coche => {
                    if (coche.matricula==Coche.matricula){
                        existe=true
                    }
                });
                if (existe){
                    console.log('Este coche ya existe')
                } else{
                    coches.push(coche)
                }
                break
            case 2:
                if (coches.length==0){
                    console.log('No existen coches creados')
                } else {
                    console.log('Usted está imprimiendo los coches')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimirCoche()}`)
                    });
                }
                break
            case 3:
                console.log('Usted va a borrar un coche')
                if (coches.length==0){
                    console.log('No existen coches creados')
                } else {
                    console.log('Estos son los coches que existen')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimirCoche()}`)
                    });
                    let m2:String
                    m2=await leerTeclado('Introduzca la matrícula del coche que quiera borrar')
                    let e:boolean=false
                    let index=0
                    coches.forEach(Coche => {
                        if (m2==Coche.matricula){
                            index=coches.indexOf(Coche)
                            e=true
                        }
                    })
                    if (e){
                       coches.splice(index,1)
                    } else {
                        console.log('No existe ese coche')
                    }
                }
                break
            case 4:
                if (coches.length==0){
                    console.log('No existen coches creados')
                } else {
                    let m1:string
                    console.log('Elija usted la matrícula de un coche')
                    coches.forEach(Coche => {
                        console.log(`${Coche.imprimirCoche()}`)
                    });
                    m1=await leerTeclado('Introduzca la matrícula del coche')
                    let index:number=-1
                    coches.forEach(Coche => {
                        if(Coche.matricula==m1){
                           index=coches.indexOf(Coche)
                        }else{
                            console.log('Este coche no existe')
                        }
                    });
                    if(index!=-1){
                        let n2:number
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1:
                                    console.log('Viendo el coche elegido')
                                    console.log(coches[index].imprimirCoche())
                                    break
                                case 2:
                                    if(coches[index].arrancado){
                                        console.log('Apagando coche')
                                        coches[index].botonArrancado()
                                    }else{
                                        console.log('Encendiendo coche')
                                        coches[index].botonArrancado()
                                    }
                                    break
                                case 3:
                                    let v:number
                                    v=parseInt(await leerTeclado("Introduzca la nueva velocidad del vehículo"))
                                    try {
                                      coches[index].velocidad=v 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let t:number
                                    t=parseInt(await leerTeclado("Introduzca el tiempo en horas que lleva el vehículo a la velocidad actual"))
                                    console.log(`${coches[index].consumido(t)}`)
                                    break
                                case 0:
                                    console.log('\n--VOLVIENDO A LA LISTA DE COCHES--')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (n2!=0);
                    }
                }
                break
            case 0:
                console.log('\n--ADIÓS--')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n!=0);
}

main()