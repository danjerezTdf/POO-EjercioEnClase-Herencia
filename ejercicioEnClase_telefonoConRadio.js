"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ejercicioEnClase_telefono_1 = require("./ejercicioEnClase_telefono");
var telefonoConRadio = /** @class */ (function (_super) {
    __extends(telefonoConRadio, _super);
    function telefonoConRadio(pEstadoTelefono, pEstadoBateria, pFrecuenciaActual, pEstadoRadio) {
        var _this = _super.call(this, pEstadoTelefono, pEstadoBateria) || this;
        _this.frecuenciaActual = pFrecuenciaActual;
        _this.estadoRadio = pEstadoRadio;
        return _this;
    }
    telefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    telefonoConRadio.prototype.setFrecuenciaActual = function (frecuenciaActual) {
        this.frecuenciaActual = frecuenciaActual;
    };
    telefonoConRadio.prototype.prenderApagarRadio = function () {
        if (this.estadoRadio === true) {
            this.estadoRadio = false;
        }
        else {
            this.estadoRadio = true;
        }
    };
    return telefonoConRadio;
}(ejercicioEnClase_telefono_1.Telefono));
