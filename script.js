// JavaScript for hero section
const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image');
const exploreButton = document.querySelector('.explore-button');
const heroSubtitle = document.querySelector('.hero-subtitle');
// Text animation function
function animateText() {
    const text = ["Ayurvedic Wisdom for Holistic Health", "Explore the world of Ayurveda","Unlocking Ayurveda's Healing Power for Every Ailment"];
    let index = 0;

    function changeText() {
        heroSubtitle.textContent = text[index];
        index = (index + 1) % text.length;
    }

    setInterval(changeText, 3000); // Change text every 3 seconds
}

animateText();

// Fade-in and fade-out animations
window.addEventListener('load', () => {
    heroContent.style.opacity = 0;
    heroImage.style.opacity = 0;

    const fadeInInterval = setInterval(() => {
        heroContent.style.opacity = parseFloat(heroContent.style.opacity) + 0.02;
        heroImage.style.opacity = parseFloat(heroImage.style.opacity) + 0.02;
        
        if (parseFloat(heroContent.style.opacity) >= 1) {
            clearInterval(fadeInInterval);
        }
    }, 20);

    exploreButton.addEventListener('click', () => {
        const fadeOutInterval = setInterval(() => {
            heroContent.style.opacity = parseFloat(heroContent.style.opacity) - 0.02;
            heroImage.style.opacity = parseFloat(heroImage.style.opacity) - 0.02;

            if (parseFloat(heroContent.style.opacity) <= 0) {
                clearInterval(fadeOutInterval);
                window.location.href = "#books"; // Redirect to the Books section
            }
        }, 20);
    });
});
