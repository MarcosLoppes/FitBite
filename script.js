// Função para buscar endereço usando a API ViaCEP
function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            alert("CEP não encontrado.");
          } else {
            document.getElementById('address').value = data.logradouro;
            document.getElementById('neighborhood').value = data.bairro;
            document.getElementById('city').value = data.localidade;
            document.getElementById('state').value = data.uf;
          }
        })
        .catch(error => {
          alert("Erro ao buscar o CEP.");
        });
    } else {
      alert("Por favor, insira um CEP válido.");
    }
  }
  
  // Validações do formulário
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Pegando os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;
    let errorMessage = '';
  
    // Validação de nome
    if (!name) {
      valid = false;
      errorMessage += 'O nome é obrigatório. ';
    }
  
    // Validação de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailPattern.test(email)) {
      valid = false;
      errorMessage += 'Por favor, insira um e-mail válido. ';
    }
  
    // Validação de mensagem
    if (!message) {
      valid = false;
      errorMessage += 'A mensagem não pode estar vazia. ';
    }
  
    // Se tudo estiver válido, simula o envio do formulário
    if (valid) {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('contactForm').reset();  // Limpa o formulário
    } else {
      // Se houver erro, exibe a mensagem de erro
      alert('Erro: ' + errorMessage);
    }
  });
  
