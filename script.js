// Classe para representar um Personagem (POO)
class Character {
    constructor(nome, descricao, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.pontuacao = 0;
    }
}

// Classe para gerenciar o Quiz (contém perguntas, personagens e lógica de cálculo)
class Quiz {
    constructor(perguntas, personagens) {
        this.perguntas = perguntas;
        this.personagens = personagens;
    }

    // Calcula a pontuação de cada personagem com base nas respostas selecionadas
    calcularPontuacoes() {
        // Reinicia pontuações antes de somar (para caso de reinício)
        for (let nome in this.personagens) {
            this.personagens[nome].pontuacao = 0;
        }
        // Percorre todas as perguntas
        for (let i = 0; i < this.perguntas.length; i++) {
            const pergunta = this.perguntas[i];
            // Seleciona a opção marcada pelo usuário para esta pergunta
            const seletor = `input[name="q${i}"]:checked`;
            const respostaSelecionada = document.querySelector(seletor);
            if (respostaSelecionada) {
                const indiceResposta = parseInt(respostaSelecionada.value);
                const pontos = pergunta.respostas[indiceResposta].pontos;
                // Adiciona os pontos de cada personagem referentes a essa resposta
                for (let nome in pontos) {
                    this.personagens[nome].pontuacao += pontos[nome];
                }
            }
        }
    }

    // Retorna o personagem com a maior pontuação total
    obterPersonagemResultado() {
        let personagemVencedor = null;
        let maiorPontos = -Infinity;
        for (let nome in this.personagens) {
            if (this.personagens[nome].pontuacao > maiorPontos) {
                personagemVencedor = this.personagens[nome];
                maiorPontos = this.personagens[nome].pontuacao;
            }
        }
        return personagemVencedor;
    }
}

// Define os personagens (nome, descrição, imagem)
const personagens = {
    Frodo: new Character(
        "Frodo Bolseiro",
        "Um hobbit do Condado que herdou o Um Anel e assumiu a missão de destruí-lo, mostrando coragem mesmo sendo vulnerável.",
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Frodo_by_Mark_Ferrari.jpg"
    ),
    Aragorn: new Character(
        "Aragorn",
        "Um Guardião do Norte, herdeiro de Isildur e futuro rei que lidera com sabedoria e bravura na luta contra o mal.",
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Aragorn_II.jpg"
    ),
    Legolas: new Character(
        "Legolas",
        "Um príncipe élfico da Floresta das Trevas, exímio arqueiro de visão aguçada e grande aliado na Sociedade do Anel.",
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Legolas-02.jpg"
    )
};

// Define as perguntas do quiz (cada pergunta tem 3 respostas com pontuação para cada personagem)
const perguntas = [
    {
        texto: "Qual seria sua arma de escolha em uma batalha?",
        respostas: [
            { texto: "Prefiro evitar qualquer luta.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "Uma espada valorosa.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "Um arco e flecha ágil.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "Que qualidade descreve melhor sua personalidade?",
        respostas: [
            { texto: "Coragem e perseverança diante das dificuldades.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "Liderança e senso de responsabilidade.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "Agilidade e precisão em tudo que faz.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "Em um grupo de aventura, você seria...",
        respostas: [
            { texto: "quem mantém todos unidos com sua lealdade.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "o líder sábio que guia o caminho.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "o observador silencioso que protege os amigos à distância.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "Onde você preferiria viver na Terra-média?",
        respostas: [
            { texto: "Em uma vila tranquila no Condado.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "No grande salão de um reino dos Homens.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "Em meio à natureza de uma floresta élfica.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "Diante de um perigo iminente, o que você faz?",
        respostas: [
            { texto: "Cumpro meu dever, mesmo com medo.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "Parto para a batalha encorajando os demais.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "Busco uma vantagem estratégica antes de agir.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "Qual dos objetivos a seguir parece mais importante?",
        respostas: [
            { texto: "Proteger meus amigos a qualquer custo.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "Reunir os povos e restaurar o reino.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "Explorar novas terras e alianças.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "Qual item mágico você gostaria de levar em uma aventura?",
        respostas: [
            { texto: "Um frasco de luz élfica para afastar a escuridão.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "Uma espada lendária forjada pelos reis antigos.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "Um arco élfico com flechas infalíveis.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "O que é mais importante durante uma jornada?",
        respostas: [
            { texto: "Cumprir a missão para salvar a todos.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "Honrar meu povo e minhas promessas.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "A camaradagem e as belas paisagens.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "O que você faria em um dia de descanso?",
        respostas: [
            { texto: "Desfrutaria de coisas simples, como uma boa refeição.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "Treinaria minhas habilidades de combate.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "Passearia na floresta apreciando a natureza.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    },
    {
        texto: "Qual raça da Terra-média você mais admira?",
        respostas: [
            { texto: "Os pequenos e resilientes Hobbits.", pontos: { Frodo: 3, Aragorn: 2, Legolas: 1 } },
            { texto: "Os Homens, com sua coragem e determinação.", pontos: { Frodo: 1, Aragorn: 3, Legolas: 2 } },
            { texto: "Os Elfos, com sua graça e imortalidade.", pontos: { Frodo: 2, Aragorn: 1, Legolas: 3 } }
        ]
    }
];

// Cria instância do Quiz com as perguntas e personagens definidos
const quiz = new Quiz(perguntas, personagens);

// Função para exibir o questionário na tela (dinamicamente cria os elementos das perguntas)
function exibirQuestionario() {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = '';  // limpa conteúdo anterior (se houver)
    // Adiciona cada pergunta e suas opções ao formulário
    perguntas.forEach((pergunta, indice) => {
        // Container da pergunta
        const divPergunta = document.createElement('div');
        divPergunta.className = 'question';
        // Texto da pergunta
        const textoPergunta = document.createElement('p');
        textoPergunta.textContent = (indice + 1) + '. ' + pergunta.texto;
        divPergunta.appendChild(textoPergunta);
        // Opções da pergunta
        pergunta.respostas.forEach((resp, idx) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'q' + indice;
            input.value = idx;
            label.appendChild(input);
            // adiciona o texto da opção após o input
            label.appendChild(document.createTextNode(' ' + resp.texto));
            // adiciona a opção ao container da pergunta
            divPergunta.appendChild(label);
            divPergunta.appendChild(document.createElement('br'));
        });
        quizForm.appendChild(divPergunta);
    });
}

// Função para exibir o resultado do quiz (personagem correspondente) na tela
function exibirResultado(personagem) {
    const resultSection = document.getElementById('resultSection');
    resultSection.innerHTML = '';  // limpa resultado anterior
    // Cria elementos de resultado: nome, imagem, descrição e pontuação
    const nomeElem = document.createElement('h2');
    nomeElem.textContent = 'Você seria ' + personagem.nome + '!';
    const imgElem = document.createElement('img');
    imgElem.src = personagem.imagem;
    imgElem.alt = personagem.nome;
    imgElem.className = 'character-img';
    const descElem = document.createElement('p');
    descElem.textContent = personagem.descricao + ' (Pontuação: ' + personagem.pontuacao + ')';
    const restartBtn = document.createElement('button');
    restartBtn.id = 'restartBtn';
    restartBtn.textContent = 'Recomeçar Quiz';
    // Adiciona elementos à seção de resultado
    resultSection.appendChild(nomeElem);
    resultSection.appendChild(imgElem);
    resultSection.appendChild(descElem);
    resultSection.appendChild(restartBtn);
    // Exibe a seção de resultado
    resultSection.style.display = 'block';
}

// Evento de clique no botão "Começar Quiz"
document.getElementById('startBtn').addEventListener('click', () => {
    // Oculta a seção de introdução e exibe o questionário
    document.getElementById('introSection').style.display = 'none';
    exibirQuestionario();
    document.getElementById('quizSection').style.display = 'block';
});

// Evento de clique no botão "Enviar Respostas"
document.getElementById('submitBtn').addEventListener('click', function() {
    // Verifica se todas as perguntas foram respondidas
    for (let i = 0; i < perguntas.length; i++) {
        if (!document.querySelector(`input[name="q${i}"]:checked`)) {
            alert('Por favor, responda todas as perguntas antes de enviar.');
            return;
        }
    }
    // Calcula pontuações e obtem o personagem vencedor
    quiz.calcularPontuacoes();
    const vencedor = quiz.obterPersonagemResultado();
    if (vencedor) {
        // Oculta o questionário e mostra o resultado
        document.getElementById('quizSection').style.display = 'none';
        exibirResultado(vencedor);
    }
});

// Evento de clique no botão "Recomeçar Quiz" (usamos delegação de evento pois ele é criado dinamicamente)
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'restartBtn') {
        // Reseta o formulário (desmarca todas as opções)
        document.getElementById('quizForm').reset();
        // Oculta a seção de resultado e exibe novamente o questionário
        document.getElementById('resultSection').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';
    }
});
