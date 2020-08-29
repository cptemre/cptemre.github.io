function msg() {
    var msg = document.getElementById("input1").value;
    var maxLength = /^[\w\s]{1,27}$/
    var msg1 = document.getElementById("msg1");
    var deliver = document.getElementById("deliver");
    var wrong = document.getElementById("wrong");
    var header = document.getElementById("header");
    var btn1 = document.getElementById("btn1");

    if (msg == " ") {
        start(); // error msg fade in
        stop(); // error msg fade out
        stopMessageTime(); // if regular msg is visible, fade out
    }
    else if (maxLength.test(msg)) {
        startMessageTime(); // reg msg fade in
        stopMessageTime(); // reg msg fade out
    }
    else if (maxLength.test(msg) == false) {
        start(); // error msg fade in
        stop(); // error msg fade out
        stopMessageTime(); // if regular msg is visible, fade out
    } 
    else {
        start(); // error msg fade in
        stop(); // error msg fade out
        stopMessageTime(); // if regular msg is visible, fade out
    }
    msg1.innerHTML =msg; // reg msg value = input value
}

function spaceError() {
        wrong.innerHTML = "Please Enter a Valid Message";
        $("#wrong").fadeIn(1500);
}

function start() {
    id = setTimeout(spaceError)
}

function spaceErrorStop() {
    $("#wrong").fadeOut(1500);
}
function stop() {
    setTimeout(spaceErrorStop, 1000);
}

function startMessage() {
    $("#msg1").fadeIn(1500);
    $("#deliver").fadeIn(1500);
}

function startMessageTime() {
    setTimeout(startMessage);
}

function stopMessage() {
    $("#msg1").fadeOut(1500);
    $("#deliver").fadeOut(1500);
}

function stopMessageTime() {
    setTimeout(stopMessage);
}