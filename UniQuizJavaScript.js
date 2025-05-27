const caixaUniQuiz = document.getElementById("caixaUniQuiz");
const perguntaUniQuiz = document.getElementById("questaoUniQuiz");
const opcoesRespostas = document.getElementById("opcoesRespostas"); 
const nextButton = document.getElementById("nextButton"); 
const resultadoQuiz = document.getElementById("resultadoUniQuiz");
const pontuacaoQuiz = document.getElementById("pontuacaoUniQuiz");

const questoes = [
    {
        questao: "Qual a capital da França?",
        opcoes: ["Londres", "Paris", "Roma", "Berlim"],
        respostaCorreta: "Paris"
    },
    {
        questao: "Quanto é 2 + 2?",
        opcoes: ["3", "4", "5", "6"],
        respostaCorreta: "4"
    },
    {
        questao: "Qual é a cor do céu em um dia claro?",
        opcoes: ["Vermelho", "Verde", "Azul", "Amarelo"],
        respostaCorreta: "Azul"
    }
];

let indiceQuestaoAtual = 0;
let pontuacao = 0;

function carregarQuestao() {
    resultadoQuiz.style.display = "none";
    caixaUniQuiz.style.display = "block"; 
    nextButton.style.display = "none";
    
    const questaoAtual = questoes[indiceQuestaoAtual];
    perguntaUniQuiz.textContent = questaoAtual.questao;
    opcoesRespostas.innerHTML = "";

    questaoAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("answer-btn");
        botao.addEventListener("click", () => verificarResposta(opcao));
        opcoesRespostas.appendChild(botao);
    });
}

function verificarResposta(respostaSelecionada) {
    const questaoAtual = questoes[indiceQuestaoAtual];
    const botoesResposta = opcoesRespostas.querySelectorAll(".answer-btn"); 
    
    botoesResposta.forEach(botao => {
        if (botao.textContent === questaoAtual.respostaCorreta) {
            botao.classList.add("correct");
        }
        if (botao.textContent === respostaSelecionada && respostaSelecionada !== questaoAtual.respostaCorreta) {
            botao.classList.add("incorrect");
        }
        botao.disabled = true;
    });

    if (respostaSelecionada === questaoAtual.respostaCorreta) {
        pontuacao++;
    }

    nextButton.style.display = "block";
}

function proximaQuestao() {
    indiceQuestaoAtual++;
    if (indiceQuestaoAtual < questoes.length) {
        carregarQuestao();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    caixaUniQuiz.style.display = "none";
    resultadoQuiz.style.display = "block";
    pontuacaoQuiz.textContent = `${pontuacao} de ${questoes.length}`;
}

nextButton.addEventListener("click", proximaQuestao);
document.addEventListener("DOMContentLoaded", carregarQuestao);