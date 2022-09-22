import { Telefono } from "./ejercicioEnClase_telefono";

class telefonoConRadio extends Telefono{
    private frecuenciaActual: number;
    private estadoRadio:boolean;

    constructor(pEstadoTelefono:boolean,pEstadoBateria:number,pFrecuenciaActual:number,pEstadoRadio:boolean) {
        super (pEstadoTelefono,pEstadoBateria)
        this.frecuenciaActual = pFrecuenciaActual;
        this.estadoRadio = pEstadoRadio;
    }

    public verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }
    public setFrecuenciaActual(frecuenciaActual:number){
        this.frecuenciaActual = frecuenciaActual;
    }
    public prenderApagarRadio():void{
        if (this.estadoRadio===true){
            this.estadoRadio=false;
        }else{
            this.estadoRadio=true;
        }
    }
}
