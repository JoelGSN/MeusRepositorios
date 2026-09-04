// const nome = 'Teclado'
// const preco = 29.90
// const estoque = 10

const produto = {
    nome: 'Teclado',
    preco: 29.90,
    estoque: 10,
    Caracteristicas:{
        cor: 'vermelho',
        conexao: "USB",
    },
    embalagem:['Plastico Bolha','caixa de papelão','Adesivo'],

    /* exibir() {
        return console.log("itens", `${this.nome} - R$ ${this.preco} - ${this.estoque}`)
    } */
}

// produto.exibir()

// console.log(produto['nome'])

// console.log(produto)

// produto.nome = "Mouse"
produto.marca = 'Logitec'
// produto.disponivel = true


console.log(produto)
// delete produto.disponivel
for(let embalagem of produto.embalagem){
    console.log('Embalagem: > ',embalagem)
}

const {nome, estoque, preco } = produto
console.log("Desestruturação" , nome, estoque)

function exibirproduto({nome, estoque, preco}){
    console.log('Desestruturação em função: ',"Produto", nome,"Qtd em Estoque", estoque,"Vlr", preco)
}
exibirproduto(produto)

/* console.log('deletando a chave disponível: ', produto)
 */
console.log(produto.Caracteristicas.conexao, produto.Caracteristicas.cor)

const produtoatualizado = {
    ...produto,
    nome: 'Mouse',
    estoque: 50

}

const atualizarproduto2 = structuredClone(produto)





produto.embalagem.push("Superbonder")
console.log("Embalagen Atualizada", produto.embalagem)
produto.embalagem.pop()
console.log("Embalagen Atualizada", produto.embalagem)
console.log('Operador Spread', produtoatualizado)
console.log("produto atualizado", produtoatualizado)
console.log("produto antigo", produto)

console.log("produto atualizado", atualizarproduto2)


document.querySelector('#nome').textContent += produto.nome
document.querySelector('#preco').textContent += produto.preco
document.querySelector('#estoque').textContent += produto.estoque
document.querySelector('#marca').textContent += produto.marca


