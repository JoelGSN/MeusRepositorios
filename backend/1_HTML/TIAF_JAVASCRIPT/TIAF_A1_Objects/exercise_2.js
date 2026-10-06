/*

  Exercício 2 — Conta bancária

  - Complete os métodos depositar(valor), sacar(valor) e mostrarSaldo().
  - O depósito deve aumentar o saldo.
  - O saque não pode ultrapassar o saldo disponível.
  - Mostre uma mensagem quando o saque não puder ser realizado.
  - Teste pelo menos dois depósitos e dois saques.

*/


const banco = {
  saldo: 0,
  titular: "Joel",
  exibir() {
    // console.log("saldo normal", `${this.saldo}`)
    return this.saldo
  },



  depositar(valor) {

    if (valor <= 0) {
      console.log("Impossível Depositar valor negativo")
    } else {
      this.saldo += valor
      this.exibir()
    }
    return this.saldo



  },


  sacar(valor) {
    if (valor <= 0) {
      console.log("Digite o valor positivo para saque")
    } else {
      if (this.saldo < valor) {
        console.log("Saldo Insuficiente para sacar isso tudo")

      } else {
        this.saldo -= valor
        this.exibir()
      }
    }
    return this.saldo
  }




}

console.log("1º +", banco.depositar(1000))
console.log("2º +", banco.depositar(30))
console.log("3º -", banco.sacar(30))
console.log("4º -", banco.sacar(500))
console.log("Saldo Final -", banco.exibir())




