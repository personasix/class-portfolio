const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;
const themePreferenceKey = "portfolio-theme";

function getSavedTheme() {
    try {
        return window.localStorage.getItem(themePreferenceKey);
    } catch (error) {
        console.warn("The saved theme preference is unavailable.", error);
        return null;
    }
}

function saveTheme(theme) {
    try {
        window.localStorage.setItem(themePreferenceKey, theme);
    } catch (error) {
        console.warn("The theme preference could not be saved.", error);
    }
}

function setTheme(theme) {
    root.dataset.theme = theme;
    themeToggle.textContent = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
}

const savedTheme = getSavedTheme();
const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
setTheme(savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemPrefersDark ? "dark" : "light");

themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    saveTheme(nextTheme);
});
themeToggle.hidden = false;

function initializeScrollReveal() {
    if (typeof window.ScrollReveal !== "function") {
        return;
    }

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    window.ScrollReveal({
        distance: "16px",
        duration: 600,
        easing: "ease-out",
        origin: "bottom",
        reset: false
    }).reveal(".project-card, #video");
}

initializeScrollReveal();
