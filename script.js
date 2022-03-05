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
const number = document.querySelector(".user-number");
const checkNumber = document.querySelector(".check-num");
const conCode = document.querySelector(".cCode").value;
const checkCode1 = document.querySelector(".mobError");

function checkCode() {
    if (conCode == "NA") {
        checkCode1.style.visibility = "visible";
    } else {
        checkCode1.style.visibility = "hidden";
    }
}

function toggleModal() {
    if (number.value.length >= 5) {
        modal.classList.toggle("show-modal");
        checkNumber.style.visibility = "hidden";
    } else {
        if (number.value.length >= 5) {
            checkNumber.style.visibility = "hidden";
        }
        checkNumber.style.visibility = "visible";
    }
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