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