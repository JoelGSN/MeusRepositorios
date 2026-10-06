/*

  Atividade principal — API de alunos

  const alunos = [
      { id: 1, nome: "Ana", idade: 18, curso: "Informática" },
      { id: 2, nome: "Carlos", idade: 20, curso: "Administração" },
      { id: 3, nome: "Maria", idade: 19, curso: "Informática" }
  ];

  Rotas obrigatórias:
    - GET /alunos
    - GET /alunos/:id
    - GET /alunos?curso=Informática
    - POST /alunos

  Requisitos adicionais:
    - Aluno inexistente deve retornar 404.
    - Nome ausente no cadastro deve retornar 400.
    - O id deve ser gerado pela aplicação.
    - Cadastro bem-sucedido deve retornar 201.

*/