document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.getElementById("scroll-arrow");

    function hideArrow() {
        arrow.style.display = "none";
    }

    // Detect scroll event
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            hideArrow();
        }
    });

    // Detect touch events (for touch devices)
    window.addEventListener("touchstart", function() {
        hideArrow();
    });

    // Detect mouse wheel events
    window.addEventListener("wheel", function() {
        hideArrow();
    });
});
