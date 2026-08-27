// =========================================
// SAYALI & PRANAV WEDDING WEBSITE
// =========================================

// Change this to your actual wedding date and time.
const weddingDate = new Date("December 20, 2026 11:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (difference <= 0) {
        daysElement.innerText = "0";
        hoursElement.innerText = "0";
        minutesElement.innerText = "0";
        secondsElement.innerText = "0";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Scroll animations
const animatedElements = document.querySelectorAll(".section, .event-card, .gallery img");

const observer = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

animatedElements.forEach(function(element) {
    observer.observe(element);
});


// RSVP form
const rsvpForm = document.querySelector("form");

if (rsvpForm) {
    rsvpForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = rsvpForm.querySelector('input[type="text"]').value.trim();
        const guests = rsvpForm.querySelector('input[type="number"]').value;
        const attendance = rsvpForm.querySelector("select").value;

        if (!name || !guests || !attendance) {
            alert("Please complete all RSVP details.");
            return;
        }

        if (attendance === "yes") {
            alert("Thank you, " + name + "! ❤️ We are excited to celebrate with you.");
        } else {
            alert("Thank you, " + name + ". We will miss you! ❤️");
        }

        rsvpForm.reset();
    });
}


// Navigation highlighting
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function() {
    let currentSection = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function(link) {
        link.style.fontWeight = "normal";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.fontWeight = "bold";
        }
    });
});

window.addEventListener("load", function() {
    console.log("Welcome to Sayali & Pranav's Wedding Website ❤️");
});
