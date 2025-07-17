document.addEventListener("DOMContentLoaded", function () {
    console.log("FoodieGo website loaded successfully!");

    // Example: Alert when the user clicks the first nav link
    const navLinks = document.querySelectorAll("nav a");
    if (navLinks.length > 0) {
        navLinks[0].addEventListener("click", function (e) {
            e.preventDefault();
            alert("You clicked: " + this.textContent);
        });
    }
});
