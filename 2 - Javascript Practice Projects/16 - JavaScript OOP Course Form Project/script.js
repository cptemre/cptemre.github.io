$(function () {
        
    $(".inputs").on({
        keyup: function (e) { 
            this.value = $.trim(this.value)
            if ($(this).val().trim().length == 0) {
                $(this).css({
                    "border-color": "red"
                });
            } else {
                $(this).css({
                    "border-color": "green"
                });
            }
        },
        focus: function () {
            $(this).css({
                "background-color": "rgb(249, 245, 245)"
            });
            $(this).parent().parent().children().eq(0).children().eq(0).css({
                "color": "white"
            });
            $(this).parent().parent().children().eq(0).css({
                "background-color": "black",
            });
        },
        focusout: function () {
            if ($(this).val().trim().length == 0) {
                $(this).css({
                    "border-color": "red"
                });
            }
            $(this).css({
                "background-color": "rgb(249, 245, 245)"
            });
            $(this).parent().parent().children().eq(0).children().eq(0).css({
                "color": "rgb(77, 65, 65)"
            });
            $(this).parent().parent().children().eq(0).css({
                "background-color": "transparent",
            });
        }
    });
    if ($(this).val().length != 0) {
        alert("green")
    }
    $(".inputs").each(function () {
        if ($(this).val().charAt(0) = "") {
            $("#buttonDiv").on({
                mouseenter: function () {  
                    $(this).css({
                        "border-color": "black",
                        "opacity": "0.4",
                        "background-color": "rgb(191, 182, 187)"
                    });
                },
                mouseleave: function () {  
                    $(this).css({
                        "border-color": "rgb(126, 120, 123)",
                        "opacity": "0.3",
                        "background-color": "transparent"
                    });
                },
                mousedown: function () {  
                    $(this).css({
                        "border-color": "rgb(126, 120, 123)",
                        "opacity": "1",
                        "background-color": "black",
                        "color": "white",
                        "letter-spacing": "1rem"
                    });
                    $(this).html("Submitting");
                },
                mouseup: function () {  
                    $(this).css({
                        "border-color": "rgb(126, 120, 123)",
                        "opacity": "0.3",
                        "background-color": "transparent",
                        "color": "black",
                        "letter-spacing": "0"
                    });
                    $(this).html("Submit");
                }
            });
        }

    });
});