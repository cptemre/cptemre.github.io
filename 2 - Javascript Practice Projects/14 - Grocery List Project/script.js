let items = `<div class="items">
<div class="newItems">
    <div class="item">
        First Item
    </div>
    <div class="delete">
        <i class="fas fa-trash-alt"></i>
    </div>
</div>
</div>`
let container0 = document.getElementById("container0");
container0.style.gridTemplateRows = "0.2fr 0.07fr 0.2fr";
container0.style.gridTemplateAreas = `". headerDiv ."
". add ."
". buttonDiv ."`;
$("#icon").click(function () { 
    $("#container0").append(items);
    container0.style.gridTemplateRows += "0.1fr";
    container0.style.gridTemplateAreas = `". headerDiv ."
". add ."
". items ."
". buttonDiv ."`;
    $(".items").css("display", "grid");
});

$(".delete").on({
    mouseenter: function () { 
        $(this).parent().css("opacity", 0.5);
    },
    mouseleave: function () { 
        $(this).parent().css("opacity", 1);
    }
});

$("#button").on({
    mouseenter: function () { 
        $(".newItems").css("opacity", 0.5);
    },
    mouseleave: function () { 
        $(".newItems").css("opacity", 1);
    }
});
