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

intro.addEventListener("click", () => {
  intro.style.display = "none";
  envelopeContainer.style.display = "block";
  music.volume = 0;
  music.play();

  let fade = setInterval(() => {
    if (music.volume < 0.4) {
      music.volume += 0.02;
    } else {
      clearInterval(fade);
    }
  }, 200);
});

envelope.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

yesBtn.addEventListener("click", () => {
  finalText.style.display = "block";
  document.getElementById("letter-buttons").style.display = "none";
  cat.src = "cat_dance.gif";
  createConfetti();
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(0.8)`;
});

function createConfetti() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "fall 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
