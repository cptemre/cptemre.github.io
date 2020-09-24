let button0 = document.getElementById("button0");
let count = 3;
let toDo = document.getElementsByClassName("toDo");
let container0 = document.getElementById("container0");
document.body.style.gridTemplateRows = "0.1fr 0.1fr 0.1fr";
document.body.style.gridTemplateAreas = `". header0Div ."
". add ."
". clearDiv ."`;
let clearDiv = document.getElementById("clearDiv");
let newToDo = [];
for (let i = 0; i < 100; i++) {
    newToDo.push(toDo[0]);
}
let i = 0
$("#button0").click(function () {
    newToDo[i].style.cssText = `grid-area: newToDo${i} !important;`
    $("body").append(newToDo[i]);
    newToDo[i].style.display = "grid";
    document.body.style.gridTemplateRows += " 0.1fr";
    document.body.style.gridTemplateAreas += `
    ". newToDo${i} ."
    `;
    newToDo[0].style.gridRow =  count;
    clearDiv.style.gridRow = count+1;
    count++;
    i++;
});
