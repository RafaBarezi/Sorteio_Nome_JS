// Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos. 
let amigos = [];

//Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente:
function adicionarAmigo() {
    //Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário:
    let input = document.getElementById("amigo");
    let nome = input.value;

    //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio:
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regex.test(nome)) {
        alert("O nome não deve conter números ou caracteres especiais.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi incluído na sua lista.");
        return;
    }

    // Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push():
    amigos.push(nome);

    atualizarLista();

    //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("amigos");
    ul.innerHTML = "";

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {

    //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio:
    if (amigos.length <= 1) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
    const indice = Math.floor(Math.random() * amigos.length);
    console.log("Índice sorteado:", indice);
    const sorteado = amigos[indice];

    // Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById()
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> O amigo sorteado foi: <strong>${sorteado}</strong>!</li>`;
}