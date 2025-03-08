document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute("href").substring(1); // Get the target section ID
        const targetSection = document.querySelector(`.${targetId}`);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const typewriterText = document.querySelector(".typewriter");
    const words = ["Product Manager", "Developer", "Project Manager", "Poet"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        const currentText = currentWord.substring(0, charIndex);
        typewriterText.textContent = `${currentText}`;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100); // Typing speed
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50); // Deleting speed
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length; // Move to next word
            }
            setTimeout(typeEffect, 1000); // Pause before switching
        }
    }

    typeEffect();
});

document.getElementById("education-btn").addEventListener("click", function() {
    const aboutText = document.getElementById("about-text");
    const educationContent = document.getElementById("education-content");
    const skillsContent = document.getElementById("skills-content");

    if (educationContent.style.display === "block") {
        // If education is already open, go back to about
        educationContent.style.display = "none";
        aboutText.style.display = "block";
    } else {
        // Otherwise, open education and hide others
        aboutText.style.display = "none";
        skillsContent.style.display = "none";
        educationContent.style.display = "block";
    }
});

document.querySelectorAll(".timeline-institute").forEach((institute) => {
    let timeout;
    
    institute.addEventListener("mouseenter", function () {
        const infoId = this.getAttribute("data-info");
        timeout = setTimeout(() => {
            document.getElementById(infoId).style.display = "block";
            document.getElementById(infoId).style.opacity = "1";
        }, 500); // 0.5s delay
    });

    institute.addEventListener("mouseleave", function () {
        const infoId = this.getAttribute("data-info");
        clearTimeout(timeout);
        document.getElementById(infoId).style.opacity = "0";
        setTimeout(() => {
            document.getElementById(infoId).style.display = "none";
        }, 300); // 0.3s fade-out
    });
});

document.getElementById("skill-btn").addEventListener("click", function() {
    const aboutText = document.getElementById("about-text");
    const educationContent = document.getElementById("education-content");
    const skillsContent = document.getElementById("skills-content");

    if (skillsContent.style.display === "block") {
        // If skills is already open, go back to about
        skillsContent.style.display = "none";
        aboutText.style.display = "block";
    } else {
        // Otherwise, open skills and hide others
        aboutText.style.display = "none";
        educationContent.style.display = "none";
        skillsContent.style.display = "block";
    }
});

document.querySelectorAll(".skill-btn").forEach(button => {
    button.addEventListener("click", function () {
        let skill = this.getAttribute("data-skill");

        // Remove 'active' class from all skill buttons
        document.querySelectorAll(".skill-btn").forEach(btn => btn.classList.remove("active"));

        // Add 'active' class to the clicked button
        this.classList.add("active");

        // Hide all projects
        document.querySelectorAll(".project-card").forEach(project => {
            project.style.display = "none";
        });

        // Show projects matching the selected skill
        let selectedProjects = document.querySelectorAll(`.${skill}-project`);
        if (selectedProjects.length > 0) {
            selectedProjects.forEach(project => {
                project.style.display = "flex";
            });
        }
    });
});

