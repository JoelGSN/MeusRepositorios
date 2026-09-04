/*

Atividade principal — Mini API de Biblioteca

let livros = [
  {
    id: 1,
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    ano: 2008,
    disponivel: true
  },
  {
    id: 2,
    titulo: "Código Limpo",
    autor: "Robert C. Martin",
    ano: 2009,
    disponivel: false
  }
];

Rotas obrigatórias
  GET    /livros
  GET    /livros/:id
  POST   /livros
  PUT    /livros/:id
  DELETE /livros/:id

Requisitos do GET /livros/:id
  - Buscar o livro pelo id.
  - Converter o parâmetro recebido na URL para o tipo adequado.
  - Retornar 404 quando não existir.
  - Retornar o objeto em JSON quando encontrado.

Requisitos do POST /livros

  Exemplo de corpo:
  {
      "titulo": "JavaScript",
      "autor": "Fulano",
      "ano": 2025,
      "disponivel": true
  }

  - titulo e autor são obrigatórios.
  - Gerar um id para o novo livro.
  - Retornar 400 para dados obrigatórios ausentes.
  - Retornar 201 e o livro criado quando o cadastro for válido.

Requisitos do PUT /livros/:id
  - Localizar o livro.
  - Retornar 404 se não existir.
  - Atualizar os dados recebidos.
  - Preservar o id original.
  - Retornar o livro atualizado.

Requisitos do DELETE /livros/:id
  - Verificar se o livro existe.
  - Remover o item do array.
  - Retornar 404 quando não existir.
  - Retornar 204 quando a exclusão for concluída.

Filtro adicional
  Implemente:
  GET /livros?disponivel=true

O endpoint deve retornar apenas os livros compatíveis com o filtro quando o parâmetro for informado, e todos os livros quando ele não for enviado.

Desafios
  - Criar GET /livros?autor=Robert para busca parcial pelo nome do autor.
  - Criar um filtro por ano.
  - Criar PATCH /livros/:id/emprestar que altere disponivel para false.
  - Impedir o empréstimo de um livro já indisponível.
  - Adicionar dataCadastro automaticamente ao cadastrar um livro.
  - Criar GET /livros/estatisticas retornando total, disponíveis e emprestados.
    {
      "total": 10,
      "disponiveis": 7,
      "emprestados": 3
    }

*/