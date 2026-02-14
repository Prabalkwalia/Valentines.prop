const intro = document.getElementById("intro-screen");
const envelopeContainer = document.getElementById("envelope-container");
const envelope = document.getElementById("envelope");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.getElementById("letterWindow");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalText = document.getElementById("final-text");
const yesExtraLine = document.getElementById("yesExtraLine");
const cat = document.getElementById("letter-cat");

const music = document.getElementById("bgMusic");
const heartbeat = document.getElementById("heartbeat");

/* CHANGE THIS DATE */
const startDate = new Date("2024-04-29");

/* Counter */
function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerText =
    "We've been together for " + days + " days 💗";
}
setInterval(updateCounter, 1000);
updateCounter();

/* Night mode */
if (new Date().getHours() >= 22) {
  document.body.classList.add("night-mode");
}

/* INTRO — USER GESTURE SAFE AUDIO */
intro.addEventListener("click", async () => {
  intro.style.display = "none";
  envelopeContainer.style.display = "block";

  music.volume = 0;

  try {
    await music.play();
  } catch (e) {
    console.log("Music blocked, retrying on next tap");
  }

  let fade = setInterval(() => {
    if (music.volume < 0.4) music.volume += 0.02;
    else clearInterval(fade);
  }, 200);
});

/* BACKUP PLAY — ANDROID FIX */
document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch(() => {});
  }
});

/* OPEN LETTER */
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

  setTimeout(() => {
    yesExtraLine.style.display = "block";
    setTimeout(() => yesExtraLine.style.opacity = "1", 50);
  }, 1500);
});

/* NO */
noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - 150;
  const maxY = window.innerHeight - 150;
  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(0.8)`;
});

/* SECRET */
function unlockSecret() {
  const input = document.getElementById("secretInput").value.toLowerCase();

  if (input === "forever") {
    const overlay = document.getElementById("romanticOverlay");
    overlay.style.display = "flex";
    setTimeout(() => overlay.style.opacity = "1", 50);

    /* Dip music */
    let dip = setInterval(() => {
      if (music.volume > 0.15) music.volume -= 0.02;
      else clearInterval(dip);
    }, 200);

    /* Heartbeat */
    heartbeat.volume = 0;
    heartbeat.play().catch(() => {});
    let hbFade = setInterval(() => {
      if (heartbeat.volume < 0.2) heartbeat.volume += 0.02;
      else clearInterval(hbFade);
    }, 200);

    document.querySelectorAll(".polaroid").forEach((p, i) => {
      setTimeout(() => {
        p.style.opacity = "1";
        p.style.transform = "translateY(0)";
      }, 800 + i * 400);
    });

    setTimeout(() => {
      document.querySelector(".final-romantic-text").style.opacity = "1";
    }, 2500);

    createParticles();
    createLoveExplosion();

/* Shift everything slightly upward */
document.querySelector(".letter-window").classList.add("shift-up");
document.querySelector(".bg-name").classList.add("shift-up");

  }
}

/* CLOSE OVERLAY */
function closeOverlay() {
  const overlay = document.getElementById("romanticOverlay");
  overlay.style.opacity = "0";

  let rise = setInterval(() => {
    if (music.volume < 0.4) music.volume += 0.02;
    else clearInterval(rise);
  }, 200);

  let fadeOut = setInterval(() => {
    if (heartbeat.volume > 0.02) heartbeat.volume -= 0.02;
    else {
      heartbeat.pause();
      clearInterval(fadeOut);
    }
  }, 200);

  setTimeout(() => overlay.style.display = "none", 800);
}

/* PARTICLES */
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
function createLoveExplosion() {

  const emojis = ["💖","🤍","✨","💘","💞","🥹","🌸"];

  for (let i = 0; i < 60; i++) {

    const span = document.createElement("span");
    span.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";

    span.classList.add("love-explosion");

    document.body.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 4000);
  }
}
