const x = document.querySelector(".theme-switch");
const y = document.querySelector("body");

x.addEventListener("click", function () {
    y.classList.toggle("dark-mode");
})

// hamburger menu 
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav");
const close = document.querySelector(".close");

hamburger.addEventListener("click", function () {
    console.log("clicked");
    menu.style.display = "flex";
})
close.addEventListener("click", function () {
    menu.style.display = "none";
})

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", function () {
    console.log("clicked");

});

// back to top
const btn = document.querySelector(".back-top");


window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
})

btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

// contact form validation

const submit = document.querySelector(".contact");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const success = document.querySelector(".success-message");


function validateForm(e) {
    console.log("clicked");
    e.preventDefault();

    if (fullName.value === "") {
        nameError.style.display = "block";
        nameError.style.color = "#f94306bc";
        nameError.innerHTML = "Please enter your name";
    } else {
        nameError.style.display = "none";
    }
    if (checkEmail(email.value) === false) {
        emailError.style.display = "block";
        emailError.style.color = "#f94306bc";
        emailError.innerHTML = "Please enter your valid email";
    } else {
        emailError.style.display = "none";
    }
    if (message.value === "") {
        messageError.style.display = "block";
        messageError.style.color = "#f94306bc";
        messageError.innerHTML = "Please enter your message";
    } else {
        messageError.style.display = "none";
    }
    if (fullName.value !== "" && checkEmail(email.value) === true && message.value !== "") {
        success.style.display = "block";
        success.style.color = "green";
        success.innerHTML = "Your message has been sent. Thank you!";
    }
}


function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
submit.addEventListener("click", validateForm, checkEmail);