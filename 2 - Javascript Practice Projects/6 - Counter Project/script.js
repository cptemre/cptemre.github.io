var number = document.getElementById("number");

function decrease() { 
    number.innerHTML-- ;
    if (number.innerHTML < 0) {
        number.style.color = "red";
    }
    else if (number.innerHTML > 0) {
        number.style.color = "green";
    }
    else {
        number.style.color = "black";
    }
}

function increase() {
    number.innerHTML++ ;
    if (number.innerHTML < 0) {
        number.style.color = "red";
    }
    else if (number.innerHTML > 0) {
        number.style.color = "green";
    }
    else {
        number.style.color = "black";
    }
}