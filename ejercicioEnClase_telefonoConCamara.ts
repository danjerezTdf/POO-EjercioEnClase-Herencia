import {Telefono} from './ejercicioEnClase_telefono'

class TelefonoConCamara extends Telefono{
    private usarFlash:boolean;

    constructor(pEstadoTelefono:boolean,pEstadoBateria:number,pFlash:boolean){
        super(pEstadoTelefono,pEstadoBateria);
        this.usarFlash = pFlash;
    }

    public sacarFoto():string{
        let foto:string = "Captura"
        return foto;
    }

    public conFlash():void{
        this.usarFlash = true;
    }
    public sinFlash():void{
        this.usarFlash = false;
    }
}

