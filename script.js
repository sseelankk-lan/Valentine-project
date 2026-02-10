const yesBut = document.getElementById("yesbut");
const noBut = document.getElementById("nobut");
const text = document.getElementById("text");
const result = document.getElementById("result");
const slideimg = document.getElementById("slideimg");
const bigname = document.getElementById("bigName");

// ⚠️ Change image names correctly
const images = ["love 1.jpg", "love 2.jpg", "love 3.png","love 5.jpg","love 7.jpg","love 9.jpg"];
let index = 0;

// YES button click
yesBut.addEventListener("click", () => {
    result.classList.remove("hidden");

    bigname.innerText = "💖 MUTHU LAKSHMI 💖";

    startSlideshow();
    typeText(`Muthu Lakshmi ❤️
You are the most beautiful poem in my life 🌹
Your smile is my sunshine 🌞
Your love is my music 🎶
Forever, I choose you 😘`);

    startRoses();
    startFireworks();
});

// NO button move 😈
noBut.addEventListener("mouseover", moveButton);
noBut.addEventListener("touchstart", moveButton);

function moveButton() {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBut.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBut.style.position = "absolute";
    noBut.style.left = randomX + "px";
    noBut.style.top = randomY + "px";
}

// Image slideshow
function startSlideshow() {
    slideimg.src = images[index];
    setInterval(() => {
        index = (index + 1) % images.length;
        slideimg.src = images[index];
    }, 2000);
}

// Typing effect
function typeText(message) {
    text.innerHTML = "";
    let i = 0;
    let interval = setInterval(() => {
        text.innerHTML += message.charAt(i);
        i++;
        if (i === message.length) clearInterval(interval);
    }, 40);
}

// 🌹 Roses animation
function startRoses() {
    setInterval(() => {
        const rose = document.createElement("div");
        rose.className = "rose";
        rose.innerHTML = "🌹";
        rose.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(rose);

        setTimeout(() => rose.remove(), 5000);
    }, 200);
}

// 🎆 Fireworks animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function startFireworks() {
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        drawFirework(x, y);
    }, 500);
}

function drawFirework(x, y) {
    for (let i = 0; i < 35; i++) {
        const angle = (Math.PI * 2 * i) / 35;
        const radius = Math.random() * 80;

        ctx.beginPath();
        ctx.arc(
            x + Math.cos(angle) * radius,
            y + Math.sin(angle) * radius,
            2,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
        ctx.fill();
    }
}



