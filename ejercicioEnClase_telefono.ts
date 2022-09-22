export class Telefono{
    private estaPrendido:boolean;
    private bateriaActual:number;

    constructor(pEstado:boolean, pBateriaActual:number){
        this.estaPrendido = pEstado;
        this.bateriaActual = pBateriaActual;
    }
    public mandarMensaje():string{
        let mensaje :string ="Mensaje Enviado";
        return mensaje;
    }
    public hacerLlamada():string{
        let llamada:string ="Llamando...";
        return llamada;
    }
    public prenderApagar():void{
        if (this.estaPrendido===true){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=true;
        }
    }
    public getBaterial():number{
        return this.bateriaActual;
    }
}

let telefonoBase = new Telefono (false,80);

console.log(telefonoBase.hacerLlamada());
console.log(telefonoBase.mandarMensaje());
console.log(telefonoBase.getBaterial());
