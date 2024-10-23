// script.js
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const resultMessage = document.getElementById("result-message");

// Fungsi untuk memindahkan tombol "Tidak" ke posisi acak
noButton.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Fungsi ketika tombol "Iya" ditekan
yesButton.addEventListener("click", () => {
    resultMessage.textContent = "Yey sekarang kita pacaran!";
    resultMessage.style.color = "yellow";
});
