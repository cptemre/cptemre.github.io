var input1 = document.getElementById("input1");
var input1Value = input1.value;

var buttons = document.getElementsByTagName("button");
var numbers = document.getElementsByClassName("numbers");
var newButtons = [];
var newNumbers = [];

for (let i = 0; i < buttons.length; i++) {
    newButtons.push(buttons[i]);
    newNumbers.push(numbers[i]);
}

var firstNumber = 0;
var secondNumber = 0;
var operator;

for (let i = 0; i < newButtons.length; i++) {
    var count = 0;
    var timer0 = 0;
    var timer1 = 0;
    var timer2 = 0;
    var timer3 = 0;
    var timer4 = 0;
    var timer5 = 0;
    var timer6 = 0;
    var timer7 = 0;
    var timer8 = 0;
    var timer9 = 0;
    var timer10 = 0;
    newButtons[i].addEventListener("click", function () { 

        switch (i) {
            case 0:
                if (count == 0) {
                    if (timer0 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "*";
                        operator = "*";
                        count++;
                        timer0++;
                    }
                    else if (timer0 > 0) {
                        input1.value += "*";
                        firstNumber = firstNumber * secondNumber;
                    }
                }
                else {
                    count++;
                }
                timer8 = 0;
                console.log(count);
                break;
            case 1:
                if (count == 0) {
                    if (timer1 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "/";
                        operator = "/";
                        count++;
                        
                        timer1++;
                    }
                    else if (timer1 > 0) {
                        input1.value += "/";
                        firstNumber = firstNumber / secondNumber;
                    }
                }
                else {
                    count++;
                }
                timer0 = 0;
                timer8 = 0;
                console.log(count);
                break;
            case 2:
                if (count == 0) {
                    if (timer2 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "+";
                        operator = "+";
                        count++;
                        timer2++;
                    }
                    else if (timer2 > 0) {
                        input1.value += "+";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                timer0 = 0;
                timer1 = 0;
                timer8 = 0;
                console.log(count);
                break;
            case 3:
                if (count == 0) {
                    if (timer3 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "-";
                        operator = "-";
                        count++;
                        timer3++;
                    }
                    else if (timer3 > 0) {
                        input1.value += "-";
                        firstNumber = firstNumber - secondNumber;
                    }
                }
                else {
                    count++;
                }
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer8 = 0;
                console.log(count);
                break;
            case 4:
                if (count == 0) {
                    if (timer4 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += ".";
                        operator = ".";
                        count++;
                        timer4++;
                    }
                    else if (timer4 > 0) {
                        input1.value = "error";
                    }
                }
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer8 = 0;
                break;
            case 5:
                count = 0
                input1.value += newNumbers[0].value;
                break;
            case 6:
                count = 0
                switch (timer8) {
                    
                    case 0:
                        input1.value = "";
                        input1.value += 8;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 1:
                        input1.value = "";
                        input1.value += 88;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 8888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 88888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 8888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 88888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 888888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 8888888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 88888888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 888888888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 8888888888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 88888888888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 888888888888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 8888888888888888;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    default:
                        break;
                    console.log(timer8);
                }
                if (firstNumber == 0) {
                    input1.value = secondNumber;
                } else {
                    input1.value = firstNumber + operator + secondNumber;
                }
                if (operator == "*") {
                    input1.value = parseFloat(firstNumber * secondNumber);
                } else if (operator == "/") {
                    input1.value = firstNumber / secondNumber;
                } else if (operator == "+") {
                    input1.value = firstNumber + secondNumber;
                } else if (operator == "-") {
                    input1.value = firstNumber - secondNumber;
                }
                console.log(secondNumber);
                break;
            case 7:
                count = 0
                input1.value += 7;
                break;
            case 8:
                count = 0
                input1.value += 6;
                break;
            case 9:
                count = 0
                input1.value += 5;
                break;
            case 10:
                count = 0
                input1.value += 4;
                break;                                             
            case 11:
                count = 0
                input1.value += 3;
                break;
            case 12:
                count = 0
                input1.value += 2;
                break;
                count = 0
            case 13:
                count = 0
                input1.value += 1;
                Number(input1Value);
                break;
            case 14:
                count = 0
                input1.value += 0;
                break;
            case 15:
                count = 0
                timer8 = 0;
                if (operator == "*") {
                    input1.value = parseFloat(firstNumber * secondNumber);
                } else if (operator == "/") {
                    input1.value = firstNumber / secondNumber;
                } else if (operator == "+") {
                    input1.value = firstNumber + secondNumber;
                } else if (operator == "-") {
                    input1.value = firstNumber - secondNumber;
                }
                break;
            case 16:
                count = 0
                timer0 = 0;
                timer8 = 0;
                firstNumber = 0;
                secondNumber = 0;
                input1.value = "";
                break;
            default:
                break;
        }
    })
}