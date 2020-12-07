$(function () {
    let count = 0;
    let rowCount = 0;
    let questionValue;
    let answerValue;
    let inputValue;
    let typeVal = [];
    let tempObj = [];
    let typesBlock;
    console.log(tempObj)
    console.log(localStorage)
    if (localStorage.length == 0) {
        tempObj = [];
    } else {
        let a = 0;
        while (a < localStorage.length) {
            tempObj.push(localStorage.getItem(a));
            a++;
        }
        let b = 0;
        let typesHeaders = [];
        while (b < tempObj.length) {
            let parse = JSON.parse(tempObj[b])
            typesHeaders.push(parse[0]);
            typesHeaders = $.unique(typesHeaders.sort());
            console.log(typesHeaders)
            if (typesHeaders[b] !== undefined) {
                $("#cardTypes").append(`<button class="mainButtons types">${typesHeaders[b]}</button>`);
            }
            console.log()
            b++;
        }
        count = 0;
        rowCount = 0;
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
        a = 0;
        b = 0;
    }
    console.log(tempObj)
    console.log(localStorage)
    let stringfy;
    let parse;
    let i = 0;
    let typesArray = [];
    var typesHtml;
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
        <button class="hideQuestionAnswer delete">
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
    function showHide() {
        $(".show").on({
            mouseup: function () {
                $(this).parent().siblings().fadeIn(500);
                $(this).css("background-color", `rgba(56, 128, 56, 0.5)`);
                $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
            }
        });
        $(".hide").on({
            mouseup: function () {
                $(this).parent().siblings().fadeOut(500);
                $(this).css("background-color", `rgba(146, 31, 31, 0.5)`);
                $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
            }
        });
    }
    function hideQuestionAnswer() {
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
                $("#addFlashCard").removeClass("selected");
                $("#selectFlashCard").removeClass("noneSelected");
            }
        });
    }
    function questionAnswerInner() {
        let i = 0;
        while (i < tempObj.length) {
            parse = JSON.parse(tempObj[i])
            if (parse[0] == typesHtml) {
                $(".card0Div").append(`${card0DivInner}`);
                $(`.questionInner`).last().css("visibility", "visible").html(`${parse[1]}`);
                $(".answerInner").last().fadeOut(0).html(`${parse[2]}`);
                $(".answerInner").siblings(".showHideDiv").children(".hide").css("background-color", `rgba(146, 31, 31, 0.5)`);
                $(".questionInner").siblings(".showHideDiv").children(".show").css("background-color", `rgba(56, 128, 56, 0.5)`);
                $(".questionInner").parent().css("grid-template-areas", `"questionInner""showHideDiv"`);
                $(".answerInner").parent().css("grid-template-areas", `".""showHideDiv"`);
            }
            i++;
        }
    }
    function deleteClass() {
        $(".delete").on({
            mouseup: function () {
                let questionInner = $(this).parent().siblings(".card0Question").children(".questionInner").html();
                let answerInner = $(this).parent().siblings(".card0Answer").children(".answerInner").html();
                let inputValue = $("#type").val();
                myObj = [inputValue, questionInner, answerInner];
                stringfy = JSON.stringify(myObj);
                tempObj = tempObj.filter(e => e !== stringfy);
                let x = 0;
                if (tempObj.length == 0) {
                    localStorage.clear();
                } else if (localStorage.length >= tempObj.length) {
                    localStorage.clear();
                    myObj = [inputValue, questionInner, answerInner];
                    console.log(myObj)
                    stringfy = JSON.stringify(myObj);
                    tempObj = tempObj.filter(e => e !== stringfy);
                    console.log(tempObj)
                    console.log(localStorage)
                    while (x < tempObj.length) {
                    localStorage.setItem(x, tempObj[x])
                    x++;
                    }
                } else {
                    while (x < tempObj.length) {
                    localStorage.setItem(x, tempObj[x])
                    x++;
                    }
                }
                x = 0
                console.log(tempObj)
                console.log(localStorage)
                $(this).parent().siblings(".card0Question").css("animation", "cardAnimation00 2s  forwards").fadeOut(1000);
                $(this).parent().siblings(".card0Answer").css("animation", "cardAnimation11 2s forwards").fadeOut(1000);
                $(this).parent().fadeOut(1000);
                $(this).parent().parent().nextAll().css("animation", "mainCardContainerAnimation0 2s forwards");
                setTimeout(() => {
                    $(this).parent().parent().nextAll().css("animation", "mainCardContainerAnimation00 0s forwards");
                    $(this).parent().parent().empty();
                }, 1000);
            }
        });
    }
    function saveButton() {
        $("#saveButton").on({
            mouseup: function () {
                questionValue = $("#questionTextArea").val();
                answerValue = $("#answerTextArea").val();
                inputValue = $("#type").val();
                myObj = [inputValue, questionValue, answerValue];
                stringfy = JSON.stringify(myObj);
                $(this).css("background-color", "var(rgba(146, 31, 31, 0.5))");
                tempObj.push(stringfy);
                tempObj = $.unique(tempObj.sort());
                let x = 0;
                while (x < tempObj.length) {
                    localStorage.setItem(x, tempObj[x])
                    x++;
                }
                x = 0
                console.log(localStorage)
                $(".card0Div").empty();
                questionAnswerInner();
                i = 0;
                showHide();
                deleteClass();
            }
        })
    }
    function deleteID() {
        $("#delete").on({
            mouseup: function () {
                let y = 0;
                $(this).parent().parent().slideUp(1000);
                typesArray= typesArray.filter(function(e) { return e !== typesBlock.html() });
                $(".card0Question").css("animation", "cardAnimation00 2s forwards");
                $(".card0Answer").css("animation", "cardAnimation11 2s forwards");
                while (y < tempObj.length) {
                    parse = JSON.parse(tempObj[y])
                    if (parse[0] == typesHtml) {
                        stringify = JSON.stringify(parse);
                        tempObj = tempObj.filter(e => e !== stringify);
                        console.log(tempObj)
                        let x = 0;
                        if (tempObj.length == 0) {
                            localStorage.clear();
                        } else if (localStorage.length >= tempObj.length) {
                            localStorage.clear();
                            while (x < tempObj.length) {
                                localStorage.setItem(x, tempObj[x])
                                x++;
                            }
                        } else {
                            while (x < tempObj.length) {
                                localStorage.setItem(x, tempObj[x])
                                x++;
                            }
                        }
                        x = 0
                        console.log(tempObj)
                        console.log(localStorage)
                        $(".card0Div").fadeOut(2000);
                        $(this).parent().parent().siblings("#cardTypes").fadeOut(2000);
                        console.log(typesArray)
                        setTimeout(() => {
                            $(".card0Div").empty();
                            $(this).parent().parent().siblings("#cardTypes").remove();
                        }, 2000);
                        setTimeout(() => {
                            $(`<div id="cardTypes"></div>`).insertBefore("#newCard");
                            $("#cardTypes").css("display", "grid").hide().fadeIn(2000); 
                            let b = 0;
                            let typesHeaders = [];
                            while (b < tempObj.length) {
                                let parse = JSON.parse(tempObj[b])
                                typesHeaders.push(parse[0]);
                                typesHeaders = $.unique(typesHeaders.sort());
                                console.log(typesHeaders)
                                if (typesHeaders[b] !== undefined) {
                                    $("#cardTypes").append(`<button class="mainButtons types">${typesHeaders[b]}</button>`);
                                    count = 0;
                                    rowCount = 0;
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
                                }
                                mainButtonFunctions(); 
                                typesMouseupFunction();
                                b++;
                            }
                            
                        }, 2001);
                    }
                    y++;
                }
                y = 0;
            }
        })
    }
    function deleteAllTypes() {
        $("#deleteAll").on({
            mouseup: function () {
                $(this).parent().parent().slideUp(1000);
                $("#cardTypes").fadeOut(2000);
                $(".card0Div").fadeOut(2000);
                $(".card0Question").css("animation", "cardAnimation00 2s forwards");
                $(".card0Answer").css("animation", "cardAnimation11 2s forwards");
                setTimeout(() => {
                    $("#cardTypes").empty();
                    $("#cardTypes").fadeIn();
                    $("#card0Div").empty();
                }, 2000);
                tempObj = [];
                localStorage.clear();
            }
        })
    }
    function typesMouseupFunction() {
        $(".types").mouseup(function () {
            typesHtml = $(this).html();
            typesBlock = $(this);
            $(".hideDeleteContainer").css("grid-template-areas", `"hide""delete""deleteAll"`);
            $("#delete").css("display", "block");
            $("#deleteAll").css("display", "block");
            $("#delete").html(`Delete Type "${typesHtml}"`);
            $("#newCard").css('display', 'grid').hide().slideDown(1000);
            let typesInner = $(this).html().trim();
            $("#type").val(typesInner);
            $("#type").prop("disabled", true);
            $("#flashCards, .card0Div").css('display', 'grid').slideDown(1000);
            parse = JSON.parse(tempObj[i])
            $(".card0Div").empty();
            questionAnswerInner();
            i = 0;
            $(".card0Question").css("animation", "cardAnimation0 2s forwards");
            $(".card0Answer").css("animation", "cardAnimation1 2s forwards");
            saveButton();
            deleteClass(saveButton());
            deleteID()
            deleteAllTypes()
            showHide();
            hideQuestionAnswer();
            language()
        });
    }
    function language() {
        if ($("#selectMenu").val() == "TR") {
            $("#addFlashCard").html("Add a Flash Card");
            $("#selectFlashCard").html("Select a Flash Card");
            $("#questionHeader").html("Question");
            $("#answerHeader").html("Answer");
            $("#type").attr("placeholder", "Input a Type");
            $("#hide").html("Hide");
            $("#saveButton").html("Save");
            $("#delete").html(`Delete Type "${typesHtml}"`);
            $("#deleteAll").html("Delete All Types");
            $(".delete").html("Delete");
            $(".show").html("Show");
            $(".hide").html("Hide");
        };
        if ($("#selectMenu").val() == "TR") {
            $("#addFlashCard").html("Hafıza Kartı Ekle");
            $("#selectFlashCard").html("Hafıza Kartı Seç");
            $("#questionHeader").html("Soru");
            $("#answerHeader").html("Cevap");
            $("#type").attr("placeholder", "Bir Konu Girin");
            $("#hide").html("Gizle");
            $("#saveButton").html("Kaydet");
            $("#delete").html(`"${typesHtml}" Konusunu Sil`);
            $("#deleteAll").html("Tüm Konuları Sil");
            $(".delete").html("Sil");
            $(".show").html("Göster");
            $(".hide").html("Gizle");
        };
    }
    $("#selectMenu").on({
        mouseup: function () {
            language();
        }
    })
    //#region -- Action of main buttons and type buttons
    mainButtonFunctions();
    //#endregion -- Action of main buttons and type buttons

    hideQuestionAnswer();
    $("#hide").on({
        mouseup: function () {
            $(this).parent().parent().slideUp(1000);
        }
    })
    //#region -- Add and Select Flash Card Functions
    $("#addFlashCard").mouseup(function () {
        $("#newCard").css('display', 'grid').hide().slideDown(1000);
        $("#type").prop("disabled", false);
        $("#cardTypes").slideUp(1000);
        $(".card0Div").empty();
        $(".hideDeleteContainer").css("grid-template-areas", "hideButton");
        $("#delete").css("display", "none");
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
        $(this).css("border-color", "gray");
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    });
    $("#type").focusout(function () {
        $(this).css("border-color", "white");
        $(this).css("background-color", "var(--typeColor)");
        $(this).css("color", "white");
    });
    //#endregion -- Type Focus and Out Action

    //#region -- Types Action for Input Value
    typesMouseupFunction();
    //#endregion -- Types Action for Input Value

    //#region -- Save Button Actions
    let myObj = []; //all input types will go inside this array. "inputValue: questionValue,answerValue". This is the format of array.
    $("#saveButton").on({
        mousedown: function () {
            $(this).css({
                "border-color": "gray",
                "background-color": "var(--typeColor)",
            });
        },
        mouseup: function () {
            $(this).css({
                "border-color": "white",
                "background-color": "var(--emptyColor)",
            });
            if ($("#questionTextArea").val() != "" && $("#answerTextArea").val() != "" && $("#type").val() != "") {
                //#region -- Creating "inputValue: questionValue,answerValue"
                questionValue = $("#questionTextArea").val();
                answerValue = $("#answerTextArea").val();
                inputValue = $("#type").val();
                while (i < $(".types").length) {
                    typesArray.push($(".types").eq(i).html());
                    typesArray = $.unique(typesArray.sort());
                    i++;
                }
                i = 0;
                if (!typesArray.includes(inputValue)) {
                    $("#cardTypes").append(`<button class="mainButtons types">${inputValue}</button>`);
                }
                myObj = [inputValue, questionValue, answerValue];
                stringfy = JSON.stringify(myObj);
                tempObj.push(stringfy);
                tempObj = $.unique(tempObj.sort());
                let x = 0;
                while (x < tempObj.length) {
                    localStorage.setItem(x, tempObj[x])
                    x++;
                }
                x = 0
                console.log(localStorage)
                //#endregion -- Creating "inputValue: questionValue,answerValue"
                count = 0;
                rowCount = 0;
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
                if ($("#type").val().trim().length == 0 || $("#type").val().trim() == "") {
                    $("#type").css("background-color", "var(--emptyColor)");
                    setTimeout(() => {
                        $("#type").css("background-color", "var(--typeColor)");
                    }, 1000);
                } 
                if ($("#questionTextArea").val().trim().length == 0 || $("#questionTextArea").val().trim() == "") {
                    $("#questionTextArea").css("background-color", "rgba(199, 56, 21, 0.5)");
                    setTimeout(() => {
                        $("#questionTextArea").css("background-color", "transparent");
                    }, 1000);
                }
                if ($("#answerTextArea").val().trim().length == 0 || $("#answerTextArea").val().trim() == "") {
                    $("#answerTextArea").css("background-color", "rgba(199, 56, 21, 0.5)");
                    setTimeout(() => {
                        $("#answerTextArea").css("background-color", "transparent");
                    }, 1000);
                }
            }
        }
    });
    //#endregion -- Save Button Actions

});