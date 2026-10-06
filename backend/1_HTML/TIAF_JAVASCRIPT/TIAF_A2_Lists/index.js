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

console.log("\x1b[34m%s\x1b[0m", '\n\nFor de Foreach\n\n')
const nomes = []

produtos.forEach((p) => {
nomes.push(p.nome)
})
console.log('Exibir Nomes', nomes)


// forma com for tradicional 

console.log("\x1b[34m%s\x1b[0m", '\n\nFor tradicional\n\n')
const nomes2 = []

for( let i = 0; i<produtos.length; i++){
    nomes2.push(produtos[i].nome )
    
}
console.log('Exibir Nomes', nomes2)

// mapeamento 

console.log("\x1b[34m%s\x1b[0m", '\n\nMapeamento\n\n')

const precos = produtos.map((elemento) => {
    return elemento.preco
})

console.log('Preços', precos)

// filtrando valores
console.log("\x1b[34m%s\x1b[0m", "\n\nFiltrando valores\n\n");



const filtrados = []

for (let produto of produtos){
    if(produto.estoque > 0){
        filtrados.push(produto)
    }
}
console.log('filtrados', filtrados)


console.log('\nfilter:', produtos.filter((produto) => produto.estoque > 0 && produto.estoque < 8 ))


// encontrando valores ( find e findindex)
console.log("\x1b[34m%s\x1b[0m", '\n\nencontrando valores ( find e findindex)\n\n');



let p = null

for ( let produto of produtos){
    if(produto.nome === 'monitor'){
        p = produto
    }
}

if(p) {
    console.log('Produto Encontrado', p)
}

let ip = -1

for( let i = 0; i<produtos.length; i++){
    if(produtos[i].nome === 'monitor'){
        ip = i
    }
    
}


if(ip) {
    console.log('o Index do Produto Encontrado é igual a ', ip)
}


console.log("\x1b[34m%s\x1b[0m", 'Find', produtos.find(produto => produto.nome === 'monitor'))
console.log("\x1b[34m%s\x1b[0m", 'FindIndex', produtos.findIndex(produto => produto.nome === 'monitor'))




// verificando uma condicao ( se um tem, ou se todos tem) ( some e every)
console.log("\x1b[34m%s\x1b[0m", "\n\nverificando uma condicao ( se um tem, ou se todos tem) ( some e every)\n\n");

console.log('some:', produtos.some((produto) => produto.estoque > 0))
console.log('Every:', produtos.every((produto) => produto.estoque > 0))




// acumulando ( reduce )
console.log("\x1b[34m%s\x1b[0m", "\n\nacumulando ( reduce )\n\n");

let soma = 0
for( let produto of produtos){
    soma+= produto.preco * produto.estoque
}
console.log('total de estoque R$ ', soma)

console.log('Reduce = total de estoque R$ ', produtos.reduce((acc, produto) => acc + (produto.estoque * produto.preco),0))