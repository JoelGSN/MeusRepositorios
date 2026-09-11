/*

  Atividade principal — Relatório da loja

  const produtos = [
      { id: 1, nome: "Mouse", categoria: "Periféricos", preco: 80, estoque: 10 },
      { id: 2, nome: "Teclado", categoria: "Periféricos", preco: 150, estoque: 5 },
      { id: 3, nome: "Monitor", categoria: "Monitores", preco: 900, estoque: 0 },
      { id: 4, nome: "Notebook", categoria: "Computadores", preco: 3500, estoque: 3 },
      { id: 5, nome: "Headset", categoria: "Periféricos", preco: 220, estoque: 8 }
  ];

  Nível 1
    - Exibir todos os produtos. ok
    - Criar um array somente com nomes. ok
    - Encontrar o produto de id 4. ok
    - Mostrar apenas produtos disponíveis. ok

  Nível 2
    - Produtos com preço superior a R$ 200. ok
    - Produtos da categoria “Periféricos”. ok
    - Verificar se existe produto sem estoque. ok
    - Verificar se todos os produtos custam mais de R$ 50. ok

    
  Nível 3
    - Calcular o valor total do estoque considerando preco × estoque. ok
    - Criar uma lista de objetos contendo nome e valorEstoque.
    - Aplicar 10% de desconto em todos sem alterar o array original.
    - Encontrar o produto mais caro.

*/

const produtos = [
      { id: 1, nome: "Mouse", categoria: "Periféricos", preco: 80, estoque: 10 },
      { id: 2, nome: "Teclado", categoria: "Periféricos", preco: 150, estoque: 5 },
      { id: 3, nome: "Monitor", categoria: "Monitores", preco: 900, estoque: 0 },
      { id: 4, nome: "Notebook", categoria: "Computadores", preco: 3500, estoque: 3 },
      { id: 5, nome: "Headset", categoria: "Periféricos", preco: 220, estoque: 8 }
  ];


// produtos.forEach(produtos => console.log(produtos.nome))

//1.1
console.log("\x1b[31m",'\n\nEX 1.1\n\n\n')




 console.log('For Aprimorado', produtos)




//1.2
console.log("\x1b[31m",'\n\nEX 1.2\n\n\n')

const n1 = produtos.map((el2) => {
    return el2.nome
})

console.log("\x1b[34m%s\x1b[0m",'Resposta 1 array com todos os nomes', n1);

//1.3
console.log("\x1b[31m",'\n\nEX 1.3\n\n\n')


console.log("\x1b[34m%s\x1b[0m",'Resposta 1 array com todos os nomes', n1[4]);


//1.4
console.log("\x1b[31m",'\n\nEX 1.4\n\n\n')


console.log('\nfilter: est > 0', produtos.filter((produto) => produto.estoque > 0))

//2.1
console.log("\x1b[31m",'\n\nEX 2.1\n\n\n')

console.log('\nfilter: preco > 200', produtos.filter((produto) => produto.preco > 200))

//2.2
console.log("\x1b[31m",'\n\nEX 2.2\n\n\n')

console.log('\nfilter: === perifericos', produtos.filter((produto) => produto.categoria === 'Periféricos'))

//2.3
console.log("\x1b[31m",'\n\nEX 2.3\n\n\n')

/* let p = null
for ( let produto of produtos){
  if(produto.estoque === 0)
    p = produto.nome
}
if(p){

  console.log('\n\nO produto', p, 'tem estoque zerado\n\n')


} */
console.log('some', produtos.some(produto => produto.estoque <=0))


//2.4
console.log("\x1b[31m",'\n\nEX 2.4\n\n\n')


console.log("todos os produtos custam mais que 50?", produtos.every((produto) => produto.preco > 50),'\n\n')

//3.1
console.log("\x1b[31m",'\n\nEX 3.1\n\n\n')




let soma = 0
for (let produto of produtos){
  soma += produto.preco * produto.estoque
}
console.log('total de estoque R$ ', soma)


//3.2
console.log("\x1b[31m",'\n\nEX 3.2\n\n\n')


const ls = produtos.map((produto) =>{
  return{
    nome: produto.nome,
    preco: produto.preco
  }
})

console.log('somente nomes e precos', ls )

//3.3
console.log("\x1b[31m",'\n\nEX 3.3\n\n\n')



pr = produtos.map((produto) => {

  return {
      ...produto,
      preco: +(produto.preco*0.9).toFixed(2)
    }
  
})
console.log('aumento', pr )


//3.4
console.log("\x1b[31m",'\n\nEX 3.4\n\n\n')


console.log('encontrar o produto mais caro', produtos.reduce(
  (acc, produto) => produto.preco > acc.preco ? produto : acc
, produtos[0])
)


