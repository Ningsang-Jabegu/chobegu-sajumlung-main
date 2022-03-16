
/* This is for setting drop box */
    const setting = document.querySelector(".setting-dropbox");
    const settingSVG = document.querySelector(".setting");
    const settingLists = document.querySelector(".settingLists").getElementsByTagName('ul');
    /* This will display the drop down content as well as hide 
        when clicking on the settingSVG */
    function settingDrpBox() {
        /* Audio for setting */
        setting.classList.toggle("show-setting");
    }
    /*This will hide the drop down content when clicked in 
        background of the drop down content box */
    
/* This is setting content */
/*-webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 2s */
    /* First setting Content */
        function settingContent1() {
            document.querySelector(".settingContent-modalBox").style.visibility = "visible";
            document.querySelector(".settingBox1").style.visibility = "visible";
            document.querySelector("li:first-child").style.background = "green";
            document.querySelector("li:first-child").style.color = "#fff";
            document.querySelector("li:first-child").style.fill = "#fff";
        };
        /* On clicking X hide model */
        function closeSetting1() {
            document.querySelector(".settingContent-modalBox").style.visibility = "hidden";
            document.querySelector(".settingBox1").style.visibility = "hidden";
            document.querySelector("li:first-child").style.background = "transparent";
            document.querySelector("li:first-child").style.color = "#000";
            document.querySelector("li:first-child").style.fill = "#000";
            document.querySelector(".settingBody h1:first-child div:nth-child(2) svg").style.visibility = "hidden";
            document.querySelector(".settingBody h1:first-child div:nth-child(4) svg").style.visibility = "hidden";
        }
    /* Second setting Content */
        function settingContent2() {
            document.querySelector(".settingContent-modalBox").style.visibility = "visible";
            document.querySelector(".settingBox2").style.visibility = "visible";
            document.querySelector("li:nth-child(2)").style.background = "green";
            document.querySelector("li:nth-child(2)").style.color = "#fff";
            document.querySelector("li:nth-child(2)").style.fill = "#fff";
        };
        /* On clicking X hide model */
        function closeSetting2() {
            document.querySelector(".settingContent-modalBox").style.visibility = "hidden";
            document.querySelector(".settingBox2").style.visibility = "hidden";
            document.querySelector("li:nth-child(2)").style.background = "transparent";
            document.querySelector("li:nth-child(2)").style.color = "#000";
            document.querySelector("li:nth-child(2)").style.fill = "#000";
        }
    /* Third setting Content */
        function settingContent3() {
            document.querySelector(".settingContent-modalBox").style.visibility = "visible";
            document.querySelector(".settingBox3").style.visibility = "visible";
            document.querySelector("li:nth-child(3)").style.background = "green";
            document.querySelector("li:nth-child(3)").style.color = "#fff";
            document.querySelector("li:nth-child(3)").style.fill = "#fff";
        };
        /* On clicking X hide model */
        function closeSetting3() {
            document.querySelector(".settingContent-modalBox").style.visibility = "hidden";
            document.querySelector(".settingBox3").style.visibility = "hidden";
            document.querySelector("li:nth-child(3)").style.background = "transparent";
            document.querySelector("li:nth-child(3)").style.color = "#000";
            document.querySelector("li:nth-child(3)").style.fill = "#000";
        }
    /* Fourth setting Content */
        function settingContent4() {
            document.querySelector(".settingContent-modalBox").style.visibility = "visible";
            document.querySelector(".settingBox4").style.visibility = "visible";
            document.querySelector("li:nth-child(4)").style.background = "green";
            document.querySelector("li:nth-child(4)").style.color = "#fff";
            document.querySelector("li:nth-child(4)").style.fill = "#fff";
        };
        /* On clicking X hide model */
        function closeSetting4() {
            document.querySelector(".settingContent-modalBox").style.visibility = "hidden";
            document.querySelector(".settingBox4").style.visibility = "hidden";
            document.querySelector("li:nth-child(4)").style.background = "transparent";
            document.querySelector("li:nth-child(4)").style.color = "#000";
            document.querySelector("li:nth-child(4)").style.fill = "#000";
        }
    /* Fifth setting Content */
        function settingContent5() {
            document.querySelector(".settingContent-modalBox").style.visibility = "visible";
            document.querySelector(".settingBox5").style.visibility = "visible";
            document.querySelector("li:nth-child(5)").style.background = "green";
            document.querySelector("li:nth-child(5)").style.color = "#fff";
            document.querySelector("li:nth-child(5)").style.fill = "#fff";
        };
        /* On clicking X hide model */
        function closeSetting5() {
            document.querySelector(".settingContent-modalBox").style.visibility = "hidden";
            document.querySelector(".settingBox5").style.visibility = "hidden";
            document.querySelector("li:nth-child(5)").style.background = "transparent";
            document.querySelector("li:nth-child(5)").style.color = "#000";
            document.querySelector("li:nth-child(5)").style.fill = "#000";
        }
    /* Sixth setting Content */
        function settingContent6() {
            document.querySelector(".settingContent-modalBox").style.visibility = "visible";
            document.querySelector(".settingBox6").style.visibility = "visible";
            document.querySelector("li:nth-child(6)").style.background = "green";
            document.querySelector("li:nth-child(6)").style.color = "#fff";
            document.querySelector("li:nth-child(6)").style.fill = "#fff";
        };
        /* On clicking X hide model */
        function closeSetting6() {
            document.querySelector(".settingContent-modalBox").style.visibility = "hidden";
            document.querySelector(".settingBox6").style.visibility = "hidden";
            document.querySelector("li:nth-child(6)").style.background = "transparent";
            document.querySelector("li:nth-child(6)").style.color = "#000";
            document.querySelector("li:nth-child(6)").style.fill = "#000";
        }
    /* Seventh setting Content */
        function settingContent7() {
            document.querySelector(".settingContent-modalBox").style.visibility = "visible";
            document.querySelector(".settingBox7").style.visibility = "visible";
            document.querySelector("li:nth-child(7)").style.background = "green";
            document.querySelector("li:nth-child(7)").style.color = "#fff";
            document.querySelector("li:nth-child(7)").style.fill = "#fff";
        };
        /* On clicking X hide model */
        function closeSetting7() {
            document.querySelector(".settingContent-modalBox").style.visibility = "hidden";
            document.querySelector(".settingBox7").style.visibility = "hidden";
            document.querySelector("li:nth-child(7)").style.background = "transparent";
            document.querySelector("li:nth-child(7)").style.color = "#000";
            document.querySelector("li:nth-child(7)").style.fill = "#000";
        }
    /* Eight setting Content */
        function settingContent8() {
            document.querySelector(".settingContent-modalBox").style.visibility = "visible";
            document.querySelector(".settingBox8").style.visibility = "visible";
            document.querySelector("li:nth-child(8)").style.background = "green";
            document.querySelector("li:nth-child(8)").style.color = "#fff";
            document.querySelector("li:nth-child(8)").style.fill = "#fff";
        };
        /* On clicking X hide model */
        function closeSetting8() {
            document.querySelector(".settingContent-modalBox").style.visibility = "hidden";
            document.querySelector(".settingBox8").style.visibility = "hidden";
            document.querySelector("li:nth-child(8)").style.background = "transparent";
            document.querySelector("li:nth-child(8)").style.color = "#000";
            document.querySelector("li:nth-child(8)").style.fill = "#000";
        }
/* This is for default theme setting content */
    function defaultTheme1() {
        const tick = document.querySelector(".settingBody h1:first-child div:nth-child(2) svg").style.visibility = "visible";
        alert(tick.value);
        if (tick.value = "visible") {
            tick.value = "hide";
            }
    }
    function defaultTheme2() {
        const tick = document.querySelector(".settingBody h1:first-child div:nth-child(4) svg").style.visibility = "visible";

    }

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
    };

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
};
var windowOnClick;
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
};

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
};