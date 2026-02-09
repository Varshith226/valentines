// script.js

// Floating Hearts Logic for Memory Lane
document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.hearts-container');
    if (heartsContainer) {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart-anim');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's'; // 3-6s
            heart.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
            heartsContainer.appendChild(heart);

            // Cleanup
            setTimeout(() => heart.remove(), 6000);
        }, 800);
    }
});

// Function to smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// THE RUNAWAY BUTTON
function moveButton() {
    const noBtn = document.getElementById("noBtn");
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// THE ACCEPTANCE
function acceptLove() {
    // 1. Trigger Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF7F50', '#ffffff', '#FF0000'] // Coral, White, Red
    });

    // 2. Change the screen content
    const proposalSection = document.getElementById("proposal");
    proposalSection.innerHTML = `
        <h1 class="movie-title">SHE SAID YES! 🎬</h1>
        <p>Production has begun on our best date ever.</p>
        <p>See you on Feb 14th!</p>
        <img src="assets/happy-us.jpg" style="max-width:300px; border-radius:15px; margin-top:20px;">
    `;

    // Optional: Auto-play a song here if you want
}