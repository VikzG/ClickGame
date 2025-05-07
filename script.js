let counter = 0;
let timeLeft = 5;
let isActive = false;
let countdown;

const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const startBtn = document.getElementById("startBtn");
const timerDisplay = document.getElementById("time");

// Gérer le clic sur le bouton d'incrément
incrementBtn.addEventListener("click", () => {
  if (isActive) {
    counter++;
    counterDisplay.textContent = counter;
  }
});

// Gérer le clic sur le bouton de démarrage
startBtn.addEventListener("click", () => {
  // Réinitialiser
  timeLeft = 5;
  timerDisplay.textContent = timeLeft;
  isActive = true;
  incrementBtn.disabled = false;
  startBtn.disabled = true;

  countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      isActive = false;
      incrementBtn.disabled = true;
      startBtn.disabled = false;
    }
  }, 1000);
});
