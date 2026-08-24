// register

let registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("registerEmail").value;
        let password = document.getElementById("registerPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields");
            return;
        }

// ///////////////////////////////////////regular expressions ///////////////////////////////////////
// Check email
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email");
    return;
}

// Check password
if (!/^[A-Za-z0-9]{8,}$/.test(password)) {
    alert("Password must be at least 8 characters");
    return;
}
// ///////////////////////////////////////regular expressions ///////////////////////////////////////

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration successful!");

        window.location.href = "index.html";
    });

}


// login

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        let savedEmail = localStorage.getItem("email");
        let savedPassword = localStorage.getItem("password");

        
        // Admin Login
if (email === "admin@movie.com" && password === "Admin12345") {

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("isAdmin", "true");

    alert("Admin login successful!");

    window.location.href = "home.html";
    return;
}


      if (email === savedEmail && password === savedPassword) {

            localStorage.setItem("loggedIn", "true");

            alert("Login successful!");

            window.location.href = "home.html";

        } else {

            alert("Incorrect email or password");

        }

    });

} // نهاية if (loginForm)


// Admin Dashboard
window.onload = function () {

    let adminLink = document.getElementById("adminLink");

    if (adminLink) {

        let isAdmin = localStorage.getItem("isAdmin");

        if (isAdmin === "true") {
            adminLink.style.display = "block";
        }

    }

};