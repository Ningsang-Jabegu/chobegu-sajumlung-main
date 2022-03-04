function move(e, previous, current, next) {
    var length = document.getElementById(current).value.length;
    var maxLength = document.getElementById(current).getAttribute("maxlength");
    if (length == maxLength) {
        if(next !== "") {
            document.getElementById(next).focus();
        }
    }
    if(e.key === "Backspace") {
        if (previous !== "")
        document.getElementById(previous).focus();
    }
}

/* This is for model verification */
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/* This is for random number generator for otp */
function otpGenerator() {
    document.getElementById("otp-g-1").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("otp-g-2").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("otp-g-3").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("otp-g-4").innerHTML = Math.floor(Math.random() * 10);

}