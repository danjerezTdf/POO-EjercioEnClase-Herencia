class Persona {
    protected nombre :string;
    protected apellido : string;
    protected dni : number;
    protected edad : number;

    constructor(pNombre :string, pApellido :string,pDni :number,pEdad :number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDni;
        this.edad = pEdad;
    }

    setNombre(nombre :string){
        this.nombre = nombre;
    }
    getNombre():string{
        return this.nombre;
    }

    setApellido(apellido :string){
        this.apellido =apellido;
    }
    getApellido():string{
        return this.apellido;
    }
    setDni(dni :number){
        this.dni = dni;
    }
    getDni():number{
        return this.dni;
    }
    setEdad (edad :number){
        this.edad = edad;
    }
    getEdad():number{
        return this.edad;
    }
}

class Alumno extends Persona{
    private notaMatematica:number;
    private notaLiteratura: number;
    private estado : boolean;

    constructor(pNombre :string,pApellido:string,pDni:number,pEdad :number,pNotaMatematica:number,pNotaLiteratura:number,pEstado:boolean){
        super (pNombre,pApellido,pDni,pEdad);
        this.notaMatematica = pNotaMatematica;
        this.notaLiteratura = pNotaLiteratura;
    }

    setNotaMatematica(notaMatematica:number) {
        this.notaMatematica = notaMatematica;
    }
    getnotaMatematica():number {
        return this.notaMatematica;
    }
    setNotaLiteratura(notaLiteratura:number) {
        this.notaLiteratura = notaLiteratura;
    }
    getNotaLiteratura():number{
        return this.notaLiteratura;
    }
    changeEstado ():void {
        if (this.estado === true){
            this.estado = false;
            console.log("Se Expulso Alumno");
        }else{ 
            this.estado = true;
            console.log("Se Matriculo Alumno");
        }
    }
}