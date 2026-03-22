document.addEventListener("DOMContentLoaded", () => {

    // Scroll
    window.scrollToSection = function () {
        document.getElementById("events").scrollIntoView({
            behavior: "smooth"
        });
    };

    // Countdown
    function startCountdown() {
        let eventDate = new Date("April 17, 2026 00:00:00").getTime();

        setInterval(() => {
            let now = new Date().getTime();
            let diff = eventDate - now;

            if (diff <= 0) {
                document.getElementById("header-timer").innerHTML = "Fest Started 🎉";
                return;
            }

            let days = Math.floor(diff / (1000*60*60*24));
            let hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
            let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
            let seconds = Math.floor((diff % (1000*60)) / 1000);

            document.getElementById("header-timer").innerHTML =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    startCountdown();

    // Messages (~20 words)
    const messages = {
        "April 15": "🔥 Colour Day! Express yourself with bold outfits, vibrant energy, and confidence. Let your style speak and stand out from everyone.",
        
        "April 16": "✨ Ethnic Day! Celebrate culture, tradition, and elegance. Wear your roots proudly and showcase the beauty of heritage with confidence.",
        
        "April 17": "🚀 The fest begins! Get ready for exciting events, high energy, and unforgettable moments. Participate actively and create amazing memories.",
        
        "April 18": "🎊 Final day! Celebrate every moment, enjoy all events, and don’t miss the lunch. End the fest with joy, laughter, and memories."
    };

    // Card click
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            let dateText = card.querySelector('h3').innerText;

            let message = "🎉 Enjoy the event!";
            for (let key in messages) {
                if (dateText.includes(key)) {
                    message = messages[key];
                }
            }

            document.getElementById("popup-text").innerText = message;
            document.getElementById("popup").style.display = "flex";
        });
    });

    // Close popup
    window.closePopup = function () {
        document.getElementById("popup").style.display = "none";
    };

});