$(function () {
    let count = 0;
    let rowCount = 0;
    let questionValue;
    let answerValue;
    let inputValue;
    let typeVal = [];
    let tempObj = [];
    let card0DivInner = `<div class="card0Question">
    <p class="questionInner">My Question</p>
    <div class="showHideDiv">
        <button class="show">
            Show
        </button>
        <button class="hide">
            Hide
        </button>
    </div>
</div>
<div class="deleteCard">
    <button class="delete">
        Delete
    </button>
</div>
<div class="card0Answer">
    <p class="answerInner">My answer</p>
    <div class="showHideDiv">
        <button class="show">
            Show
        </button>
        <button class="hide">
            Hide
        </button>
    </div>
</div>`; 
    function mainButtonFunctions() {  
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
    }
    function typesMouseupFunction() {
        $(".types").mouseup(function () {
            var typesHtml = $(this).html();
            $("#newCard").css('display','grid').hide().slideDown(1000);
            let typesInner = $(this).html().trim();
            $("#type").val(typesInner);
            $("#type").prop("disabled", true);
            $("#flashCards, .card0Div").css('display','grid').slideDown(1000);
            $(".card0Div").append(`${card0DivInner}`);
            $(`.questionInner`).last().html(`${myObj[typesHtml][0]}`);
            $(".answerInner").last().html(`${myObj[typesHtml][1]}`);
            $("#saveButton").on({
                mouseup: function () { 
                    $(".card0Div").append(`${card0DivInner}`);
                        $(`.questionInner`).last().html(`${myObj[typesHtml][0]}`);
                        $(".answerInner").last().html(`${myObj[typesHtml][1]}`);
                    for (var member in myObj) delete myObj[member]
                    let i = 0;
                        while (i < $(`.questionInner`).length) {
                            console.log($(`.questionInner`).eq(i).html());
                            typeVal = [$("#type").val(), $(`.questionInner`).eq(i).html(), $(`.answerInner`).eq(i).html()];
                            tempObj.push(typeVal);
                            console.log(tempObj);
                            i++;
                        }
                }
            })
        });
    }
    //#region -- Action of main buttons and type buttons
    mainButtonFunctions();
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
        $(".card0Div").empty();
        console.log(tempObj);
        let i = 0;
        while (i < tempObj.length) {
            if (tempObj[i][0] == 2) {
                $(".card0Div").append(`${card0DivInner}`);
                $(`.questionInner`).last().html(`${tempObj[i][1]}`);
                $(".answerInner").last().html(`${tempObj[i][2]}`);
            } else {
                
            }
            i++;
        }
    });
    $("#selectFlashCard").mouseup(function () { 
        $("#newCard").slideUp(1000);
        $("#cardTypes").css('display','grid').hide().slideDown(1000);
        $(".card0Div").empty();
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
    typesMouseupFunction();
    //#endregion -- Types Action for Input Value

    //#region -- Save Button Actions
    let myObj = {}; //all input types will go inside this array. "inputValue: questionValue,answerValue". This is the format of array.
    $("#saveButton").on( {
        mousedown: function () {  
            $(this).css({
                "border-color": "violet",
                "background-color": "rgb(7, 33, 150)",
            });
        },
        mouseup: function () {  
            $(this).css({
                "border-color": "white",
                "background-color": " rgb(58, 56, 56)",
            });            
            if ($("#questionTextArea").val() != "" && $("#answerTextArea").val() != "" && $("#type").val() != "") {
                //#region -- Creating "inputValue: questionValue,answerValue"
                questionValue = $("#questionTextArea").val();
                answerValue = $("#answerTextArea").val();
                inputValue = $("#type").val();
                if (inputValue in myObj) {
                    console.log("Do nothing");
                } else {
                    $("#cardTypes").append(`<button class="mainButtons types">${inputValue}</button>`);
                }
                myObj[inputValue] = [questionValue,answerValue];
                console.log(myObj[`${inputValue}`]);
                //#endregion -- Creating "inputValue: questionValue,answerValue"
                
                $(`.types:nth-child(${count+1})`).css({
                    "grid-column": "1 / span 1",
                    "grid-row": `${rowCount+1} / span 1`
                });
                $(`.types:nth-child(${count+2})`).css({
                    "grid-column": "2 / span 1",
                    "grid-row": `${rowCount+1} / span 1`
                });
                $(`.types:nth-child(${count+3})`).css({
                    "grid-column": "3 / span 1",
                    "grid-row": `${rowCount+1} / span 1`
                });
                $(`.types:nth-child(${count+4})`).css({
                    "grid-column": "1 / span 2",
                    "grid-row": `${rowCount+2} / span 1`
                });
                $(`.types:nth-child(${count+5})`).css({
                    "grid-column": "2 / span 2",
                    "grid-row": `${rowCount+2} / span 1`
                });
                if ($(`.types`).length % 5 == 0) {
                    count += 5;
                    rowCount +=2;
                }
                
                mainButtonFunctions();
                typesMouseupFunction();
            } else {
                alert("Please Fill Question, Answer and Type Areas.")
            }
        }
    });
    //#endregion -- Save Button Actions

});