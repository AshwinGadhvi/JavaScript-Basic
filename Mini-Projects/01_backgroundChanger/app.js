document.addEventListener('DOMContentLoaded', (event) => {
    const homeButton = document.querySelector('#Home');
    if (homeButton) {
        homeButton.addEventListener("click", (e) => {
            console.log("Button clicked");
        });
    } else {
        console.log("Element with id 'Home' not found.");
    }
});
