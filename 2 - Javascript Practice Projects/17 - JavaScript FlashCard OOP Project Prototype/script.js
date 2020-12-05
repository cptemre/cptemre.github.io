$(function () {
    let count = 0;
    let rowCount = 0;
    let questionValue;
    let answerValue;
    let inputValue;
    let typeVal = [];
    let tempObj = [];
    let stringfy;
    let parse;
    let i = 0;
    let typesArray = [];
    let card0DivInner = `<div class="mainCardContainer">
    <div class="card0Question">
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
            $("#newCard").css('display', 'grid').hide().slideDown(1000);
            let typesInner = $(this).html().trim();
            $("#type").val(typesInner);
            $("#type").prop("disabled", true);
            $("#flashCards, .card0Div").css('display', 'grid').slideDown(1000);
            console.log(tempObj);
            parse = JSON.parse(tempObj[i])
            console.log(parse[0]);
            $(".card0Div").empty();
            while (i < tempObj.length) {
                parse = JSON.parse(tempObj[i])
                if (parse[0] == typesHtml) {
                    console.log("hi")
                    console.log(typesHtml);
                    $(".card0Div").append(`${card0DivInner}`);
                    $(`.questionInner`).last().html(`${parse[1]}`);
                    $(".answerInner").last().html(`${parse[2]}`);
                }
                i++;
            }
            i = 0;
            $(".card0Question").css("animation", "cardAnimation0 2s forwards");
            $(".card0Answer").css("animation", "cardAnimation1 2s forwards");
            $("#saveButton").on({
                mouseup: function () {
                    questionValue = $("#questionTextArea").val();
                    answerValue = $("#answerTextArea").val();
                    inputValue = $("#type").val();
                    myObj = [inputValue, questionValue, answerValue];
                    stringfy = JSON.stringify(myObj);
                    tempObj.push(stringfy);
                    tempObj = $.unique(tempObj.sort());
                    console.log(myObj)
                    console.log(tempObj);
                    let x = 0
                    $(".card0Div").empty();
                    while (x < tempObj.length) {
                        parse = JSON.parse(tempObj[x])
                        if (parse[0] == 2) {
                            console.log("hi")
                            console.log(typesHtml);
                            $(".card0Div").append(`${card0DivInner}`);
                            $(`.questionInner`).last().html(`${parse[1]}`);
                            $(".answerInner").last().html(`${parse[2]}`);
                        } else {}
                        x++;
                    }
                    $(".delete").on({
                        mouseup: function () {
                            let questionInner = $(this).parent().siblings(".card0Question").children(".questionInner").html();
                    let answerInner = $(this).parent().siblings(".card0Answer").children(".answerInner").html();
                    myObj = [inputValue, questionInner, answerInner];
                    stringfy = JSON.stringify(myObj);
                    tempObj = tempObj.filter(e => e !== stringfy);
                    console.log(tempObj);
                    $(this).parent().siblings(".card0Question").css("animation", "cardAnimation00 2s  forwards").fadeOut(2000);
                    $(this).parent().siblings(".card0Answer").css("animation", "cardAnimation11 2s forwards").fadeOut(2000);
                    $(this).parent().fadeOut(2000);
                    
                    $(this).parent().parent().siblings().css("animation", "mainCardContainerAnimation0 2s forwards");
                    setTimeout(() => {
                        $(this).parent().parent().siblings().css("animation", "mainCardContainerAnimation00 0s forwards")                        
                    }, 2000);
                        }
                    });
                }
            })
            $(".delete").on({
                mouseup: function () {
                    let questionInner = $(this).parent().siblings(".card0Question").children(".questionInner").html();
                    let answerInner = $(this).parent().siblings(".card0Answer").children(".answerInner").html();
                    myObj = [inputValue, questionInner, answerInner];
                    stringfy = JSON.stringify(myObj);
                    tempObj = tempObj.filter(e => e !== stringfy);
                    console.log(tempObj);
                    $(this).parent().siblings(".card0Question").css("animation", "cardAnimation00 2s  forwards").fadeOut(2000);
                    $(this).parent().siblings(".card0Answer").css("animation", "cardAnimation11 2s forwards").fadeOut(2000);
                    $(this).parent().fadeOut(2000);
                    
                    $(this).parent().parent().siblings().css("animation", "mainCardContainerAnimation0 2s forwards");
                    setTimeout(() => {
                        $(this).parent().parent().siblings().css("animation", "mainCardContainerAnimation00 0s forwards")                        
                    }, 2000);
                }
            });
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
        $("#newCard").css('display', 'grid').hide().slideDown(1000);
        $("#type").attr("placeholder", "Input a Type").val("");
        $("#type").prop("disabled", false);
        $("#cardTypes").slideUp(1000);
        $(".card0Div").empty();
    });
    $("#selectFlashCard").mouseup(function () {
        $("#newCard").slideUp(1000);
        $("#cardTypes").css('display', 'grid').hide().slideDown(1000);
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
    $("#saveButton").on({
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
                while (i < $(".types").length) {
                    typesArray.push($(".types").eq(i).html())
                    i++;
                }
                console.log(typesArray)
                i = 0;
                if (typesArray.includes(inputValue)) {
                    console.log("Do nothing");
                } else {
                    $("#cardTypes").append(`<button class="mainButtons types">${inputValue}</button>`);
                }
                myObj = [inputValue, questionValue, answerValue];
                stringfy = JSON.stringify(myObj);
                tempObj.push(stringfy);
                tempObj = $.unique(tempObj.sort());
                console.log(tempObj);
                console.log(JSON.parse(tempObj[0]))

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
                    rowCount += 2;
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