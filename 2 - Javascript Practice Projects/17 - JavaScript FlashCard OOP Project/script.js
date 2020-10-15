$(function () {

    let objects = {};
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
            $(this).removeClass("hideQuestionAnswerMouseDown"); 
            $(this).parent().slideUp(1000);
            $("#addFlashCard").removeClass("selected");
            $("#selectFlashCard").removeClass("noneSelected");
        }
    });
    //#region -- Add and Select Flash Card Functions
    $("#addFlashCard").mouseup(function () { 
        $("#newCard").css('display','grid').hide().slideDown(1000);
        $("#type").attr("placeholder", "Input a Type").val("");
        $("#type").prop("disabled", false);
        $("#cardTypes").slideUp(1000);
    });
    $("#selectFlashCard").mouseup(function () { 
        $("#newCard").slideUp(1000);
        $("#cardTypes").css('display','grid').hide().slideDown(1000);
    });
    //#endregion -- Add and Select Flash Card Functions

    //#region -- Text Area Focus and Focus Out Action
    $("#questionTextArea").on({
        focus: function () {  
            $(this).css("border-color", "rgb(97, 14, 14)");
        },
        focusout: function () {  
            $(this).css("border-color", "gray");
        },
    });
    $("#answerTextArea").on({
        focus: function () {  
            $(this).css("border-color", "rgb(97, 14, 14)");
        },
        focusout: function () {  
            $(this).css("border-color", "gray");
        },
    });
    //#endregion -- Text Area Focus and Focus Out Action

    //#region -- Type Focus and Out Action
    $("#type").focus(function () { 
        $(this).css("border-color", "violet");
    });
    $("#type").focusout(function () { 
        $(this).css("border-color", "white");
    });
    //#endregion -- Type Focus and Out Action

    //#region -- Types Action for Input Value
    $(".types").mouseup(function () { 
        $("#newCard").css('display','grid').hide().slideDown(1000);
        let typesInner = $(this).html().trim();
        $("#type").val(typesInner);
        $("#type").prop("disabled", true);
    });
    //#endregion -- Types Action for Input Value

    //#region -- Save Button Actions

    $("#saveButton").on( {
        mousedown: function () {  
            $(this).css("border-color", "violet");
        },
        mouseup: function () {  
            $(this).css("border-color", "white");
            if ($("questionTextArea").val() != "" && $("answerTextArea").val() != "" && $("#type").val() != "") {
                let zero = {}
                console.log(a)
                console.log(`$("questionTextArea").val()`)
            } else {
                alert("Please Fill Question, Answer and Type Areas.")
            }
        }
    });
    //#endregion -- Save Button Actions

});