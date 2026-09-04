/*

  Exercício 3 — Cadastro de aluno

    - Calcule a média das duas notas.
    - Adicione a propriedade situacao com “Aprovado” quando a média for maior ou igual a 7 e “Reprovado” caso contrário.
    - Crie uma cópia do aluno usando spread.
    - Altere uma nota na cópia.
    - Compare os valores exibidos para discutir cópia rasa e objetos aninhados.

*/

const aluno = {
  nome: 'joel',
  n1: 7,
  n2: 5,
  situacao: "",

  media() {

    return ((this.n1 + this.n2) / 2);
    
  },


validar () {

if(this.media() >= 7){
  this.situacao = "Aprovado"
  
}else{
  
  this.situacao = "Reprovado"
}


}


}

const alunoatualizado = {
  ...aluno
}

console.log('Histórico do Aluno', aluno)
console.log(aluno.media())
aluno.validar()
console.log(aluno.situacao)

alunoatualizado.nome = 'Felipe'
alunoatualizado.n1 = 9
alunoatualizado.n2 = 8
console.log('Histórico do Novo Aluno', alunoatualizado)
console.log(alunoatualizado.media())
alunoatualizado.validar()
console.log(alunoatualizado.situacao)

