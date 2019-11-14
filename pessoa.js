var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.olamundo = function () {
        return "Olá mundo! 2DS2";
    };
    return Pessoa;
}());
var p = new Pessoa();
document.getElementById("texto").textContent = p.olamundo();
