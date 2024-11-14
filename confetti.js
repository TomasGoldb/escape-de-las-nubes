// Generar confeti animado
function generateConfetti() {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti-piece");

        // Posición y color aleatorios
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;

        confettiContainer.appendChild(confettiPiece);
    }
}

// Ejecutar la animación de confeti al cargar la página
window.onload = generateConfetti;
