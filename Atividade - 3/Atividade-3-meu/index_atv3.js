

const nome = document.getElementById('nm').value;
const quantidade = parseInt(document.getElementById('qtd').value);
const preco = parseFloat(document.getElementById('pc').value);

const produtos = [];

function add() {



    const nproduto = {
        nome: nome,
        quantidade: quantidade,
        preco: preco
    };
        produtos.push(nproduto);
            alert('cad ok')
        // console.log('texto', produtos)
} 
       




/* function add() {
const nproduto = {
    nome: nm.value,
    quantidade: parseInt(qtd.value),
    preco: parseFloat(PureComponent.value),
};
produtos.push(nproduto)

console.log(produtos)
} */



