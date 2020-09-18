var input1 = document.getElementById("input1");
var input1Value = input1.value;

var buttons = document.getElementsByTagName("button");
var numbers = document.getElementsByClassName("numbers");
var newButtons = [];
var newNumbers = [];
alert("This calculator only works with buttons and one calculation at a time!");
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
    var timer11 = 0;
    var timer12 = 0;
    var timer13 = 0;
    var timer14 = 0;
    var timer15 = 0;
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
                        console.log(firstNumber);
                    }
                    else if (timer0 > 0) {
                        input1.value += "*";
                        firstNumber = firstNumber * secondNumber;
                    }
                }
                else {
                    count++;
                }
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
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
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
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
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
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
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
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
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                break;
            case 5:
                count = 0;
                if (count == 0) {
                    if (timer5 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "9";
                        count++;
                        timer5++;
                    }
                    else if (timer5 > 0) {
                        input1.value += "9";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer5) {
                    case 0:
                        if (input1.value.indexOf(9) == -1) {
                            input1.value = "";
                        input1.value += 9;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 8;
                            timer5++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 99;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 9999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 99999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 9999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 99999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 999999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 9999999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 99999999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 999999999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 9999999999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 99999999999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 999999999999999;
                        timer5++;
                        secondNumber = Number(input1.value);
                        break;
                    default:
                        break;
                    console.log(timer5);
                }
                if (firstNumber == 0) {
                    input1.value = secondNumber;
                } else {
                    input1.value = firstNumber + operator + secondNumber;
                }
                if (operator == "*") {
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break;
            case 6:
                count = 0;
                if (count == 0) {
                    if (timer6 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "8";
                        count++;
                        timer6++;
                    }
                    else if (timer6 > 0) {
                        input1.value += "8";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer6) {
                    case 0:
                        if (input1.value.indexOf(8) == -1) {
                            input1.value = "";
                            input1.value += 8;
                            timer6++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 8;
                            timer6++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 88;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 8888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 88888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 8888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 88888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 888888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 8888888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 88888888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 888888888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 8888888888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 88888888888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 888888888888888;
                        timer6++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 8888888888888888;
                        timer6++;
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
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break;
            case 7:
                count = 0
                if (count == 0) {
                    if (timer7 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "7";
                        count++;
                        timer7++;
                    }
                    else if (timer7 > 0) {
                        input1.value += "7";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer7) {
                    case 0:
                        if (input1.value.indexOf(7) == -1) {
                            input1.value = "";
                            input1.value += 7;
                            timer7++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 7;
                            timer7++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 77;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 7777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 77777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 7777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 77777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 777777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 7777777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 77777777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 777777777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 7777777777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 77777777777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 777777777777777;
                        timer7++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 7777777777777777;
                        timer7++;
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
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break;
            case 8:
                count = 0
                if (count == 0) {
                    if (timer8 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "6";
                        count++;
                        timer8++;
                    }
                    else if (timer8 > 0) {
                        input1.value += "6";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer8) {
                    case 0:
                        if (input1.value.indexOf(6) == -1) {
                            input1.value = "";
                            input1.value += 6;
                            timer8++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 6;
                            timer8++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 66;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 6666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 66666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 6666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 66666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 666666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 6666666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 66666666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 666666666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 6666666666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 66666666666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 666666666666666;
                        timer8++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 6666666666666666;
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
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break;
            case 9:
                count = 0
                if (count == 0) {
                    if (timer9 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "5";
                        count++;
                        timer9++;
                    }
                    else if (timer9 > 0) {
                        input1.value += "5";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer9) {
                    case 0:
                        if (input1.value.indexOf(5) == -1) {
                            input1.value = "";
                            input1.value += 5;
                            timer9++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 5;
                            timer9++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 55;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 5555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 55555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 5555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 55555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 555555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 5555555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 55555555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 555555555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 5555555555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 55555555555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 555555555555555;
                        timer9++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 5555555555555555;
                        timer9++;
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
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break;
            case 10:
                count = 0
                if (count == 0) {
                    if (timer10 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "4";
                        count++;
                        timer10++;
                    }
                    else if (timer10 > 0) {
                        input1.value += "4";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer10) {
                    case 0:
                        if (input1.value.indexOf(4) == -1) {
                            input1.value = "";
                            input1.value += 4;
                            timer10++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 4;
                            timer10++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 44;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 4444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 44444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 4444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 44444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 444444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 4444444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 44444444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 444444444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 4444444444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 44444444444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 444444444444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 4444444444444444;
                        timer10++;
                        secondNumber = Number(input1.value);
                        break;
                    default:
                        break;
                    console.log(timer10);
                }
                if (firstNumber == 0) {
                    input1.value = secondNumber;
                } else {
                    input1.value = firstNumber + operator + secondNumber;
                }
                if (operator == "*") {
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break;                                             
            case 11:
                count = 0
                if (count == 0) {
                    if (timer11 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "3";
                        count++;
                        timer11++;
                    }
                    else if (timer11 > 0) {
                        input1.value += "3";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer11) {
                    case 0:
                        if (input1.value.indexOf(3) == -1) {
                            input1.value = "";
                            input1.value += 3;
                            timer11++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 3;
                            timer11++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 33;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 3333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 33333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 3333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 33333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 333333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 3333333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 33333333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 333333333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 3333333333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 33333333333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 333333333333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 3333333333333333;
                        timer11++;
                        secondNumber = Number(input1.value);
                        break;
                    default:
                        break;
                    console.log(timer11);
                }
                if (firstNumber == 0) {
                    input1.value = secondNumber;
                } else {
                    input1.value = firstNumber + operator + secondNumber;
                }
                if (operator == "*") {
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break;     
            case 12:
                count = 0
                if (count == 0) {
                    if (timer12 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "2";
                        count++;
                        timer12++;
                    }
                    else if (timer12 > 0) {
                        input1.value += "2";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer12) {
                    case 0:
                        if (input1.value.indexOf(2) == -1) {
                            input1.value = "";
                            input1.value += 2;
                            timer12++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 2;
                            timer12++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 22;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 2222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 22222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 2222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 22222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 222222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 2222222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 22222222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 222222222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 2222222222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 22222222222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 222222222222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 2222222222222222;
                        timer12++;
                        secondNumber = Number(input1.value);
                        break;
                    default:
                        break;
                    console.log(timer12);
                }
                if (firstNumber == 0) {
                    input1.value = secondNumber;
                } else {
                    input1.value = firstNumber + operator + secondNumber;
                }
                if (operator == "*") {
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break; 
            case 13:
                count = 0
                if (count == 0) {
                    if (timer13 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "1";
                        count++;
                        timer13++;
                    }
                    else if (timer13 > 0) {
                        input1.value += "1";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer14 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer13) {
                    case 0:
                        if (input1.value.indexOf(1) == -1) {
                            input1.value = "";
                            input1.value += 1;
                            timer13++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 1;
                            timer13++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 11;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 1111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 11111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 1111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 11111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 111111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 1111111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 11111111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 111111111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 1111111111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 11111111111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 111111111111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 1111111111111111;
                        timer13++;
                        secondNumber = Number(input1.value);
                        break;
                    default:
                        break;
                    console.log(timer13);
                }
                if (firstNumber == 0) {
                    input1.value = secondNumber;
                } else {
                    input1.value = firstNumber + operator + secondNumber;
                }
                if (operator == "*") {
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break; 
            case 14:
                count = 0
                if (count == 0) {
                    if (timer14 == 0) {
                        firstNumber = Number(input1.value);
                        console.log(firstNumber);
                        input1.value += "0";
                        count++;
                        timer14++;
                    }
                    else if (timer14 > 0) {
                        input1.value += "0";
                        firstNumber = firstNumber + secondNumber;
                    }
                }
                else {
                    count++;
                }
                count = 0;
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer15 = 0;
                console.log(count);
                break;
                switch (timer14) {
                    case 0:
                        if (input1.value.indexOf(0) == -1) {
                            input1.value = "";
                            input1.value += 0;
                            timer14++;
                            secondNumber = Number(input1.value);
                        break;
                        } else {
                            input1.value += 0;
                            timer14++;
                            secondNumber = Number(input1.value);
                        }
                    case 1:
                        input1.value = "";
                        input1.value += 00;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 2:
                        input1.value = "";
                        input1.value += 000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 3:
                        input1.value = "";
                        input1.value += 0000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 4:
                        input1.value = "";
                        input1.value += 00000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 5:
                        input1.value = "";
                        input1.value += 000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 6:
                        input1.value = "";
                        input1.value += 0000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 7:
                        input1.value = "";
                        input1.value += 00000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 8:
                        input1.value = "";
                        input1.value += 000000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 9:
                        input1.value = "";
                        input1.value += 0000000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 10:
                        input1.value = "";
                        input1.value += 00000000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 11:
                        input1.value = "";
                        input1.value += 000000000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 12:
                        input1.value = "";
                        input1.value += 0000000000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 13:
                        input1.value = "";
                        input1.value += 00000000000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 14:
                        input1.value = "";
                        input1.value += 000000000000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    case 15:
                        input1.value = "";
                        input1.value += 0000000000000000;
                        timer14++;
                        secondNumber = Number(input1.value);
                        break;
                    default:
                        break;
                    console.log(timer14);
                }
                if (firstNumber == 0) {
                    input1.value = secondNumber;
                } else {
                    input1.value = firstNumber + operator + secondNumber;
                }
                if (operator == "*") {
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                console.log(secondNumber);
                break; 
            case 15:
                count = 0
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0; 
                if (operator == "*") {
                    var index = input1.value.indexOf("*");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x * y);
                } else if (operator == "/") {
                    var index = input1.value.indexOf("/");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x / y);            
                } else if (operator == "+") {
                    var index = input1.value.indexOf("+");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x + y);
                } else if (operator == "-") {
                    var index = input1.value.indexOf("-");
                    var x = input1.value.substr(0,index);
                    var y = input1.value.substr(index+1);
                    x = Number(x);
                    y = Number(y);
                    console.log(x);
                    console.log(y);
                    input1.value = parseFloat(x - y);
                }
                break;
            case 16:
                count = 0
                timer0 = 0;
                timer1 = 0;
                timer2 = 0;
                timer3 = 0;
                timer4 = 0;
                timer5 = 0;
                timer6 = 0;
                timer7 = 0;
                timer8 = 0;
                timer9 = 0;
                timer10 = 0;
                timer11 = 0;
                timer12 = 0;
                timer13 = 0;
                timer14 = 0;
                timer15 = 0; 
                firstNumber = 0;
                secondNumber = 0;
                input1.value = "";
                break;
            default:
                break;
        }
    })
}