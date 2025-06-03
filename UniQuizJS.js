const telaInicial = document.getElementById("tela-inicial");
const botaoJogar = document.getElementById("botao-jogar");
const telaSelecaoTema = document.getElementById("tela-selecao-tema");
const botoesTema = document.querySelectorAll(".botao-tema");
const telaQuiz = document.getElementById("tela-quiz");
const textoPergunta = document.getElementById("texto-pergunta");
const containerOpcoes = document.getElementById("container-opcoes");
const botaoProxima = document.getElementById("botao-proxima");
const telaPontuacao = document.getElementById("tela-pontuacao");
const pontuacaoFinal = document.getElementById("pontuacao-final");
const botaoReiniciar = document.getElementById("botao-reiniciar");

let temaAtual = "";
let perguntasAtuais = [];
let indicePerguntaAtual = 0;
let pontuacao = 0;

const dadosQuiz = {
    biologia: [
        {
            pergunta: "Qual o maior órgão do corpo humano?",
            opcoes: ["Coração", "Pele", "Cérebro", "Fígado"],
            resposta: "Pele"
        },
        {
            pergunta: "Qual o processo pelo qual as plantas produzem seu próprio alimento?",
            opcoes: ["Respiração", "Transpiração", "Fotossíntese", "Germinação"],
            resposta: "Fotossíntese"
        },
        {
            pergunta: "Qual o nome do processo de divisão celular que resulta em duas células-filhas idênticas?",
            opcoes: ["Meiose", "Mitose", "Osmose", "Fagocitose"],
            resposta: "Mitose"
        }
    ],
    geografia: [
        {
            questao: "Qual é o maior deserto do mundo?",
            opcoes: ["Saara", "Atacama", "Antártida", "Deserto de Gobi"],
            resposta: "Antártida"
        },
        {
            questao: "Qual é a capital do Brasil?",
            opcoes: ["Paraná", "Brasília", "Rio de Janeiro", "São Paulo"],
            resposta: "Brasília"
        },
        {
            questao: "Qual é a capital da Austrália?",
            opcoes: ["	Sydney", "Canadá", "Nova Zelândia", "Camberra"],
            resposta: "Camberra"
        },
        {
            questao: "Qual é o país com maior população no mundo?",
            opcoes: ["Índia", "China", "Estados Unidos", "Indonésia"],
            resposta: "Índia"
        },
        {
            questao: " Qual a linha imaginária que atravessa o Brasil?",
            opcoes: ["Equador", "Círculo Polar Ártico", "Trópico de Cancêr", "Greenwich"],
            resposta: "Equador"
        },
        {
            questao: "Qual o oceano que banha o Brasil?",
            opcoes: ["Pacífico", "Índico", "Atlântico", "Ártico"],
            resposta: "Atlântico"
        },
        {
            questao: "Qual é o principal combustível fossil da 1 Revolução Industrial?",
            opcoes: ["Óleo Diesel", "Petróleo", "Carvão Mineral", "Gás Natural"],
            resposta: "Carvão Mineral"
        },
        {
            questao: "Qual é o único continente com terra nos quatro hemisférios?",
            opcoes: ["Europa", "Ásia", "Oceania", "África"],
            resposta: "África"
        },
        {
            questao: "Além da Turquia, qual outro país está presente em dois continentes?",
            opcoes: ["Rússia", "China", "Japão", "Itália"],
            resposta: "Rússia"
        },
        {
            questao: "Qual é o movimento terrestre responsável pela ocorrência das estações do ano?",
            opcoes: ["Nutação", "Transformação", "Rotação", "Translação"],
            resposta: "Translação"
        },
    ],
    espaco: [
        {
            questao: "Em que galáxia está o Sistema Solar?",
            opcoes: ["Andrômeda", "Via Láctea", "Galáxia do Triângulo", "Galáxia de Sombrero"],
            resposta: "Via Láctea"
        },
        {
            questao: " Qual é o nome da teoria mais aceita em que marca o início do universo?",
            opcoes: ["Big Crunch", "Buraco Branco", "Expansão Estelar", "Big Bang"],
            resposta: "Big Bang"
        },
        {
            questao: "Qual é o maior planeta do Sistema Solar?",
            opcoes: ["Marte", "Júpiter", "Urano", "Saturno"],
            resposta: "Júpiter"
        },
        {
            questao: "Por qual outro nome é conhecida a Nebulosa de Hélix?",
            opcoes: ["Olho de Deus", "Pilares da criação", "Andrômeda", "Nebulosa de Órion"],
            resposta: "Olho de Deus"
        },
        {
            questao: " Qual desses corpos celestes é um satélite natural da Terra?",
            opcoes: ["Sol", "Marte", "Lua", "Fobos"],
            resposta: "Lua"
        },
       {
            questao: "Qual o maior buraco negro já descoberto?",
            opcoes: ["TON 618", "1E1740.7-2942", " Phoenix A", "S5 0014+81 "],
            resposta: " Phoenix A"
        },
        {
            questao: "Quantos planetas existem atualmente no Sistema Solar (segundo a classificação da IAU)?",
            opcoes: ["10", "9", "7", "8 "],
            resposta: "8"
        },
        {
            questao: "Qual é o planeta mais próximo do Sol?",
            opcoes: ["Vênus", "Mercúrio ", "Marte", "Saturno "],
            resposta: "Mercúrio "
        }, 
        {
            questao: " O que é uma supernova?",
            opcoes: [" A explosão de uma estrela massiva no final de sua vida", "A formação de uma nova galáxia", "Um planeta com muita luz", "Um cometa muito brilhante: "],
            resposta: "A explosão de uma estrela massiva no final de sua vida "
        },
        {
            questao: "O que são os anos-luz?",
            opcoes: ["A duração de um ano em Vênus", "A A velocidade da luz", "A distância que a luz percorre em um ano ", "O tempo que um planeta leva para girar "],
            resposta: "A distância que a luz percorre em um ano "
        },
    ]
};

function mostrarTela(idTela) {
    document.querySelectorAll(".secao-quiz").forEach(tela => {
        tela.classList.remove("ativa");
    });
    document.getElementById(idTela).classList.add("ativa");
}

botaoJogar.addEventListener("click", () => {
    mostrarTela("tela-selecao-tema");
});

botoesTema.forEach(botao => {
    botao.addEventListener("click", (evento) => {
        temaAtual = evento.target.dataset.tema;
        perguntasAtuais = dadosQuiz[temaAtual];
        indicePerguntaAtual = 0;
        pontuacao = 0;
        mostrarTela("tela-quiz");
        carregarPergunta();
    });
});

function carregarPergunta() {
    containerOpcoes.innerHTML = "";
    botaoProxima.disabled = true;
    botaoProxima.classList.remove("correta", "incorreta");

    if (indicePerguntaAtual < perguntasAtuais.length) {
        const pergunta = perguntasAtuais[indicePerguntaAtual];
        textoPergunta.textContent = pergunta.pergunta;

        pergunta.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.textContent = opcao;
            botao.classList.add("botao-opcao");
            botao.addEventListener("click", () => selecionarOpcao(botao, opcao, pergunta.resposta));
            containerOpcoes.appendChild(botao);
        });
    } else {
        mostrarPontuacao();
    }
}

function selecionarOpcao(botaoSelecionado, opcaoSelecionada, respostaCorreta) {
    Array.from(containerOpcoes.children).forEach(botao => {
        botao.disabled = true;
    });

    if (opcaoSelecionada === respostaCorreta) {
        botaoSelecionado.classList.add("correta");
        pontuacao++;
    } else {
        botaoSelecionado.classList.add("incorreta");
        Array.from(containerOpcoes.children).forEach(botao => {
            if (botao.textContent === respostaCorreta) {
                botao.classList.add("correta");
            }
        });
    }
    botaoProxima.disabled = false;
}

botaoProxima.addEventListener("click", () => {
    indicePerguntaAtual++;
    carregarPergunta();
});

function mostrarPontuacao() {
    pontuacaoFinal.textContent = `Você acertou ${pontuacao} de ${perguntasAtuais.length} perguntas!`;
    mostrarTela("tela-pontuacao");
}

botaoReiniciar.addEventListener("click", () => {
    mostrarTela("tela-inicial");
});

mostrarTela('tela-inicial');