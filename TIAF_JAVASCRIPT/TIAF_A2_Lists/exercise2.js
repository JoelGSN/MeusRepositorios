/*

  Exercício — Filtros

  - Produtos acima de R$ 100.
  - Produtos com estoque disponível.
  - Produtos sem estoque.
  - Produtos com preço entre R$ 100 e R$ 500.

*/

const produtos = [
    { id: 1, nome: 'mouse', preco: 100, estoque: 10},
    { id: 2, nome: 'teclado', preco: 150, estoque: 5},
    { id: 3, nome: 'monitor', preco: 900, estoque: 0},
    { id: 4, nome: 'HeadSet', preco: 200, estoque: 7},
    { id: 5, nome: 'Webcam', preco: 150, estoque: 3},

]



console.log("\x1b[34m%s\x1b[0m", "\n\nFiltrando valores\n\n");

console.log('\nfilter: > R$ 100', produtos.filter((produto) => produto.preco > 100))

console.log('\nfilter: est > 0', produtos.filter((produto) => produto.estoque > 0))

console.log('\nfilter: est = 0', produtos.filter((produto) => produto.estoque === 0))

console.log('\nfilter: entre 100 e 500', produtos.filter((produto) => produto.preco >= 100 && produto.preco <= 500 ))


