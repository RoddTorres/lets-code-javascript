console.log("CALCULADORA - ATIVIDADE 4");

const MODULE = (function () {

    var calcular = {resultado: 0};
    var num;

    calcular.somar = function(num) {
        if (num === 0) {
            return calcular.resultado;
        } else {
            return calcular.resultado += num;
        }
    }

    calcular.subtrair = function(num) {
        if (num === 0) {
            return calcular.resultado;
        } else {
            return calcular.resultado -= num;
        }
    }

    calcular.multiplicar = function(num) {
        if (num === 1) {
            return calcular.resultado;
        } else if (num === 0) {
            return calcular.resultado = 0;
        } else {
            return calcular.resultado *= num;
        }
    }

    calcular.dividir = function(num) {
        if (num === 0) {
            console.log('Impossível dividir por 0. Escolha outro número');
            return calcular.resultado;
        } else if (num === 1) {
            return calcular.resultado;
        } else {
            return calcular.resultado /= num;
        }
    }

    calcular.raizQuadrada = function() {
        return Math.sqrt(calcular.resultado);
    }

    calcular.raizCubica = function() {
        return Math.cbrt(calcular.resultado);
    }

    calcular.limpar = function() {
        return calcular.resultado = 0;
    }

    calcular.final = function() {
        return calcular.resultado;
    }

    return {
        sum: calcular.somar,
        sub: calcular.subtrair,
        mult: calcular.multiplicar,
        div: calcular.dividir,
        rq: calcular.raizQuadrada,
        rc: calcular.raizCubica,
        fim: calcular.final
    };
})();

console.log(MODULE);