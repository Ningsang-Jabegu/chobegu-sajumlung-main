/* This is for setting drop box */
    const setting = document.querySelector(".setting-dropbox");
    function settingDrpBox() {
        /* 
            When the user clicks on the button, 
            toggle between hiding and showing the dropdown content */
            if(setting.classList.contains('hide-settingContent')) {
                setting.classList.remove('hide-settingContent');
            }
            setting.classList.add('show-setting');  
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.setting')) {
      var dropdowns = document.getElementsByClassName("setting-dropbox");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-setting')) {
          openDropdown.classList.remove('show-setting');
        }
      }
    }
  }

/* This is to close setting */
    function closeSetting() {
        setting.style.visibility = "hidden";
    };

/* This is setting content */
    function settingContent() {
        alert("HI");
    };

/* This is for country code checking*/
    function cCodeChanged() {
        var checkCode = document.getElementsByClassName("cCode"); 
        var errMsg = document.getElementsByClassName("mobError");
        var countryValue = checkCode.selectForCode[checkCode.selectForCode.selectedIndex].value;
        if (countryValue.length <0) {
            errMsg.style.visibility = "visible";
            document.getElementsByClassName(".user-number").disabled = true;
        } else {
            errMsg.style.visibility = "hidden";
            document.getElementsByClassName(".user-number").disabled = false;
        }
    }

/* On focusing to user-number input get error msg saying choose country code 
    function onFocusUserNumber() {
        
        var checkCode = document.getElementsByClassName("cCode"); 
        var errMsg = document.getElementsByClassName("mobError");
        var countryValue = checkCode.selectForCode[checkCode.selectForCode.selectedIndex].value;
        if (countryValue > 0) {
            errMsg.style.visibility = "hidden";
        } else {
            alert ("Please enter your\ncountry code\nfirst to proceed further");
        }
        
    }*/

/* This is for model verification */
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const number = document.querySelector(".user-number");
const checkNumber = document.querySelector(".check-num");
var errMsg = document.getElementsByClassName("mobError");
var checkCode = document.getElementsByClassName("cCode");
var countryValue = checkCode.selectForCode[checkCode.selectForCode.selectedIndex].value;

function toggleModal() {
    if (number.value.length >= 5){
        modal.classList.toggle("show-modal");
        checkNumber.style.visibility = "hidden";
            if (countryValue == 000) {
                errMsg.style.visibility = "visible";
            } else {
                errMsg.style.visibility = "hidden";
            }
    } else {
            if (number.value.length >= 5) {
                checkNumber.style.visibility = "hidden";
            }
            checkNumber.style.visibility = "visible";
    }
}
function toggleSetting() {
    if (setting.style.visibility = "visible") {
        setting.style.visibility = "hidden";
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
    /* Generate random number */
    var otp1Random = document.getElementById("otp-g-1").innerHTML = Math.floor(Math.random() * 10);
    var otp2Random = document.getElementById("otp-g-2").innerHTML = Math.floor(Math.random() * 10);
    var otp3Random = document.getElementById("otp-g-3").innerHTML = Math.floor(Math.random() * 10);
    var otp4Random = document.getElementById("otp-g-4").innerHTML = Math.floor(Math.random() * 10);
    /* User given number for verification */
    var otp1User = document.getElementById("otp1").value;
    var otp2User = document.getElementById("otp2").value;
    var otp3User = document.getElementById("otp3").value;
    var otp4User = document.getElementById("otp4").value;
    /* This will hide the model box */
    if (otp1Random+otp2Random+otp3Random+otp4Random === otp1User+otp2User+otp3User+otp4User) {
        alert ("OTP is correct")
    } else {
        alert ("OTP is incorrect")
    }
    
    /* otp timer*/
let timerOn = true;

function timer(remaining) {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;
  
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  document.getElementById('timer').innerHTML = m + ':' + s;
  remaining -= 1;
  
  if(remaining >= 0 && timerOn) {
    setTimeout(function() {
        timer(remaining);
    }, 1000);
    return;
  }

  if(!timerOn) {
    // Do validate stuff here
    document.getElementsByClassName("trigger").removeAttribute("onclick");
    return;
  }
  
  // Do timeout stuff here
  alert('Timeout for otp. Now you can generate new otp.');
}
timer(60);

        if ((otp1Random == otp1User) & (otp2Random == otp2User) & (otp3Random == otp3User) & (otp4Random == otp4User) ) {
            alert("Verified")
        } else {
            alert("OTP didn't match")
        }
    if (number.value.length >= 5) {
        var timer = document.getElementById("timer").style.visibility = "visible";
    }

    /* Check the otp code */
}

/* This is for verification box */
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