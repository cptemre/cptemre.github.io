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
<div class="payBlank">
    <p>This Section Must Be Filled!
    </p>
</div>
</div>`;
let row6Inner = `<div class="rowExtra" id="row6">
<div class="payBlank">
    <p>This Section Must Be Filled!
    </p>
</div>
</div>`;
let row1 = document.getElementById("row1");
let row2 = document.getElementById("row1");
let row5 = document.getElementById("row5");
let row6 = document.getElementById("row6");
let inputAll = document.getElementsByClassName("inputAll");

// Disable spacing
document.body.addEventListener("keypress", function (event) {  
    if (event.keyCode === 32) {
        event.preventDefault;
    }
})
input1.addEventListener('focus', function () {
    console.log(input1.value)
});
input2.addEventListener('focus', function () {
    console.log(input2.value)
});
let x;
let y;
button1.addEventListener("mouseup", function () {
    if (input1.value == "") {
        if (input2.value == "") {
            row1.style.display = "none";
        row2.style.display = "none";
        $("#container2").append(row5Inner);
        $("#row5").fadeOut(0);
        $("#row5").fadeIn(1000);
        $("#row5").fadeOut(2000);
        $("#container2").append(row6Inner);
        $("#row6").fadeOut(0);
        $("#row6").fadeIn(1000);
        $("#row6").fadeOut(2000);
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
        }, 3000);
        $("#input1").val("");
        $("#input2").val("");
        }
        else if (input2.value != "") {
            row1.style.display = "none";
            $("#container2").append(row5Inner);
            $("#row5").fadeOut(0);
            $("#row5").fadeIn(1000);
            $("#row5").fadeOut(2000);
            $("#row1").fadeOut(0);
            container2.style.gridTemplateAreas = `"row5" "row2" "row3" "row4"`;
            setTimeout(() => {
                row1.style.display = "grid";
                $("#row1").fadeIn();
                container2.style.gridTemplateAreas = `"row1" "row2" "row3" "row4"`
                $(".rowExtra").remove();
            }, 3000);
            $("#input1").val("");
            $("#input2").val(1);
        }
    }
    if (input1.value != "") {
        row1.style.cssText = "display: grid !important";
        if (input2.value == "") {
            console.log("hi")
            $("#container2").append(row6Inner);
            $("#row6").fadeOut(0);
            $("#row6").fadeIn(1000);
            $("#row6").fadeOut(2000);
            $("#row2").fadeOut(0);
            container2.style.gridTemplateAreas = `"row1" "row6" "row3" "row4"`;
            setTimeout(() => {
                row2.style.display = "grid";
                $("#row2").fadeIn();
                container2.style.gridTemplateAreas = `"row1" "row2" "row3" "row4"`
                $(".rowExtra").remove();
            }, 3000);
            $("#input1").val(1);
            $("#input2").val("");
            }
        }
});
