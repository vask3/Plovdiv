// Initialize waffle count variable
let waffleCount = 0;

// Grab elements from the HTML
const waffleBtn = document.getElementById('waffleBtn');
const counterDisplay = document.getElementById('counter');

// Check if the button exists on this page before adding event listener
if (waffleBtn) {
    waffleBtn.addEventListener('click', function() {
        waffleCount++;
        counterDisplay.textContent = "Waffles eaten: " + waffleCount;
        
        // Change button text dynamically as an extra feature
        if (waffleCount === 5) {
            waffleBtn.textContent = "Maina Power Unlocked! 🔥";
        }
    });
}
// Check Vibe feature for tour.html
const vibeBtn = document.getElementById('vibeBtn');
const vibeResult = document.getElementById('vibeResult');

if (vibeBtn) {
    vibeBtn.addEventListener('click', function() {
        const vibes = [
            "Top Maina! Certified 100% authentic Plovdiv waffle energy! 🧇🔥",
            "Not bad, but you need more Kapana craft beer and wafers! 🍻",
            "The Ancient Theater echoes with your hunger for sweets! 🎭",
            "Absolute legend! The Seven Hills bow to your snack power! ⛰️"
        ];
        
        // Pick a random message
        const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
        vibeResult.textContent = randomVibe;
    });
}