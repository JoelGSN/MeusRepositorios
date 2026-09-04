/*

  Exercício 1 — Meu computador

    - Crie um objeto computador com marca, processador, memoriaRam, armazenamento e ligado.
    - Preencha dados fictícios ou reais.
    - Exiba apenas a marca e o processador.
    - Altere a quantidade de memória RAM.
    - Adicione a propriedade sistemaOperacional.
    - Remova uma propriedade e exiba o objeto novamente.

*/

const computador = {
  marca: 'Da Pêra',
  processador: 'Qualquer',
  memoria: 12,
  armazenamento: 50,
  so: "windows_3.11"
  

}


console.log("base", computador)

computador.so = 'Windows 3.15'
computador.memoria = 24

console.log("SO Trocado e mem add", computador)




document.querySelector('#marca').textContent += computador.marca
document.querySelector('#processador').textContent += computador.processador
document.querySelector('#memoriaRam').textContent += computador.memoria
document.querySelector('#armazenamento').textContent += computador.armazenamento
document.querySelector('#so').textContent += computador.so
