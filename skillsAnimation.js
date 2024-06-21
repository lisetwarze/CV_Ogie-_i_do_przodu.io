document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-fill");
    progressBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = 0;
        setTimeout(() => {
            bar.style.transition = "width 2s";
            bar.style.width = width;
        }, 100);
    });
});
