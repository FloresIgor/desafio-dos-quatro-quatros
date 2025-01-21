document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    toggleDarkModeButton?.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem(
            "darkMode",
            document.body.classList.contains("dark-mode") ? "enabled" : "disabled"
        );
    });

    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTopButton?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
