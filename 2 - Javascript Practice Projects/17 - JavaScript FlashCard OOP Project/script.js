$(function () {
    //#region -- Action of main buttons and type buttons
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
                $(this).addClass("selected");
            } else {
                $(this).removeClass("mouseOver");
            }
            
            if ($(this).siblings().hasClass("selected")) {
                $(this).removeClass("mouseDown");
                $(this).removeClass("mouseOver");
                $(this).addClass("noneSelected");
            } else {
                $(this).removeClass("mouseOver");
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
    //#endregion -- Action of main buttons and type buttons

    $(".hideQuestionAnswer").on({
        mouseenter: function () {  
            $(this).addClass("hideQuestionAnswerMouseEnter");
            
        },
        mouseleave: function () {  
            $(this).addClass("hideQuestionAnswer");
            $(this).removeClass("hideQuestionAnswerMouseEnter");
        },
        mousedown: function () { 
            $(this).removeClass("hideQuestionAnswerMouseEnter");
            $(this).addClass("hideQuestionAnswerMouseDown"); 
        },
        mouseup: function () {  
            $(this).parent().slideUp(1000);
            $("#addFlashCard").removeClass("selected");
            $("#selectFlashCard").removeClass("noneSelected");
        }
    });

    $("#addFlashCard").mouseup(function () { 
        $("#newCard").css('display','grid').hide().slideDown(1000);
    });
    $("#selectFlashCard").mouseup(function () { 
        $("#newCard").slideUp(1000);
    });
});