$(function () {
    $(".mainButtons").on({
        mouseenter: function () {  
            $(this).addClass("mouseOver");
            $(this).removeClass("selected");
            $(this).removeClass("noneSelected");
        },
        mouseleave: function () {  

            if ($(this).siblings().hasClass("noneSelected")) {
                $(this).removeClass("mouseDown");
                $(this).removeClass("mouseOver");
                console.log("hs")
            } else {
                $(this).removeClass("mouseOver");
                $(this).addClass("noneSelected");
            }
        },
        mousedown: function () { 
            $(this).addClass("mouseDown");
            $(this).removeClass("noneSelected");
            $(this).removeClass("mouseOver");

            $(this).siblings().addClass("noneSelected");
            $(this).siblings().removeClass("selected");
        },
        mouseup: function () {  
            $(this).addClass("selected");
            $(this).removeClass("mouseDown");
            $(this).removeClass("mouseOver");
            $(this).removeClass("noneSelected");
        }
    });
});