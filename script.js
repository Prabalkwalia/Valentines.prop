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
const heartbeat = document.getElementById("heartbeat");

/* CHANGE TO YOUR REAL DATE */
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

/* Open Letter */
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

/* SECRET PASSWORD */
function unlockSecret() {
  const input = document.getElementById("secretInput").value;

  if (input.toLowerCase() === "pumpkin") {

    const overlay = document.getElementById("romanticOverlay");
    overlay.style.display = "flex";
    setTimeout(() => overlay.style.opacity = "1", 50);

    /* Heartbeat fade in */
    heartbeat.volume = 0;
    heartbeat.play();
    let hbFade = setInterval(() => {
      if (heartbeat.volume < 0.2) heartbeat.volume += 0.02;
      else clearInterval(hbFade);
    }, 200);

    setTimeout(() => {
      document.getElementById("overlayTitle").style.opacity = "1";
    }, 800);

    const photos = document.querySelectorAll(".polaroid");
    photos.forEach((photo, index) => {
      setTimeout(() => {
        photo.style.opacity = "1";
        photo.style.transform = "translateY(0)";
      }, 1200 + index * 500);
    });

    setTimeout(() => {
      document.querySelector(".final-romantic-text").style.opacity = "1";
    }, 1200 + photos.length * 500);

    createParticles();

  } else {
    document.getElementById("secretMessage").innerText =
      "Hmm… that's not our word 😌";
  }
}

function closeOverlay() {
  const overlay = document.getElementById("romanticOverlay");
  overlay.style.opacity = "0";

  /* Heartbeat fade out */
  let fadeOut = setInterval(() => {
    if (heartbeat.volume > 0.02) heartbeat.volume -= 0.02;
    else {
      heartbeat.pause();
      clearInterval(fadeOut);
    }
  }, 200);

  setTimeout(() => overlay.style.display = "none", 800);
}

function createParticles() {
  const container = document.querySelector(".particles");
  container.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "🤍";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(heart);
  }
}
