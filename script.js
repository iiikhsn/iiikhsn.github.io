// =========================================
// NAVBAR
// =========================================

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// =========================================
// REVEAL ANIMATION
// =========================================

const reveal = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveal.forEach((element) => {
    revealObserver.observe(element);
});


// =========================================
// PORTFOLIO TABS
// =========================================

function showPortfolio(type, button) {
    const contents = document.querySelectorAll(".portfolio-content");
    const buttons = document.querySelectorAll(".portfolio-tabs button");

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });

    const selectedContent = document.getElementById(
        `portfolio-${type}`
    );

    if (selectedContent) {
        selectedContent.classList.add("active");
    }

    if (button) {
        button.classList.add("active");
    }
}

// =========================================
// ACHIEVEMENT MODAL
// =========================================

const achievementModal =
    document.getElementById("achievementModal");

const openAchievementModal =
    document.getElementById("openAchievementModal");

const closeAchievementModal =
    document.getElementById("closeAchievementModal");


function openAchievement() {
    if (!achievementModal) return;

    achievementModal.classList.add("active");

    achievementModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeAchievement() {
    if (!achievementModal) return;

    achievementModal.classList.remove("active");

    achievementModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


// Tombol View Documentation

if (openAchievementModal) {
    openAchievementModal.addEventListener(
        "click",
        openAchievement
    );
}


// Tombol X

if (closeAchievementModal) {
    closeAchievementModal.addEventListener(
        "click",
        closeAchievement
    );
}


// Klik area luar modal

if (achievementModal) {
    achievementModal.addEventListener(
        "click",
        (event) => {

            if (event.target === achievementModal) {
                closeAchievement();
            }

        }
    );
}


// Tekan ESC untuk menutup

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            achievementModal &&
            achievementModal.classList.contains("active")
        ) {
            closeAchievement();
        }

    }
);

// =========================================
// FOOTER YEAR
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}