"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(pEstado, pBateriaActual) {
        this.estaPrendido = pEstado;
        this.bateriaActual = pBateriaActual;
    }
    Telefono.prototype.mandarMensaje = function () {
        var mensaje = "Mensaje Enviado";
        return mensaje;
    };
    Telefono.prototype.hacerLlamada = function () {
        var llamada = "Llamando...";
        return llamada;
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Telefono.prototype.getBaterial = function () {
        return this.bateriaActual;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
var telefonoBase = new Telefono(false, 80);
console.log(telefonoBase.hacerLlamada());
console.log(telefonoBase.mandarMensaje());
console.log(telefonoBase.getBaterial());
