// =========================================
// NAVBAR
// =========================================

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const nav = navToggle ? navToggle.closest("nav") : null;

if (navToggle && navMenu) {
    const closeNavMenu = () => {
        navMenu.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
        if (
            navMenu.classList.contains("active") &&
            nav &&
            !nav.contains(event.target)
        ) {
            closeNavMenu();
        }
    });
}


// =========================================
// CERTIFICATE MODAL
// =========================================

const certificateModal = document.getElementById("certificateModal");
const certificateModalImage = document.getElementById("certificateModalImage");
const certificateLinks = document.querySelectorAll(".certificate-link");

if (certificateModal && certificateModalImage) {
    certificateLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            certificateModalImage.src = link.href;
            certificateModalImage.alt = link
                .closest(".certificate-item")
                ?.querySelector("img")
                ?.alt || "Certificate preview";
            certificateModal.classList.add("active");
            certificateModal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });

    certificateModal.addEventListener("click", () => {
        certificateModal.classList.remove("active");
        certificateModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
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