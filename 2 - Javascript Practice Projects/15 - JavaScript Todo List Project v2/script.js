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

function addItem() {
        if ($("#input").val().length == 0) {
            alert("Please write a valid item.")
        } else {
            count = $(".newItems").length;
        let item = document.getElementsByClassName("item");
        $(".items").append(newItems);
            localStorage.setItem(item.length, $("#input").val());
        $(`.item:eq(${count})`).html(localStorage.getItem(item.length));
        }
}
$(localStorage).each(function (index) {
        $(".items").append(newItems);
        $(`.item:eq(${index})`).html(localStorage.getItem(index+1));
        $(".deleteIcon").on({
            mouseover: function () {  
                $(this).parent().parent().css("opacity", 0.2);
                $(this).parent().parent().css("background-color", "orangered");
            },
            mouseleave: function () {  
                $(this).parent().parent().css("opacity", 1);
                $(this).parent().parent().css("background-color", "white");
            },
            click: function () {  
                console.log(localStorage.getItem(localStorage.length))
                $(this).parent().parent().remove();
                let x = $(this).parent().parent().children(0).html();
                let i = localStorage.length;
                while (i-- > 0) {
                let key = localStorage.key(i);
                if (localStorage.getItem(key) === x) {
                    if (Number(key) == localStorage.length) {
                        localStorage.setItem(key, localStorage.getItem(Number(key)+1))
                        localStorage.removeItem(localStorage.length);
                    }
                    while (Number(key) < localStorage.length) {
                        localStorage.setItem(key, localStorage.getItem(Number(key)+1))
                        key++
                        localStorage.removeItem(key);
                    }
                    
                }
            }
            }
        });
});
function deleteItem() {
    $(".deleteIcon").on({
        mouseover: function () {  
            $(this).parent().parent().css("opacity", 0.2);
            $(this).parent().parent().css("background-color", "orangered");
        },
        mouseleave: function () {  
            $(this).parent().parent().css("opacity", 1);
            $(this).parent().parent().css("background-color", "white");
        },
        click: function () {  
            console.log(localStorage.getItem(localStorage.length))
            $(this).parent().parent().remove();
            let x = $(this).parent().parent().children(0).html();
            let i = localStorage.length;
            while (i-- > 0) {
            let key = localStorage.key(i);
            if (localStorage.getItem(key) === x) {
                if (Number(key) == localStorage.length) {
                    localStorage.setItem(key, localStorage.getItem(Number(key)+1))
                    localStorage.removeItem(localStorage.length);
                }
                while (Number(key) < localStorage.length) {
                    localStorage.setItem(key, localStorage.getItem(Number(key)+1))
                    key++
                    localStorage.removeItem(key);
                }
                
            }
        }
        }
    });
};
$("#button2").click(function () { 
    localStorage.clear();
    $(".newItems").remove();
});
$("body").keyup(function (e) { 
    if (e.keyCode === 13) {
        addItem();
    }
});
$("#button1").click(function () { 
        addItem();
        (function deleteItem() {
    $(".deleteIcon").on({
        mouseover: function () {  
            $(this).parent().parent().css("opacity", 0.2);
            $(this).parent().parent().css("background-color", "orangered");
        },
        mouseleave: function () {  
            $(this).parent().parent().css("opacity", 1);
            $(this).parent().parent().css("background-color", "white");
        },
        click: function () {  
            console.log(localStorage.getItem(localStorage.length))
            $(this).parent().parent().remove();
            let x = $(this).parent().parent().children(0).html();
            let i = localStorage.length;
            while (i-- > 0) {
            let key = localStorage.key(i);
            if (localStorage.getItem(key) === x) {
                if (Number(key) == localStorage.length) {
                    localStorage.setItem(key, localStorage.getItem(Number(key)+1))
                    localStorage.removeItem(localStorage.length);
                }
                while (Number(key) < localStorage.length) {
                    localStorage.setItem(key, localStorage.getItem(Number(key)+1))
                    key++
                    localStorage.removeItem(key);
                }
                
            }
        }
        }
    });
})();   
    });
});