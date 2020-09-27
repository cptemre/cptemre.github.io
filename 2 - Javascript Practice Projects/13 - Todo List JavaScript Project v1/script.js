let button0 = document.getElementById("button0");
let row = 3;
let column = 2;
let toDo0 = `<div class="toDo">
<div class="newElements">
    <div class="task">
        asd
    </div>
    <div class="icons">
        <div class="checkDiv">
            <i class="far fa-check-square check"></i>
        </div>
        <div class="editDiv">
            <i class="fas fa-user-edit edit"></i>
        </div>
        <div class="cancelDiv">
            <i class="far fa-window-close cancel"></i>
        </div>
    </div>
</div>`;
let container0 = document.getElementById("container0");
container0.style.gridTemplateRows = "1fr 1.3fr 1fr";
container0.style.gridTemplateAreas = `". header0Div ."
". add ."
". clearDiv ."`;
let clearDiv = document.getElementById("clearDiv");
let newCount  = 0;
let input = document.getElementById("input0");
let task = document.getElementsByClassName("task");
let checkCount = 0;
$("#button0").click(function () {
    $("#container0").append(toDo0);
    let classes = document.getElementsByClassName("toDo");
    let check = document.getElementsByClassName("check");
    let cancel = document.getElementsByClassName("cancel"); 
    let edit = document.getElementsByClassName("edit");
    let clear = document.getElementById("clear");

    for (let i = 0; i < check.length; i++) {
        $(".check").click(function () { 
            let x = this.parentElement.parentElement.parentElement.parentElement.id;
            let y = document.getElementById(x).getElementsByTagName("div")[0].getElementsByTagName("div")[0];
            if (y.style.textDecoration == "") {
                y.style.textDecoration = "line-through";
                console.log(x)
                console.log(y)
            }
        });
        $(".edit").click(function () { 
            let x = this.parentElement.parentElement.parentElement.parentElement.id;
            let y = document.getElementById(x).getElementsByTagName("div")[0].getElementsByTagName("div")[0];
            if (y.style.textDecoration == "line-through") {
                y.style.textDecoration = "";
                console.log(x)
                console.log(y)
            }
        });
    }
    $(clear).click(function () { 
        for (let i = 0; i < cancel.length; i++) {
            $(`.toDo`).remove();
            clearDiv.style.gridArea = `3 / 2 / auto / auto`;
        }
        row = 3;
        newCount = 0;
    });
    container0.style.gridTemplateRows += " 1fr";
    for (let a = 0; a < cancel.length; a++) {
        cancel[a].addEventListener("click", function () { 
            console.log(a)
            let id = `toDo${a}`
            $(`#${id}`).remove();
            for (let x = 0; x < cancel.length; x++) {
                classes[x].style.gridArea = `${x+3} / 2 / auto / auto`;
                clearDiv.style.gridArea = `${classes.length+3} / 2 / auto / auto`;
            }
            if ($('.toDo').length == 0) {
                clearDiv.style.gridArea = `3 / 2 / auto / auto`;
            }
            newCount =0;
        })
    }
    for (let i = 0; i < classes.length; i++) {
        classes[i].id = "toDo"+i;
        classes[i].style.display = "grid";
        classes[i].style.gridArea = `${i+3} / 2 / auto / auto`;
    }
        classes[newCount].style.display = "grid";
        classes[newCount].style.gridArea = `${newCount+3} / 2 / auto / auto`;
        clearDiv.style.gridRow = classes.length+3;
        task[classes.length-1].innerHTML = input.value;
    row++;
    newCount++;
});
