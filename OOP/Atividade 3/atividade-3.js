console.log("//// Conta Bancária \\\\");

/*
1 - Implementar um método, onde a cada operação executada (ex. saque, dep, transf) ela deve ser registrada
dentro do objeto (lançamentos).

2 - Implementar um método, onde todos os lançamentos sejam exibidos (extrato).
*/

function Conta(agencia=0, numero=0, digito=0, saldo=0, titular=null, 
    tipo="CC") {  
    this.agencia = agencia;
    this.numero = numero;
    this.digito = digito;
    this.saldo = saldo;
    this.titular = titular;
    this.tipo = tipo;
    this.lancamentos = [];
}

Conta.prototype.banco = "Bamerindus";

Conta.prototype.extrato = function () {
    console.log(`---Conta de ${this.titular}---`);

    let extrato = `Extrato: \nSaldo atual: ${this.saldo} `;
    
    for (i in this.lancamentos) {
        let extrato2 = `${this.lancamentos[i]}`;
        extrato += extrato2;
    }
    return extrato;
}

Conta.prototype.lancar = function(valor, lancamentos, saldo, contaDestino = null, contaOrigem = null) {
    this.valor = valor;
    this.contaOrigem = contaOrigem;
    this.contaDestino = contaDestino;
    this.lancamentos = lancamentos;
    this.saldoFinal = saldo;
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.lancamentos.push(`Depósito = ${this.lancar(valor, this.saldo, this.conta, this.contaOrigem)}`);
    return this.saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo >= valor) {
       return this.saldo -= valor;
    }
    return "Saldo insuficiente";
}

Conta.prototype.transferir = function (valor, conta) {
    this.sacar(valor);
    conta.depositar(valor);
    return this.saldo;
}

Conta.prototype.lancamentos = function () {
    
}

const contaJoao = new Conta(336, 1234, 0, 1500, "João");
const contaMaria = new Conta(336, 4567, 8, 3000, "Maria", "CP");