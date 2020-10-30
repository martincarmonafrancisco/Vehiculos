export {Vehiculo} 
class Vehiculo {
    private _matricula : string
    private _consumo : number 
    private _arrancar : boolean
    private _velocidad : number

    constructor (matricula:string, consumo:number){
        this._matricula = matricula
        this._consumo = consumo
        this._arrancar = false 
        this._velocidad = 0
    }

    get matricula(){
        return this._matricula
    }

    get consumo(){
        return this._consumo
    }

    get arrancar(){
        return this._arrancar
    }

    arrancarCoche(){
        if(this._arrancar==false){
            this._arrancar=true
        } else {
            this._arrancar=false
            this._velocidad=0
        }
    }

    get velocidad(){
        return this._velocidad
    }

    set velocidad(vel:number){
        if(this._arrancar==false){
            throw 'ERROR: el coche no está arrancado!'
        } else {
            this._velocidad=vel
        }
    }
    
    consumido(horas:number){
        if(!this._arrancar || this._velocidad==0){
            throw 'ERROR: antes de calcular el consumo el coche debe estar en marcha'
        } else {
            return (this._velocidad*horas)*(this._consumo/100)
        }  
    }
    mostrarCoches(){
        return `El coche ${this.matricula} va a ${this._velocidad} KM/H y tiene un consumo de ${this._consumo}L cada 100 km`
    }
}