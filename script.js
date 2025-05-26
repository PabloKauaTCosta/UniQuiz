const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');

const questions = [
    {
        question: 'Qual a capital da França?',
        options: ['Londres', 'Paris', 'Roma', 'Berlim'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Quanto é 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
    },
    // Adicione mais perguntas aqui!
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = ''; // Limpa as opções anteriores

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => checkAnswer(option));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('#answers button');

    answerButtons.forEach(button => {
        if (button.textContent === currentQuestion.correctAnswer) {
            button.classList.add('correct');
        }
        if (button.textContent === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
            button.classList.add('incorrect');
        }
        button.disabled = true; // Desabilita os botões após a seleção
    });

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    nextButton.style.display = 'none';
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `${score} de ${questions.length}`;
}

// Evento para o botão "Próxima"
nextButton.addEventListener('click', nextQuestion);

// Carrega a primeira pergunta ao iniciar
loadQuestion();