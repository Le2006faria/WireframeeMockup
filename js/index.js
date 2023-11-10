const url_server = "http://localhost:3001";

function cadastrar() {
    console.log('Enviando dados ao servidor...');
  
    // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
    const dados = {
      nome: document.querySelector('[name="Nome"]').value,
      cpf: document.querySelector('[name="CPF"]').value,
      data_nascimento: document.querySelector('[name="DataDeNascimento"]').value,
      telefone: document.querySelector('[name="Telefone"]').value,
      endereco: document.querySelector('[name="Endereco"]').value,
      altura: document.querySelector('[name="Altura"]').value,
      peso: document.querySelector('[name="Peso"]').value
    }

    console.log(dados);
  
      // Requisição para back-end
  
  }