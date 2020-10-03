$(document).ready(function () {
    
let items = `<div class="items">
<div class="newItems">
    <div class="item">
        First Item
    </div>
    <div class="delete">
        <i class="fas fa-trash-alt deleteIcon"></i>
    </div>
</div>
</div>`
let container0 = document.getElementById("container0"); 
let input = document.getElementById("input");
let count = 0;
function iconFunction() { 
    $(items).insertAfter("#add");
    count = localStorage.length;
    $(`.item:eq(0)`).html(`${input.value}`);
    localStorage.setItem(count, $(".item:eq(0)").html());
    count++;
    $("#button").on({
        mouseenter: function () { 
            $(".newItems").css("opacity", 0.5);
        },
        mouseleave: function () { 
            $(".newItems").css("opacity", 1);
        },
        click: function () {  
            localStorage.clear();
            $(".items").remove();
        }
    });
    $(".deleteIcon").on({
        mouseenter: function () { 
            $(this).parent().parent().css("opacity", 0.5);
        },
        mouseleave: function () { 
            $(this).parent().parent().css("opacity", 1);
        },
        click: function () {
            $(this).parent().parent().remove();
            let x =$(this).parent().parent().children(0).html();
            console.log(x)
            let i = localStorage.length;
            while (i-- > 0) {
            let key = localStorage.key(i);
            if (localStorage.getItem(key) === x) {
                localStorage.removeItem(key);
            }
        }
        }
    });
};

for (let i = 0; i < 1000; i++) {
    if (localStorage.getItem(i)) {
        $(items).insertAfter("#add");
        $(`.item:eq(0)`).html(localStorage.getItem(i));
        console.log(localStorage.getItem(i));
    } 
    }
    $("#button").on({
        mouseenter: function () { 
            $(".newItems").css("opacity", 0.5);
        },
        mouseleave: function () { 
            $(".newItems").css("opacity", 1);
        },
        click: function () {  
            localStorage.clear();
            $(".items").remove();
        }
    });
    $(".deleteIcon").on({
        mouseenter: function () { 
            $(this).parent().parent().css("opacity", 0.5);
        },
        mouseleave: function () { 
            $(this).parent().parent().css("opacity", 1);
        },
        click: function () {
            $(this).parent().parent().remove();
            let x =$(this).parent().parent().children(0).html();
            console.log(x)
            let i = localStorage.length;
            while (i-- > 0) {
            let key = localStorage.key(i);
            if (localStorage.getItem(key) === x) {
                localStorage.removeItem(key);
            }
        }
        }
    });
$("#icon").click(function () { 
    iconFunction();
    console.log(localStorage.getItem(0));
});
$("body").keyup(function (e) { 
    if (e.keyCode === 13) {
        iconFunction();
    }
});
});