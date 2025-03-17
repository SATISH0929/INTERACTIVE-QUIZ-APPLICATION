const questions = [
    { question: "What is 2+2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the capital of India?", options: ["Mumbai", "Hyderabad", "Delhi"], answer: "Delhi" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    questions[currentQuestion].options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].answer) score++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("score").innerText = `Final Score: ${score}`;
    }
}

function nextQuestion() {
    loadQuestion();
}

loadQuestion();
