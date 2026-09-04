/*

  Atividade principal — Catálogo de produtos

  Crie um vetor com três produtos

  - Exiba o nome do segundo produto.
  - Exiba o preço do primeiro produto.
  - Altere o estoque do terceiro produto.
  - Adicione disponivel: true a um dos objetos.
  - Crie um novo produto baseado no primeiro usando spread, mas com outro id e outro preço.
  - Exiba todos os produtos no console.
  
*/
/* produtos = [

  {
  id: 1,
  nome: 'uva',
  preco: 4,
  estoque: 30

  },
    {
  id: 2,
  nome: 'banana',
  preco: 3,
  estoque: 20

  },

    {
  id: 3,
  nome: 'laranja',
  preco: 2,
  estoque: 10

  }


]

vlr = 0
vlr2 = 1
vlr3 = 2
console.log(produtos[vlr2].nome)
console.log(produtos[vlr].preco)
console.log(produtos[vlr3].estoque) */



const Produtos = [
  {
    id: 1,
    produto: `Morango`,
    preco: 30,
    categoria: `Comestível`,
    estoque: 10
  },
  {
    id: 2,
    produto: `Banana`,
    preco: 10,
    categoria: `Comestível`,
    estoque: 20
  },
  {
    id: 3,
    produto: `Manga`,
    preco: 20,
    categoria: `Comestível`,
    estoque: 5
  },
]

console.log(Produtos[1].nome);
console.log(Produtos[0].preco);
Produtos[2].estoque = 14;
Produtos[1].disponivel = true;

// A mesma coisa que for(let 1 = 0; i < Produtos.lenght; i++)
for (let produto of Produtos) {
  Produtos.disponivel = true;
}

const novoProduto = {
  ...Produtos[0],
  id: 4,
  preco: 36.90
}
Produtos.push(novoProduto);

console.log(Produtos);