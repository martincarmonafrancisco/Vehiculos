import { Vehiculo } from './vehiculo/vehiculo'
import { menu, menucoche } from './vistas/menuPral'
import { leerTeclado } from './vistas/entradaTeclado'

const main = async() => {
    let coches: Array<Vehiculo> = new Array()
    let num: number 
    do {
        num = await menu()
        switch(num){
            case 1:
                console.log('Usted está creando un nuevo coche')
                let matricula:string , consumo:number
                matricula=await leerTeclado('Por favor, introduzca la matrícula del coche (ejemplo: 0000AAA)')
                consumo = parseInt( await leerTeclado('Por favor, introduzca el consumo del vehículo (L por 100KM)'))
                let coche=new Vehiculo(matricula, consumo)
                let exist = false
                coches.forEach(Coche => {
                    if (coche.matricula==Coche.matricula){
                        exist=true
                    }
                });
                if (exist){
                    console.log('ERROR: el coche ya está creado!')
                } else{
                    coches.push(coche)
                    console.log('Coche creado correctamente')
                }
                break

            case 2:
                console.log('ATENCIÓN: va a borrar un coche')
                if (coches.length==0){
                    console.log('ERROR: No existen coches!')
                } else {
                    console.log('lista de coches:')
                    coches.forEach(Coche => {
                        console.log(`${Coche.mostrarCoches()}`)
                    });
                    let m2:String
                    m2=await leerTeclado('Por favor, Introduzca la matrícula del coche a borrar')
                    let e:boolean=false
                    let index=0
                    coches.forEach(Coche => {
                        if (m2==Coche.matricula){
                            index=coches.indexOf(Coche)
                            e=true
                        }
                        console.log('ATENCIÓN: coche borrado!')
                    })
                    if (e){
                       coches.splice(index,1)
                    } else {
                        console.log('ERROR: coche inexistente!')
                    }
                }
                break

            case 3:
                if (coches.length==0){
                    console.log('ERROR: no existen coches!')
                } else {
                    console.log('Mostrando coches')
                    coches.forEach(Coche => {
                        console.log(`${Coche.mostrarCoches()}`)
                    });
                }
                break

            case 4:
                if (coches.length==0){
                    console.log('ERROR: No existen coches!')
                } else {
                    let m1:string
                    console.log('Por favor, elija una matrícula de un coche')
                    coches.forEach(Coche => {
                        console.log(`${Coche.mostrarCoches()}`)
                    });
                    m1=await leerTeclado('Por favor, introduzca la matrícula de un coche')
                    let index:number=-1
                    coches.forEach(Coche => {
                        if(Coche.matricula==m1){
                           index=coches.indexOf(Coche)
                        }else{
                            console.log('ERROR: coche inexistente!')
                        }
                    });
                    if(index!=-1){
                        let num2:number
                        do {
                            num2 = await menucoche()
                            switch(num2){
                                case 1:
                                    console.log('Mostrando el coche seleccionado...')
                                    console.log(coches[index].mostrarCoches())
                                    break
                                case 2:
                                    if(coches[index].arrancar){
                                        console.log('Apagando coche')
                                        coches[index].arrancarCoche()
                                    }else{
                                        console.log('Encendiendo coche')
                                        coches[index].arrancarCoche()
                                    }
                                    break
                                case 3:
                                    let vel:number
                                    vel=parseInt(await leerTeclado("Por favor, introduzca la velocidad del vehículo"))
                                    try {
                                      coches[index].velocidad=vel 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let horas:number
                                    horas=parseInt(await leerTeclado("Por favor, introduzca las horas que lleva circulando a la velocidad actual"))
                                    console.log(`${coches[index].consumido(horas)}`)
                                    break
                                case 0:
                                    console.log('Listado de coches...')
                                    break
                                default:
                                    console.log("ERROR: opción incorrecta")
                                    break
                            }
                        } while (num2!=0);
                    }
                }
                break
            case 0:
                console.log('Gracias por usar nuestro programa')
                break
            default:
                console.log("ERROR: opción incorrecta")
                break
        }
    } while (num!=0);
}
main()