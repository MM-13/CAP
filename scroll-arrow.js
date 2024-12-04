window.addEventListener("DOMContentLoaded", function() {
    const arrow = document.getElementById("scroll-arrow");

    // Detect scroll event
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            arrow.classList.add("hidden");
        }
    });

    // Detect touchpad use (e.g., for laptop users)
    window.addEventListener("touchstart", function() {
        arrow.classList.add("hidden");
    });
});
