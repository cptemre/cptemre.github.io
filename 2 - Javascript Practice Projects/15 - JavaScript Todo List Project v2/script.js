$(function () {
    let newItems = `
<div class="newItems">
    <div class="item">
        First Item
    </div>
    <div class="delete">
        <i class="fas fa-trash-alt deleteIcon"></i>
    </div>
</div>
`;
let count = 0;
for (let i = 0; i < 20; i++) {
    if (localStorage.getItem(i)) {
        $(".items").append(newItems);
        $(`.item:eq(${localStorage.length-1})`).html(localStorage.getItem(i));
        console.log(localStorage.getItem(newItems.length));
        console.log(localStorage.length);
        console.log(localStorage.getItem(i));

    }     
}

$("#button2").click(function () { 
    localStorage.clear()
    
});
$("#button1").click(function () { 
    count = $(".newItems").length;

        let item = document.getElementsByClassName("item");
        $(".items").append(newItems);
        localStorage.setItem(item.length, $("#input").val());
        $(`.item:eq(${count})`).html(localStorage.getItem(item.length));
        console.log(localStorage.length);
        console.log(localStorage.getItem(1));
        console.log(localStorage.getItem(localStorage.length));
        $(".delete").on({
            mouseover: function () {  
                $(this).parent().css("opacity", 0.2);
            },
            mouseleave: function () {  
                $(this).parent().css("opacity", 1);
            }
        });
    });
});