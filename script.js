const quiz = [
  {
    question: "What’s my favorite color?",
    answers: ["Blue", "Red", "Black", "Green"],
    correct: 2
  },
  {
    question: "Where did we first meet?",
    answers: ["College", "Cafe", "Instagram", "Event"],
    correct: 3
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;
  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.answers.forEach((a, i) => {
    const btn = document.createElement("button");
    btn.textContent = a;
    btn.onclick = () => {
      if (i === q.correct) score++;
      current++;
      if (current < quiz.length) showQuestion();
      else finish();
    };
    answers.appendChild(btn);
  });
}

function finish() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result").textContent = `You got ${score} out of ${quiz.length} right! ❤️`;
}

showQuestion();
