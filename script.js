const intro = document.getElementById("intro-screen");
const envelopeContainer = document.getElementById("envelope-container");
const envelope = document.getElementById("envelope");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.getElementById("letterWindow");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalText = document.getElementById("final-text");
const cat = document.getElementById("letter-cat");
const music = document.getElementById("bgMusic");

/* SET YOUR ANNIVERSARY DATE HERE */
const startDate = new Date("2025-04-29");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerText =
    "We've been together for " + days + " days 💗";
}
setInterval(updateCounter, 1000);
updateCounter();

/* Intro */
intro.addEventListener("click", () => {
  intro.style.display = "none";
  envelopeContainer.style.display = "block";
  music.volume = 0;
  music.play();

  let fade = setInterval(() => {
    if (music.volume < 0.4) music.volume += 0.02;
    else clearInterval(fade);
  }, 200);
});

/* Open letter */
envelope.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";
  setTimeout(() => letterWindow.classList.add("open"), 50);
});

/* YES */
yesBtn.addEventListener("click", () => {
  finalText.style.display = "block";
  document.getElementById("letter-buttons").style.display = "none";
  cat.src = "cat_dance.gif";
});

/* NO */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(0.8)`;
});

/* SECRET */
function unlockSecret() {
  const input = document.getElementById("secretInput").value;
  if (input.toLowerCase() === "pumpkin") {
    document.getElementById("secretMessage").innerText =
      "You unlocked my heart. I love you endlessly. 🫂💖";
  } else {
    document.getElementById("secretMessage").innerText =
      "Hmm… try again, love 😌";
  }
}
