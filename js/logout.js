document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.getElementById("logoutBtn");

    function updateLogoutButton() {

        const loggedIn = localStorage.getItem("loggedIn");

        if (loggedIn === "true") {
            logoutBtn.style.display = "inline";
        } else {
            logoutBtn.style.display = "none";
        }
    }

    logoutBtn.addEventListener("click", function (event) {

        event.preventDefault();

        localStorage.removeItem("loggedIn");

        window.location.href = "index.html";
    });

    updateLogoutButton();
});