let button1 = document.getElementById("button1");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let container2 = document.getElementById("container2");
let row1Inner = `<div id="row1">
<div id="headerDiv1">
    <h1 id="header1">
        How Much Was Your Product?
    </h1>
</div>
<div id="iconInputDiv1">
    <div id="iconDiv1">
        <span id="iconSpan1">
            <i class="fas fa-euro-sign fa-2x"></i>
        </span>
    </div>
    <div id="inputDiv1">
        <input class="inputAll" type="number" name="" id="input1" placeholder="Enter a number.">
    </div>
</div>`;
let row2Inner = `<div id="row2">
<div id="headerDiv2">
    <h1 id="header2">
        How Many People Sharing the Tax?
    </h1>
</div>
<div id="iconInputDiv2">
    <div id="iconDiv2">
        <span id="iconSpan2">
            <i class="fas fa-users fa-2x"></i>
        </span>
    </div>
    <div id="inputDiv2">
        <input class="inputAll" type="number" name="" id="input2" placeholder="Enter a number.">
    </div>
</div>
</div>`;
let row5Inner = `<div class="rowExtra" id="row5">
<div id="row5Div" class="payBlank">
</div>
</div>`;
let row6Inner = `<div class="rowExtra" id="row6">
<div id="row6Div" class="payBlank">
</div>
</div>`;
let row7Inner = `<div class="rowExtra" id="row7">
<div id="row7Div" class="payBlank">
    
</div>
</div>`;
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let row5 = document.getElementById("row5");
let row6 = document.getElementById("row6");
let row7 = document.getElementById("row7");
let para1 = document.getElementById("para1");
let per = 0;
let total = 0;
let tax = 0;
let count = 0;

let round = function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
// Disable Spacing
document.body.addEventListener("keypress", function (event) {  
    if (event.keyCode === 32) {
        event.preventDefault;
    }
})
// Main Function
let calculate = function () {
    $("#row4").remove();
    if (input1.value == "") {
        if (input2.value == "") {
            row1.style.display = "none";
        row2.style.display = "none";
        $("#container2").append(row5Inner);
        $("#row5Div").append(`<p>This Section Must be Filled!</p>`);
        $("#row5").fadeOut(0);
        $("#row5").fadeIn(2000);
        $("#row5").fadeOut(6000);
        $("#container2").append(row6Inner);
        $("#row6Div").append(`<p>This Section Must be Filled!</p>`);
        $("#row6").fadeOut(0);
        $("#row6").fadeIn(2000);
        $("#row6").fadeOut(6000);
        $("#row1").fadeOut(0);
        $("#row2").fadeOut(0);
        container2.style.gridTemplateAreas = `"row5" "row6" "row3" "row4"`;
        setTimeout(() => {
            row1.style.display = "grid";
            row2.style.display = "grid";
            $("#row1").fadeIn();
            $("#row2").fadeIn();
            container2.style.gridTemplateAreas = `"row1" "row2" "row3" "row4"`
            $(".rowExtra").remove();
            $("#container2").append(row4);
        }, 7000);
        }
        else if (input2.value != "") {
            row1.style.display = "none";
            $("#container2").append(row5Inner);
            $("#row5Div").append(`<p>This Section Must be Filled!</p>`);
            $("#row5").fadeOut(0);
            $("#row5").fadeIn(2000);
            $("#row5").fadeOut(6000);
            $("#row1").fadeOut(0);
            container2.style.gridTemplateAreas = `"row5" "row2" "row3" "row4"`;
            setTimeout(() => {
                row1.style.display = "grid";
                $("#row1").fadeIn();
                container2.style.gridTemplateAreas = `"row1" "row2" "row3" "row4"`
                $(".rowExtra").remove();
                $("#container2").append(row4);
            }, 7000);
        }
    }
    if (input1.value != "") {
        row1.style.cssText = "display: grid !important";
        if (input2.value == "") {
            console.log("hi")
            row2.style.display = "none";
            $("#container2").append(row6Inner);
            $("#row6Div").append(`<p>This Section Must be Filled!</p>`);
            $("#row6").fadeOut(0);
            $("#row6").fadeIn(2000);
            $("#row6").fadeOut(6000);
            $("#row2").fadeOut(0);
            container2.style.gridTemplateAreas = `"row1" "row6" "row3" "row4"`;
            setTimeout(() => {
                row2.style.display = "grid";
                $("#row2").fadeIn();
                container2.style.gridTemplateAreas = `"row1" "row2" "row3" "row4"`
                $(".rowExtra").remove();
                $("#container2").append(row4);
            }, 7000);
            }
        }
        if (input1.value != "" && input1.value != 0 && input2.value != "" && input2.value != 0) {
            
            if (input3.value == "none") {
                total = input1.value;
                total = round(total,6);
                per = total / input2.value;
                per = round(per,6);
                row1.style.display = "none";
                row2.style.display = "none";
                row3.style.display = "none";
                $("#container2").append(row5Inner);
                $("#row5Div").append(`<p>Tax price is: ${tax} €</p>`);
                $("#row5").fadeOut(0);
                $("#row5").fadeIn(2000);
                $("#row5").fadeOut(6000);
                $("#container2").append(row6Inner);
                $("#row6Div").append(`<p>Total price is: ${total} €</p>`);
                $("#row6").fadeOut(0);
                $("#row6").fadeIn(2000);
                $("#row6").fadeOut(6000);
                $("#row1").fadeOut(0);
                $("#row2").fadeOut(0);
                $("#container2").append(row7Inner);
                $("#row7Div").append(`<p>Price per: ${per} €</p>`);
                $("#row7").fadeOut(0);
                $("#row7").fadeIn(2000);
                $("#row7").fadeOut(6000);
                $("#row3").fadeOut(0);
                container2.style.gridTemplateAreas = `"row5" "row6" "row7" "row4"`;
                setTimeout(() => {
                    row3.style.display = "grid";
                    $("#row1").fadeIn(1000);
                    $("#row2").fadeIn(1000);
                    $("#row3").fadeIn(1000);
                    container2.style.gridTemplateAreas = `"row1" "row2" "row3" "row4"`
                    $(".rowExtra").remove();
                    $("#container2").append(row4);
                }, 7000);
            } else if (input3.value == "eight") {
                tax = (input1.value * (8/100));
                tax = round(tax,6);
                total = Number(tax) + Number(input1.value);
                total = round(total,6);
                per = total / input2.value;
                per = round(per,6);
                row1.style.display = "none";
                row2.style.display = "none";
                row3.style.display = "none";
                $("#container2").append(row5Inner);
                $("#row5Div").append(`<p>Tax price is: ${tax} €</p>`);
                $("#row5").fadeOut(0);
                $("#row5").fadeIn(2000);
                $("#row5").fadeOut(6000);
                $("#container2").append(row6Inner);
                $("#row6Div").append(`<p>Total price is: ${total} €</p>`);
                $("#row6").fadeOut(0);
                $("#row6").fadeIn(2000);
                $("#row6").fadeOut(6000);
                $("#row1").fadeOut(0);
                $("#row2").fadeOut(0);
                $("#container2").append(row7Inner);
                $("#row7Div").append(`<p>Price per: ${per} €</p>`);
                $("#row7").fadeOut(0);
                $("#row7").fadeIn(2000);
                $("#row7").fadeOut(6000);
                $("#row3").fadeOut(0);
                container2.style.gridTemplateAreas = `"row5" "row6" "row7" "row4"`;
                setTimeout(() => {
                    row3.style.display = "grid";
                    $("#row1").fadeIn(1000);
                    $("#row2").fadeIn(1000);
                    $("#row3").fadeIn(1000);
                    container2.style.gridTemplateAreas = `"row1" "row2" "row3" "row4"`
                    $(".rowExtra").remove();
                    $("#container2").append(row4);
                }, 7000);
            } else {
                tax = (input1.value * (18/100));
                tax = round(tax,6);
                total = Number(tax) + Number(input1.value);
                total = round(total,6);
                per = total / input2.value;
                per = round(per,6);
                row1.style.display = "none";
                row2.style.display = "none";
                row3.style.display = "none";
                $("#container2").append(row5Inner);
                $("#row5Div").append(`<p>Tax price is: ${tax} €</p>`);
                $("#row5").fadeOut(0);
                $("#row5").fadeIn(2000);
                $("#row5").fadeOut(6000);
                $("#container2").append(row6Inner);
                $("#row6Div").append(`<p>Total price is: ${total} €</p>`);
                $("#row6").fadeOut(0);
                $("#row6").fadeIn(2000);
                $("#row6").fadeOut(6000);
                $("#row1").fadeOut(0);
                $("#row2").fadeOut(0);
                $("#container2").append(row7Inner);
                $("#row7Div").append(`<p>Price per: ${per} €</p>`);
                $("#row7").fadeOut(0);
                $("#row7").fadeIn(2000);
                $("#row7").fadeOut(6000);
                $("#row3").fadeOut(0);
                container2.style.gridTemplateAreas = `"row5" "row6" "row7" "row4"`;
                setTimeout(() => {
                    row3.style.display = "grid";
                    $("#row1").fadeIn(1000);
                    $("#row2").fadeIn(1000);
                    $("#row3").fadeIn(1000);
                    container2.style.gridTemplateAreas = `"row1" "row2" "row3" "row4"`
                    $(".rowExtra").remove();
                    $("#container2").append(row4);
                }, 7000);
            }
        }
}
button1.addEventListener("mousedown", function () { 
    button1.style.cssText = "letter-spacing: 0.1rem; width: 80%;";
})
// Button Action
button1.addEventListener("mouseup", function () {  
    calculate();
    button1.style.cssText = "letter-spacing: 0.2rem;";
});
button1.addEventListener("mouseenter", function () { 
    button1.style.cssText = "letter-spacing: 0.2rem; background-color: black; color: white;";
})
button1.addEventListener("mouseleave", function () { 
    button1.style.cssText = "letter-spacing: 0.1rem; background-color: gray; color: black;";
})

// Enter Key Action
document.body.addEventListener("keyup", function (e) {  
    if (e.keyCode == 13) {
        calculate();
        $("#row4").remove();
        setTimeout(() => {
            $("#container2").append(row4);
        }, 7000);
    }
})