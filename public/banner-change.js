
// var copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", function () {
    copyAndAppend();
});

function copyAndAppend() {
    var logosContainer = document.querySelector(".logos");

    // Check if the logos container element exists
    if (logosContainer) {
        var copy = document.querySelector(".logos-slide").cloneNode(true);
        logosContainer.appendChild(copy);
    } else {
        console.error("Logos container not found.");
    }
}