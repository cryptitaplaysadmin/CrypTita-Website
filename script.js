document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});

function openComPartnersBook() {
    const partnersBook = document.getElementById("comPartnersBook");
    partnersBook.style.visibility = "visible";
}

function closeComPartnersBook() {
    const partnersBook = document.getElementById("comPartnersBook");
    partnersBook.style.visibility = "hidden";
}

function openEducPartnersBook() {
    const partnersBook = document.getElementById("educPartnersBook");
    partnersBook.style.visibility = "visible";
}

function closeEducPartnersBook() {
    const partnersBook = document.getElementById("educPartnersBook");
    partnersBook.style.visibility = "hidden";
}

function openUnivPartnersBook() {
    const partnersBook = document.getElementById("univPartnersBook");
    partnersBook.style.visibility = "visible";
}

function closeUnivPartnersBook() {
    const partnersBook = document.getElementById("univPartnersBook");
    partnersBook.style.visibility = "hidden";
}

function openBitgetBook() {
    const partnersBook = document.getElementById("encyclopediaBook");
    partnersBook.style.visibility = "visible";
}

function closeBitgetBook() {
    const partnersBook = document.getElementById("encyclopediaBook");
    partnersBook.style.visibility = "hidden";
}

var descriptions = [
    `The Adopt-a-Child Iskolar Program (ACIS) is a new initiative by CrypTita Plays that officially started in January 2026 to support students in our Comota N.S. Mini-Library.\n\nThrough ACIS, selected students receive monthly educational assistance and school supplies to help them continue their studies with less financial burden. Each Mini-Library community will have the opportunity to support its respective scholars, ensuring that education remains accessible and sustainable.\n\nThe goal of ACIS is simple: to remove barriers that prevent students from learning and to give them the support they need to stay in school and pursue their dreams. Education does not end with books and libraries. Sometimes it also means walking alongside a student and helping them move forward.`,
    `The Mini-Library Mission is a community outreach initiative by CrypTita Plays that brings books, school supplies, and learning materials to underserved and grassroots communities across the Philippines. Through the setup of mini-libraries and engaging activities such as storytelling sessions, the program creates safe and inspiring spaces where children can explore, learn, and grow.\n\nIn addition to promoting literacy, the initiative introduces beginner-friendly Web3 and digital literacy concepts in a fun and accessible way. With the support of donors, partners, and volunteers, CrypTita Plays continues to expand and replenish these libraries—helping make education more accessible while sparking curiosity, creativity, and opportunity for young learners.`,
    `University Connect is part of the Avalanche University Connect program, a campus-based educational initiative that introduces students to Web3, blockchain, and digital innovation. In collaboration with Avalanche Team1 Philippines and various academic and community partners, these events bring learning sessions directly to universities across the Philippines.\n\nAs a community partner, CrypTita Plays supports the delivery of these initiatives through on-ground coordination, student engagement, and educational outreach. Together with partners and student organizations, the program creates interactive spaces where learners can explore blockchain fundamentals, financial literacy, and emerging opportunities in the digital economy.`
];

var descIndex = 0;      // which description we are on
var charIndex = 0;      // character index in current description
var speed = 40;         // typing speed in ms
var pause = 5000;       // pause before untyping in ms
var forwards = true;    // typing or untyping

function typeWriter() {
    var descriptionDiv = document.querySelector('.description');
    var currentText = descriptions[descIndex];

    if (forwards) {
        if (charIndex < currentText.length) {
            descriptionDiv.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            // Finished typing, pause before untyping
            forwards = false;
            setTimeout(typeWriter, pause);
        }
    } else {
        if (charIndex > 0) {
            descriptionDiv.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriter, speed);
        } else {
            // Finished untyping, move to next description
            forwards = true;
            descIndex++;
            if (descIndex >= descriptions.length) descIndex = 0;
            setTimeout(typeWriter, speed);
        }
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);

document.addEventListener("DOMContentLoaded", function () {

    (function(){
        emailjs.init("r1SqiT6sEv9wtkE27");
    })();

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_31p6hi5",
            "template_zlc8fhv",
            this
        )
        .then(function() {
            alert("Message sent successfully! Please check your inbox (or spam) for the carbon copy of the email.");
        }, function(error) {
            alert("Failed to send message: " + error.text);
        });
    });

});