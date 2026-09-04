const produtos = [
    { id: 1, nome: 'mouse', preco: 80, estoque: 10},
    { id: 2, nome: 'teclado', preco: 150, estoque: 5},
    { id: 3, nome: 'monitor', preco: 900, estoque: 0},
    { id: 4, nome: 'HeadSet', preco: 200, estoque: 7},
    { id: 5, nome: 'Webcam', preco: 150, estoque: 3},

]

console.log('Produtos normalmente', produtos)
console.log('Produtos só o 1º ', produtos[0])
produtos.push(
    { id: 5, nome: 'Webcam', preco: 150, estoque: 3},
    { id: 5, nome: 'Webcam', preco: 150, estoque: 3},
)

produtos.pop()


console.log('Produtos pós add', produtos)

for( let i = 0; i<produtos.length; i++){
    console.log("Produto for - ", produtos[i].nome, 'Preco do Produto R$',produtos[i].preco )
    
}

for(let produto of produtos) {

    console.log('For Aprimorado', produto.nome)
}

console.log('\n\n For Each\n\n')


produtos.forEach(produtos => console.log(produtos.nome))

console.log('\n\n Zz<==>zZ \n\n')


produtos.forEach((produtos) => {
    console.log(produtos.nome)
    console.log(produtos.estoque)
    console.log(produtos.preco)
    console.log('\n\n V<==>V \n\n')
})

// forma com foreach

console.log('\n\nFor de Foreach\n\n')
const nomes = []

produtos.forEach((p) => {
nomes.push(p.nome)
})
console.log('Exibir Nomes', nomes)


// forma com for tradicional 

console.log('\n\nFor tradicional\n\n')
const nomes2 = []

for( let i = 0; i<produtos.length; i++){
    nomes2.push(produtos[i].nome )
    
}
console.log('Exibir Nomes', nomes2)

// mapeamento 

console.log('\n\nMapeamento\n\n')

const precos = produtos.map((elemento) => {
    return elemento.preco
})

console.log('Preços', precos)