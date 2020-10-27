export class Coche {
    private _matricula : string
    private _consumo : number 
    private _arrancado : boolean
    private _velocidad : number

    public constructor (matricula:string, consumo:number){
        this._matricula = matricula
        this._consumo = consumo
        this._arrancado = false 
        this._velocidad = 0
    }

    public get matricula(){
        return this._matricula
    }

    public get consumo(){
        return this._consumo
    }

    public get arrancado(){
        return this._arrancado
    }

    public botonArrancado(){
        if(this._arrancado==false){
            this._arrancado=true
        }else{
            this._arrancado=false
            this._velocidad=0
        }
    }

    public get velocidad(){
        return this._velocidad
    }

    public set velocidad(n:number){
        if(this._arrancado==false){
            throw 'ERROR, no puedes cambiar la velocidad a un coche que no está arrancado'
        } else {
            this._velocidad=n
        }
    }

    public consumido(t:number){
        return (this._velocidad/t)*(this._consumo/100)
    }

    public imprimirCoche(){
        return `El coche con matricula ${this.matricula} va a ${this._velocidad} km/h y consume ${this._consumo} L cada 100 km`
    }

}