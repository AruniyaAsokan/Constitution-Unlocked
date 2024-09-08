
const quizQuestions = [
  {
    question: 'What does Article 21 of the Indian Constitution guarantee?',
    a: 'Right to freedom of speech',
    b: 'Right to protection from arbitrary arrest',
    c: 'Right to education',
    d: 'Right to vote',
    correct: 'b',
  },
  {
    question: 'Under Article 22, what right does a person have if arrested?',
    a: 'Right to remain silent',
    b: 'Right to a fair trial',
    c: 'Right to be informed of the grounds of arrest',
    d: 'Right to free legal aid',
    correct: 'c',
  },
  {
    question: 'Article 21 of the Indian Constitution states that no person shall be deprived of their life or personal liberty except according to law. What is meant by "according to law"?',
    a: 'Only if the person has committed a crime',
    b: 'Only through a proper legal process and fair trial',
    c: 'By the order of a police officer',
    d: 'When there is a public emergency',
    correct: 'b',
  },
  {
    question: 'Which of the following is a right guaranteed by Article 22 in case of arrest?',
    a: 'Right to consult a lawyer',
    b: 'Right to not be detained for more than 24 hours without being presented before a magistrate',
    c: 'Right to free medical treatment',
    d: 'Right to choose the judge in the trial',
    correct: 'b',
  },
  {
    question: 'If a person is detained under preventive detention, which Article provides them the right to be informed of the grounds of detention?',
    a: 'Article 20',
    b: 'Article 22',
    c: 'Article 23',
    d: 'Article 24',
    correct: 'b',
  },
  {
    question: 'A person is arrested by the police and is not informed of the reasons for their arrest. Which right is being violated?',
    a: 'Right to be informed of the grounds of arrest (Article 22)',
    b: 'Right to free legal aid (Article 22)',
    c: 'Right to fair trial (Article 21)',
    d: 'Right to protection from arbitrary arrest (Article 21)',
    correct: 'a',
  },
  {
    question: 'A citizen is detained without being produced before a magistrate within 24 hours. Which Article guarantees that this detention is unlawful?',
    a: 'Article 21',
    b: 'Article 22',
    c: 'Article 20',
    d: 'Article 19',
    correct: 'b',
  },
  {
    question: 'An individual is being held in custody and is not allowed to consult a lawyer. Which right does this violation pertain to?',
    a: 'Right to legal representation (Article 22)',
    b: 'Right to life (Article 21)',
    c: 'Right to a fair trial (Article 21)',
    d: 'Right to be informed of the grounds of arrest (Article 22)',
    correct: 'a',
  },
  {
    question: 'If a person is held for an extended period without being charged or presented before a magistrate, which Article’s right are they being denied?',
    a: 'Article 21',
    b: 'Article 22',
    c: 'Article 23',
    d: 'Article 24',
    correct: 'b',
  },
  {
    question: 'A person is detained under a preventive detention law and wishes to challenge their detention. Which Article allows them to do so and requires the authorities to justify the detention?',
    a: 'Article 21',
    b: 'Article 22',
    c: 'Article 23',
    d: 'Article 20',
    correct: 'b',
  },
];


let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;
let score = 0;
const SCORE_POINTS = 100;

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-game');
  const playAgainButton = document.getElementById('play-again');

  startButton.addEventListener('click', startQuiz);
  playAgainButton.addEventListener('click', () => {
    resetQuiz();
    startQuiz();
  });
});

function startQuiz() {
  document.getElementById('start').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  const questionData = quizQuestions[currentQuestionIndex];
  document.getElementById('quiz__question').innerText = questionData.question;
  document.getElementById('a__option').innerText = questionData.a;
  document.getElementById('b__option').innerText = questionData.b;
  document.getElementById('c__option').innerText = questionData.c;
  document.getElementById('d__option').innerText = questionData.d;

  document.querySelectorAll('.quiz__option').forEach(option => {
    option.addEventListener('click', handleAnswer);
  });

  updateProgress();
}

function handleAnswer(event) {
  const selectedOptionId = event.target.closest('.quiz__option').id;
  const correctOptionId = quizQuestions[currentQuestionIndex].correct;

  if (selectedOptionId === correctOptionId) {
    correctAnswersCount++;
    score += SCORE_POINTS;
  } else {
    incorrectAnswersCount++;
  }

  document.getElementById('right-answer').innerText = correctAnswersCount;
  document.getElementById('wrong-answer').innerText = incorrectAnswersCount;
  document.getElementById('score_points').innerText = score;

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function updateProgress() {
  const progress = document.getElementById('progress');
  progress.innerHTML = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

  const progressBarFull = document.querySelector('#progress__bar--full');
  progressBarFull.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
}

function endQuiz() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('ranking-box').style.display = 'block';

  displayRanking();
}

function displayRanking() {
  let rankingTitle;
  let rankingScore;

  if (score < 800) {
    switch (score) {
        case 0:
            rankingTitle = `<br>Your total score is: ${score}`;
            rankingScore = `<video width="342" height="275" autoplay muted>
                              <source src="w5.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>`;
            break;
        case 100:
            rankingTitle = `<br>Your total score is: ${score}`;
            rankingScore = `<video width="340" height="275" autoplay muted>
                              <source src="w5.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>`;
            break;
        case 200:
            rankingTitle = `<br>Your total score is: ${score}`;
            rankingScore = `<video width="340" height="275" autoplay muted>
                              <source src="w4.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>`;
            break;
        case 300:
            rankingTitle = `<br>Your total score is: ${score}`;
            rankingScore = `<video width="340" height="275" autoplay muted>
                              <source src="w4.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>`;
            break;
        case 400:
            rankingTitle = `<br>Your total score is: ${score}`;
            rankingScore = `<video width="390" height="275" autoplay muted>
                              <source src="w3.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>`;
            break;
        case 500:
            rankingTitle = `<br>Your total score is: ${score}`;
            rankingScore = `<video width="390" height="275" autoplay muted>
                              <source src="w3.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>`;
            break;
        case 600:
            rankingTitle = `<br>Your total score is: ${score}`;
            rankingScore = `<video width="340" height="275" autoplay muted>
                              <source src="w2.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>`;
            break;
        case 700:
            rankingTitle = `<br>Your total score is: ${score}`;
            rankingScore = `<video width="340" height="275" autoplay muted>
                              <source src="w2.mp4" type="video/mp4">
                              Your browser does not support the video tag.
                            </video>`;
            break;
        default:
            rankingTitle = `Your Score`;
            rankingScore = `Your total score is: ${score}`;
    }
  } else {
    rankingTitle = `You have freed Aarya!<br>Your total score is: ${score}`;
    rankingScore = `<video width="240" height="213" autoplay muted>
                      <source src="w1.mp4" type="video/mp4">
                      Your browser does not support the video tag.
                    </video>`;
  }

  document.getElementById('ranking-title').innerHTML = rankingTitle;
  document.getElementById('ranking-score').innerHTML = rankingScore;

  if (score >= 800) {
    document.getElementById('play-again').style.display = 'none'; // Hide the "Play Again" button
    const moveToChapterButton = document.createElement('button');
    moveToChapterButton.classList.add('btn', 'btn--full');
    moveToChapterButton.id = 'move-to-chapter';
    moveToChapterButton.innerText = 'Move to Chapter 2';
    document.getElementById('ranking-box').appendChild(moveToChapterButton);

    // Add event listener for the "Move to Chapter 2" button
    moveToChapterButton.addEventListener('click', () => {
      // Trigger a new video or perform some action
      window.location.href = 'index2.html';
    });
  } else {
    document.getElementById('play-again').style.display = 'block'; // Show the "Play Again" button for scores less than 800
  }

  document.getElementById('play-again-friend').style.display = 'none'; // Remove "New player" button
  addNewScore();
}



let attemptCount = 0; // Keeps track of the number of attempts

function addNewScore() {
  attemptCount++; // Increment the attempt count with each new attempt
  
  const newAttempt = document.createElement('li');
  newAttempt.innerHTML = `Attempt ${attemptCount}: <span>${score} points</span>`; // Display attempt number and score
  
  const ranking = document.getElementById('ranking-list');
  ranking.appendChild(newAttempt);
}

function resetQuiz() {
  document.getElementById('start').style.display = 'block';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('ranking-box').style.display = 'none';

  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  incorrectAnswersCount = 0;
  score = 0;

  document.getElementById('right-answer').innerText = '0';
  document.getElementById('wrong-answer').innerText = '0';
  document.getElementById('score_points').innerText = '0';

  // Don't reset the attemptCount so it continues tracking attempts
}
