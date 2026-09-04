/*

  Exercício — Transformações com map

  - Crie um array apenas com os nomes. ok
  - Crie um array apenas com os preços. ok
  - Crie uma lista com os nomes em maiúsculas. ok
  - Crie uma nova lista aplicando aumento de 10% em todos os preços. ok
  - Crie objetos contendo apenas nome e preco. 

*/

let produtos = [
    { id: 1, nome: 'mouse', preco: 80, estoque: 10},
    { id: 2, nome: 'teclado', preco: 150, estoque: 5},
    { id: 3, nome: 'monitor', preco: 900, estoque: 0},
    { id: 4, nome: 'HeadSet', preco: 200, estoque: 7},
    { id: 5, nome: 'Webcam', preco: 150, estoque: 3},

]


const nome = produtos.map((el1) => {
    return el1.nome;
})

console.log('Nomes', nome)



const precos = produtos.map((el2) => {
    return el2.preco
})

console.log('Preços', precos)

const nome3 = produtos.map((el3) => {
    return el3.nome.toUpperCase();
})

console.log('Maiúsculos', nome3)

const aumento = produtos.map((el4) => {
    return el4.preco += ((el4.preco *= 10)/100)
})

console.log('Aumento', aumento)

const nmpr = produtos.map((el5) => {
    return el5.nome && "||" && el5.preco
    
})

console.log('Nome e Preco', nome, 'Precos', precos)


// correção aumento
console.log('\n\n\ncorreção\n\n\n')


const maiusculas = produtos.map((produto) =>{
  return produto.nome.toUpperCase()
})
console.log('Maiúscula', maiusculas)


produtos = produtos.map((produto) => {

  return {
      ...produto,
      preco: +(produto.preco*1.10).toFixed(2)
    }
  
})
console.log('aumento', produtos )


const lista = produtos.map((produto) =>{
  return{
    nome: produto.nome,
    preco: produto.preco
  }
})

console.log('Ver nome e preco', lista )