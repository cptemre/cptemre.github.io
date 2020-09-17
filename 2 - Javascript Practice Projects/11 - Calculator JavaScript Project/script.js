var input1 = document.getElementById("input1");
var input1Value = input1.value;

var buttons = document.getElementsByTagName("button");
var newButtons = [];

for (let i = 0; i < buttons.length; i++) {
    newButtons.push(buttons[i]);
}
for (let i = 0; i < newButtons.length; i++) {
    var count = 0;

    newButtons[i].addEventListener("click", function () { 

        switch (i) {
            case 0:
                if (count == 0) {
                    input1.value += "*";
                    count++;
                }
                else {
                    count++;
                }
                console.log(count);
                break;
            case 1:
                if (count == 0) {
                    input1.value += "/";
                    count++;
                }
                else {
                    count++;
                }
                console.log(count);
                break;
            case 2:
                if (count == 0) {
                    input1.value += "+";
                    count++;
                }
                else {
                    count++;
                }
                console.log(count);
                break;
            case 3:
                if (count == 0) {
                    input1.value += "-";
                    count++;
                }
                else {
                    count++;
                }
                console.log(count);
                break;
            case 4:
                if (count == 0) {
                    input1.value += ".";
                    count++;
                }
                else {
                    count++;
                }
                console.log(count);
                break;
            case 5:
                count = 0
                input1.value += 9;
                break;
            case 6:
                count = 0
                input1.value += 8;
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
                break;
            case 14:
                count = 0
                input1.value += 0;
                break;
            /* Equal case 15:
                count = 0
                input1.value += 0;
                break; */
            case 16:
                count = 0
                input1.value = "";
                break;
            default:
                break;
        }
        function repeat() {  
            if (input1Value.indexOf("*") == input1Value.indexOf(input1Value.length-1)) {
                input1.value += "";
            }
            else {
                input1.value += "";
            }
        } 
    })
}