let waffleCount = 0; 

const waffleBtn = document.getElementById('waffleBtn');
const counterDisplay = document.getElementById('counter');

if (waffleBtn && counterDisplay) {
    waffleBtn.addEventListener('click', function() {
        waffleCount = waffleCount + 1; 
        
        counterDisplay.textContent = "Waffles eaten: " + waffleCount;
        
        if (waffleCount === 5) {
            waffleBtn.textContent = "Maina Power Unlocked! 🔥";
        }
    });
}

const vibeBtn = document.getElementById('vibeBtn');
const vibeResult = document.getElementById('vibeResult');

if (vibeBtn && vibeResult) {
    vibeBtn.addEventListener('click', function() {
        const vibes = [
            "Top Maina! Certified 100% authentic Plovdiv waffle energy! 🧇🔥",
            "Not bad, but you need more Kapana craft beer and wafers! 🍻",
            "The Ancient Theater echoes with your hunger for sweets! 🎭",
            "Absolute legend! The Seven Hills bow to your snack power! ⛰️"
        ];
        
        const randomIndex = Math.floor(Math.random() * vibes.length);
        const randomVibe = vibes[randomIndex];
        
        vibeResult.textContent = randomVibe;
    });

    setInterval(function() {
        if (vibeBtn.style.transform === "scale(1.05)") {
            vibeBtn.style.transform = "scale(1)";
        } else {
            vibeBtn.style.transform = "scale(1.05)";
            vibeBtn.style.transition = "transform 0.3s ease";
        }
    }, 3000);
}
