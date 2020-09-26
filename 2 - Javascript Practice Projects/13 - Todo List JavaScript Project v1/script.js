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

$("#button0").click(function () {
    $("#container0").append(toDo0);
    let classes = document.getElementsByClassName("toDo");
    let check = document.getElementsByClassName("check");
    let cancel = document.getElementsByClassName("cancel");    
    classes[newCount].style.display = "grid";
    container0.style.gridTemplateRows += " 1fr";
    container0.style.gridTemplateAreas += `
    ". toDo${newCount} ."
    `;
    for (let i = 0; i < classes.length; i++) {
        classes[i].id = "toDo"+i;
    }
    classes[newCount].style.gridArea = `toDo${newCount}`;
    classes[newCount].style.gridRow =  row;
    classes[newCount].style.gridColumn =  column;
    task[newCount].innerHTML = input.value;
    clearDiv.style.gridRow = row+1;
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener("click", function () { 
            if (task[i].style.cssText == `text-decoration: line-through; opacity: 0.7;`) {
                task[i].style.cssText = `text-decoration: none; opacity: 1;`
            } else {
                task[i].style.cssText = `text-decoration: line-through; opacity: 0.7;`
            } 
            ;
        })
    }
    for (let i = 0; i < cancel.length; i++) {
        cancel[i].addEventListener("click", function () { 
            let id = `toDo${i}`
            $(`#${id}`).remove();
            for (let x = 0; x < cancel.length; x++) {
                classes[x].style.gridArea = `${x+3} / 2 / auto / auto`;
                clearDiv.style.gridArea = `${cancel.length+3} / 2 / auto / auto`;
                
                i++;                
            }
            if ($('.toDo').length == 0) {
                clearDiv.style.gridArea = `3 / 2 / auto / auto`;
            }
        })
    }
    row++;
    newCount++;
});
