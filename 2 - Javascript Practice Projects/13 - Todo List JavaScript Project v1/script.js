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
let toDo1 = `<div class="toDo">
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
</div>`
let container0 = document.getElementById("container0");
container0.style.gridTemplateRows = "1fr 1.3fr 1fr";
container0.style.gridTemplateAreas = `". header0Div ."
". add ."
". clearDiv ."`;
let clearDiv = document.getElementById("clearDiv");

let newCount  = 0
$("#button0").click(function () {
    $("#container0").append(toDo0);
    let classes = document.getElementsByClassName("toDo");
    for (let i = 0; i < 1; i++) {
        classes[i].id = i
    }
    classes[newCount].style.display = "grid";
    container0.style.gridTemplateRows += " 1fr";
    container0.style.gridTemplateAreas += `
    ". toDo${newCount} ."
    `;
    classes[newCount].style.gridArea = `toDo${newCount}`;
    classes[newCount].style.gridRow =  row;
    classes[newCount].style.gridColumn =  column;
    clearDiv.style.gridRow = row+1;
    row++;
    newCount++;
});
