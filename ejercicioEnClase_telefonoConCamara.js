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
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(pEstadoTelefono, pEstadoBateria, pFlash) {
        var _this = _super.call(this, pEstadoTelefono, pEstadoBateria) || this;
        _this.usarFlash = pFlash;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        var foto = "Captura";
        return foto;
    };
    TelefonoConCamara.prototype.conFlash = function () {
        this.usarFlash = true;
    };
    TelefonoConCamara.prototype.sinFlash = function () {
        this.usarFlash = false;
    };
    return TelefonoConCamara;
}(ejercicioEnClase_telefono_1.Telefono));
