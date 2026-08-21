document.addEventListener("DOMContentLoaded", function () {

    const logoutBtn = document.getElementById("logoutBtn");

    function updateLogoutButton() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
            logoutBtn.style.display = "inline";
        } else {
            logoutBtn.style.display = "none";
        }
    }

    logoutBtn.addEventListener("click", function (event) {
        event.preventDefault();

        localStorage.removeItem("isLoggedIn");

        updateLogoutButton();

        window.location.href = "index.html";
    });

    updateLogoutButton();
});