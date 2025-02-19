//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();
    if (nome !== "" && !nomes.includes(nome)) {
        nomes.push(nome);
        atualizarLista();
        nomeInput.value = "";
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = "";
    if (nomes.length > 1) {
        let sorteados = [...nomes];
        for (let i = 0; i < nomes.length; i++) {
            let amigoSecreto;
            do {
                amigoSecreto = sorteados[Math.floor(Math.random() * sorteados.length)];
            } while (amigoSecreto === nomes[i]);
            
            let li = document.createElement('li');
            li.textContent = `${nomes[i]} → ${amigoSecreto}`;
            resultadoLista.appendChild(li);
            
            sorteados.splice(sorteados.indexOf(amigoSecreto), 1);
        }
    } else {
        resultadoLista.textContent = "Adicione pelo menos dois nomes antes de sortear!";
    }
}
