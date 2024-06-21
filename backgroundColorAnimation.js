document.addEventListener("DOMContentLoaded", function() {
    const colors = ["#008080", "#ffed83", "#3a3a3a", "#4169e1", "#ff944a"];
    let currentIndex = 0;

    function changeBackgroundColor() {
        const delay = currentIndex === 0 ? 500 : 3000; 
        document.body.style.transition = "background-color 3s";
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        setTimeout(changeBackgroundColor, delay);
    }

    changeBackgroundColor(); 

});
