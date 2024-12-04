window.addEventListener("scroll", function() {
    var arrow = document.getElementById("scroll-arrow");
    if (window.scrollY > 0) {
        arrow.classList.add("hidden");
    } else {
        arrow.classList.remove("hidden");
    }
});
