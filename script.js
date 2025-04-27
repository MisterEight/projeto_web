// Atualização do script para mostrar uma pergunta por vez e ajuste do estilo

// Classe para representar um Personagem
class Character {
    constructor(nome, descricao, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.pontuacao = 0;
    }
}

// Classe para gerenciar o Quiz
class Quiz {
    constructor(perguntas, personagens) {
        this.perguntas = perguntas;
        this.personagens = personagens;
        this.respostasUsuario = [];
        this.perguntaAtual = 0;
    }

    calcularPontuacoes() {
        for (let nome in this.personagens) {
            this.personagens[nome].pontuacao = 0;
        }
        for (let i = 0; i < this.respostasUsuario.length; i++) {
            const pontos = this.perguntas[i].respostas[this.respostasUsuario[i]].pontos;
            for (let nome in pontos) {
                this.personagens[nome].pontuacao += pontos[nome];
            }
        }
    }

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
        "https://pm1.aminoapps.com/6339/f74d4fc38afeb5b253faeac526f88c2d5beb60a0_00.jpg"
    ),
    Aragorn: new Character(
        "Aragorn",
        "Um Guardião do Norte, herdeiro de Isildur e futuro rei que lidera com sabedoria e bravura na luta contra o mal.",
        "https://static.wikia.nocookie.net/lotr/images/c/ce/King_Aragorn.PNG"
    ),
    Legolas: new Character(
        "Legolas",
        "Um príncipe élfico da Floresta das Trevas, exímio arqueiro de visão aguçada e grande aliado na Sociedade do Anel.",
        "https://i.pinimg.com/564x/07/31/37/0731379032530492cec0984f06bf1318.jpg"
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

const quiz = new Quiz(perguntas, personagens);

function exibirPergunta() {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = '';

    const pergunta = quiz.perguntas[quiz.perguntaAtual];

    const divPergunta = document.createElement('div');
    divPergunta.className = 'question';
    divPergunta.style.textAlign = 'left';
    divPergunta.style.margin = '0 auto';
    divPergunta.style.maxWidth = '600px';

    const textoPergunta = document.createElement('p');
    textoPergunta.textContent = (quiz.perguntaAtual + 1) + '. ' + pergunta.texto;
    divPergunta.appendChild(textoPergunta);

    pergunta.respostas.forEach((resp, idx) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'resposta';
        input.value = idx;
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + resp.texto));
        divPergunta.appendChild(label);
        divPergunta.appendChild(document.createElement('br'));
    });

    quizForm.appendChild(divPergunta);

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.textContent = (quiz.perguntaAtual === quiz.perguntas.length - 1) ? 'Finalizar Quiz' : 'Próxima';
}

function avancarPergunta() {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');

    if (!respostaSelecionada) {
        alert('Por favor, selecione uma resposta antes de continuar.');
        return;
    }

    quiz.respostasUsuario.push(parseInt(respostaSelecionada.value));

    if (quiz.perguntaAtual < quiz.perguntas.length - 1) {
        quiz.perguntaAtual++;
        exibirPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    quiz.calcularPontuacoes();
    const vencedor = quiz.obterPersonagemResultado();
    
    document.getElementById('quizSection').style.display = 'none';

    const resultSection = document.getElementById('resultSection');
    resultSection.innerHTML = '';

    const nomeElem = document.createElement('h2');
    nomeElem.textContent = 'Você seria ' + vencedor.nome + '!';

    const imgElem = document.createElement('img');
    imgElem.src = vencedor.imagem;
    imgElem.alt = vencedor.nome;
    imgElem.className = 'character-img';

    const descElem = document.createElement('p');
    descElem.textContent = vencedor.descricao + ' (Pontuação: ' + vencedor.pontuacao + ')';

    const restartBtn = document.createElement('button');
    restartBtn.id = 'restartBtn';
    restartBtn.textContent = 'Recomeçar Quiz';

    resultSection.appendChild(nomeElem);
    resultSection.appendChild(imgElem);
    resultSection.appendChild(descElem);
    resultSection.appendChild(restartBtn);

    resultSection.style.display = 'block';
}

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('introSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    exibirPergunta();
});

document.getElementById('submitBtn').addEventListener('click', avancarPergunta);

document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'restartBtn') {
        location.reload();
    }
});
