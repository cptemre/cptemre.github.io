$(function () {
    let newItems = `
<div class="newItems">
    <div class="item">
        First Item
    </div>
    <div class="delete">
        <i class="fas fa-trash deleteIcon"></i>
    </div>
</div>
`;
    let count = 0;
    // If there is stored info this code add them on load
    $(localStorage).each(function (index) {
        $(".items").append(newItems);
        $(`.item:eq(${index})`).html(localStorage.getItem(index + 1));
        deleteFunc()
    });

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

    function deleteFunc() {
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
                $(this).parent().parent().remove();
                let x = $(this).parent().parent().children(0).html();
                let i = localStorage.length;
                while (i-- > 0) {
                    let key = localStorage.key(i);
                    if (localStorage.getItem(key) === x) {
                        if (Number(key) == localStorage.length) {
                            localStorage.removeItem(Number(key));
                        } else {
                            while (Number(key) <= localStorage.length) {
                                localStorage.setItem(key, localStorage.getItem(Number(key) + 1))
                                key++
                                localStorage.removeItem(Number(key));
                            }
                        }
                    }
                }
            }
        });
    };

    $("body").on({
        keydown: function (e) {
            if (e.keyCode === 13) {
                $("#button1").css("color", "white");
                $("#button1").css("animation", "button1Animation1 1s infinite alternate");
                $("#button1").css("background-color", "black");
            }
        },
        keyup: function (e) {
            if (e.keyCode === 13) {
                addItem();
                deleteFunc();
                $("#button1").css("color", "black");
                $("#button1").css("background-color", "transparent");
                $("#button1").css("animation", "none");
                $("#input").val("");
            }
        }
    });

    $("#button1").on({
        click: function () {
            addItem();
            deleteFunc();
            $("#input").val("");
        },
        mouseenter: function () {
            $("#button1").css("color", "black");
            $("#button1").css("animation", "button1Animation1 1s infinite alternate");
            $("#button1").css("background-color", "transparent");
        },
        mouseleave: function () {
            $("#button1").css("color", "black");
            $("#button1").css("background-color", "transparent");
            $("#button1").css("animation", "none");
        },
        mousedown: function () {
            $("#button1").css("color", "white");
            $("#button1").css("background-color", "black");
        },
        mouseup: function () {
            $("#button1").css("color", "black");
            $("#button1").css("background-color", "transparent");
        }
    });


    $("#button2").on({
        click: function () {
            localStorage.clear();
            $(".newItems").remove();
        },
        mouseenter: function () {
            $("#button2").css("color", "black");
            $("#button2").css("animation", "button1Animation1 1s infinite alternate");
            $("#button2").css("background-color", "transparent");
        },
        mouseleave: function () {
            $("#button2").css("color", "black");
            $("#button2").css("background-color", "transparent");
            $("#button2").css("animation", "none");
        },
        mousedown: function () {
            $("#button2").css("color", "white");
            $("#button2").css("background-color", "black");
        },
        mouseup: function () {
            $("#button2").css("color", "black");
            $("#button2").css("background-color", "transparent");
        }
    });
});