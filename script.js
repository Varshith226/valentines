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
        particleCount: 300,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#FF1493', '#FF69B4', '#FF4d4d', '#FFFFFF'], // Deep Pink, Hot Pink, Red, White
        shapes: ['circle', 'square'] // Simplify shapes for better compatibility
    });

    // 2. Change the screen content with animation & VIDEO
    const proposalSection = document.getElementById("proposal");
    proposalSection.innerHTML = `
        <div style="position: relative; width: 100%; height: 100vh; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <video autoplay loop style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; opacity: 0.8;">
                <source src="assets/41.mp4" type="video/mp4">
            </video>
            
            <div style="position: relative; z-index: 10; animation: fadeIn 2s ease; text-align: center; background: rgba(0,0,0,0.4); padding: 40px; border-radius: 20px;">
                <h1 class="movie-title" style="font-size: 5rem; color: #ff4d4d; margin-bottom: 20px; text-shadow: 0 0 30px rgba(255,0,0,0.8); font-family: 'Great Vibes', cursive;">
                    I LOVE YOU <br> SO MUCH BABY ❤️
                </h1>
                <p class="subtitle" style="font-size: 2.5rem; color: white;">Forever & Always.</p>
            </div>
        </div>
    `;

    // 3. Launch more confetti after a delay
    setTimeout(() => {
        confetti({
            particleCount: 200,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 200,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 1000);
}