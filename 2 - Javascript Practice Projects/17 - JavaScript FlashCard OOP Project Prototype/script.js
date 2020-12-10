$(function () {
    let count = 0;
    let rowCount = 0;
    let newRowCount = 0;
    let newCount = 0;
    let questionValue;
    let answerValue;
    let inputValue;
    let typeVal = [];
    let tempObj = [];
    let typesBlock;
    let selectCount = 0;
    let media700 = window.matchMedia("(max-width: 700px)");
    let media1200 = window.matchMedia("(max-width: 1200px)");
    console.log(tempObj)
    console.log(localStorage)
    function typesOrder() {
        resize()
        let n = 0
        if ($(window).width() <= 200) {
            $(".types").css("width", "3rem");
            $(".types").css("height", "3rem");
            $(".types").css("font-size", "0.5rem");
            $("#cardTypes").css("grid-template-columns", "1fr");
            $(`.types`).css({
                "grid-column": "span",
                "grid-row": `span`
            });
            n = 0
            while (n < $(".types").length) {
                $(`.types:nth-child(${n+1})`).css({
                    "grid-column": "1 / span 1",
                    "grid-row": `${n+1} / span 1`
                });
                n++;
            }
        } 
        else if ($(window).width() <= 400) {
            console.log("700 resize")
            $(".types").css("width", "4rem");
            $(".types").css("height", "4rem");
            $(".types").css("font-size", "0.5rem");
            $("#cardTypes").css("grid-template-columns", "1fr");
            $(`.types`).css({
                "grid-column": "span",
                "grid-row": `span`
            });
            n = 0
            while (n < $(".types").length) {
                $(`.types:nth-child(${n+1})`).css({
                    "grid-column": "1 / span 3",
                    "grid-row": `${n+1} / span 1`
                });
                n++;
            }
        } else if ($(window).width() <= 700) {
            console.log("700 resize")
            $("#cardTypes").css("grid-template-columns", "1fr 1fr 1fr");
            $(".types").css("width", "6rem");
            $(".types").css("height", "6rem");
            $(".types").css("font-size", "13.3333px");
            $(`.types`).css({
                "grid-column": "span",
                "grid-row": `span`
            });
            n = 0
        rowCount = 0;
        while (n < $(".types").length) {
            $(`.types:nth-child(${n+1})`).css({
                "grid-column": "1 / span 1",
                "grid-row": `${rowCount+1} / span 1`
            });
            n++
            $(`.types:nth-child(${n+1})`).css({
                "grid-column": "2 / span 1",
                "grid-row": `${rowCount+1} / span 1`
            });
            n++
            $(`.types:nth-child(${n+1})`).css({
                "grid-column": "3 / span 1",
                "grid-row": `${rowCount+1} / span 1`
            });
            n++
            rowCount++
            $(`.types:nth-child(${n+1})`).css({
                "grid-column": "1 / span 2",
                "grid-row": `${rowCount+1} / span 1`
            });
            n++
            $(`.types:nth-child(${n+1})`).css({
                "grid-column": "2 / span 2",
                "grid-row": `${rowCount+1} / span 1`
            });
            n++
            rowCount++;
        }
        } else if ($(window).width() > 700) {
            console.log("no")
            $(".types").css("width", "12rem");
            $(".types").css("height", "3rem");
            $("#cardTypes").css("grid-template-columns", "1fr 1fr 1fr");
            n = 0
                rowCount = 0;
                while (n < $(".types").length) {
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "1 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "2 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "3 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    rowCount++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "1 / span 2",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "2 / span 2",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    rowCount++;
                }
        } 
        console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
        
        
                
            
    }
    function resize() {
        let n = 0

        $( window ).resize(function() {
            if ($(window).width() <= 200) {
                $(".types").css("width", "3rem");
                $(".types").css("height", "3rem");
                $(".types").css("font-size", "0.5rem");
                $("#cardTypes").css("grid-template-columns", "1fr");
                $(`.types`).css({
                    "grid-column": "span",
                    "grid-row": `span`
                });
                n = 0
                while (n < $(".types").length) {
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "1 / span 1",
                        "grid-row": `${n+1} / span 1`
                    });
                    n++;
                }
            } 
            else if ($(window).width() <= 400) {
                console.log("700 resize")
                $(".types").css("width", "5rem");
                $(".types").css("height", "5rem");
                $(".types").css("font-size", "0.5rem");
                $("#cardTypes").css("grid-template-columns", "1fr");
                $(`.types`).css({
                    "grid-column": "span",
                    "grid-row": `span`
                });
                n = 0
                while (n < $(".types").length) {
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "1 / span 3",
                        "grid-row": `${n+1} / span 1`
                    });
                    n++;
                }
            } 
            else if ($(window).width() <= 700) {
                console.log("700 resize")
                $("#cardTypes").css("grid-template-columns", "1fr 1fr 1fr");
                $(".types").css("width", "5rem");
                $(".types").css("height", "5rem");
                $(".types").css("font-size", "13.3333px");
                $(`.types`).css({
                    "grid-column": "span",
                    "grid-row": `span`
                });
                n = 0
                rowCount = 0;
                while (n < $(".types").length) {
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "1 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "2 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "3 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    rowCount++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "1 / span 2",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "2 / span 2",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    rowCount++;
                }
            } else if ($(window).width() > 700) {
                console.log("no")
                $(".types").css("width", "12rem");
                $(".types").css("height", "3rem");
                $("#cardTypes").css("grid-template-columns", "1fr 1fr 1fr");
                $(`.types`).css({
                    "grid-column": "span",
                    "grid-row": `span`
                });
                n = 0
                rowCount = 0;
                while (n < $(".types").length) {
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "1 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "2 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "3 / span 1",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    rowCount++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "1 / span 2",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    $(`.types:nth-child(${n+1})`).css({
                        "grid-column": "2 / span 2",
                        "grid-row": `${rowCount+1} / span 1`
                    });
                    n++
                    rowCount++;
                }
            } 
            

        });
    }
    resize()
    if (localStorage.length == 0) {
        tempObj = [];
    } else {
        typesOrder()
        resize()
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
                $("#cardTypes").append(`<button class="types">${typesHeaders[b]}</button>`);
            }
            b++;
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
    mainButtonFunctions()
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
                if ($(this).siblings().hasClass("selected")) {
                    $(this).siblings().removeClass("selected");
                }
                $(".types").removeClass("noneSelected");
                $(".types").removeClass("selected");
                $(".types").removeClass("mouseDown");
                $(".types").removeClass("mouseOver");
            },
            focus: function () {  
                $(this).addClass("mouseOver");
                $(this).removeClass("selected");
                $(this).removeClass("noneSelected");
            },
            focusout: function () {  
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
            keydown: function (e) {  
                if (e.keyCode === 13) {
                    $(this).addClass("mouseDown");
                    $(this).removeClass("noneSelected");
                    $(this).removeClass("mouseOver");
                    $(this).siblings().addClass("noneSelected");
                    $(this).siblings().removeClass("selected");
                }
            },
            keyup: function (e) {  
                if (e.keyCode === 13) {
                    $(this).addClass("selected");
                    $(this).removeClass("mouseDown");
                    $(this).removeClass("mouseOver");
                    $(this).removeClass("noneSelected");
                }
            },
        });
    }
    function typesButtonFunction() {
        $(".types").on({
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
            },
            focus: function () {  
                $(this).addClass("mouseOver");
                $(this).removeClass("selected");
                $(this).removeClass("noneSelected");
            },
            focusout: function () {  
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
            keydown: function (e) {  
                if (e.keyCode === 13) {
                    $(this).addClass("mouseDown");
                    $(this).removeClass("noneSelected");
                    $(this).removeClass("mouseOver");
                    $(this).siblings().addClass("noneSelected");
                    $(this).siblings().removeClass("selected");
                }
            },
            keyup: function (e) {  
                if (e.keyCode === 13) {
                    $(this).addClass("selected");
                    $(this).removeClass("mouseDown");
                    $(this).removeClass("mouseOver");
                    $(this).removeClass("noneSelected");
                }
            }
        });
    }
    function showHide() {
        
        $(".show").on({
            focus: function () {
                $(this).css("border-color", "gray");
                $(this).css("background-color", "green");
                $(this).css("color", "black");
            },
            focusout: function () {
                $(this).css("border-color", "white");
                $(this).css("background-color", "var(--typeColor)");
                $(this).css("color", "white");
            },
            mouseenter: function () {
                $(this).css("border-color", "gray");
                $(this).css("background-color", "green");
                $(this).css("color", "black");
            },
            mouseleave: function () {
                $(this).css("border-color", "white");
                $(this).css("background-color", "var(--typeColor)");
                $(this).css("color", "white");
            },
            mousedown: function () {
                $(this).css({
                    "font-size": "1rem",
                });
                $("body").on({
                    mouseup: function () {  
                        $(".show").css("font-size", `13.3333px`);
                    }
                })
            },
            mouseup: function () {
                $(this).parent().siblings().fadeIn(500);
                $(this).css("background-color", `rgba(56, 128, 56, 0.5)`);
                $(this).css("font-size", `13.3333px`);
                $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
                $(this).css("color", "white");
            },
            keydown: function (e) {  
                if (e.keyCode === 13) {
                    $(this).css({
                        "font-size": "1rem",
                    });
                    $(this).css("color", "black");
                }
            },
            keyup: function (e) {  
                if (e.keyCode === 13) {
                    $(this).parent().siblings().fadeIn(500);
                    $(this).css("background-color", `rgba(56, 128, 56, 0.5)`);
                    $(this).css("font-size", `13.3333px`);
                    $(this).css("color", "white");
                    $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
                }
            }
        });
        $(".hide").on({
            mouseenter: function () {  
                $(this).css("background-color", "red");
                $(this).css("color", "black");
                $(this).css("border-color", "red");
            },
            mouseleave: function () {  
                $(this).css("background-color", "var(--saveButtonRed)");
                $(this).css("color", "white");
                $(this).css("border-color", "white");
            },
            focus: function () {  
                $(this).css("background-color", "red");
                $(this).css("color", "black");
                $(this).css("border-color", "red");
            },
            focusout: function () {  
                $(this).css("background-color", "var(--saveButtonRed)");
                $(this).css("color", "white");
                $(this).css("border-color", "white");
            },
            mousedown: function () {
                $(this).css({
                    "font-size": "1rem",
                });
                $("body").on({
                    mouseup: function () {  
                        $(".hide").css("font-size", `13.3333px`);
                    }
                })
            },
            mouseup: function () {
                $(this).parent().siblings().fadeOut(500);
                $(this).css("background-color", `rgba(146, 31, 31, 0.5)`);
                $(this).css("font-size", `13.3333px`);
                $(this).css("color", "white");
                $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
            },
            keydown: function (e) {  
                if (e.keyCode === 13) {
                    $(this).css({
                        "font-size": "1rem",
                    });
                    $(this).css("color", "black");
                }
            },
            keyup: function (e) {  
                if (e.keyCode === 13) {
                    $(this).parent().siblings().fadeOut(500);
                    $(this).css("background-color", `rgba(146, 31, 31, 0.5)`);
                    $(this).css("font-size", `13.3333px`);
                    $(this).css("color", "white");
                    $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
                }
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
            focus: function () {  
                $(this).addClass("hideQuestionAnswerMouseEnter");
            },
            focusout: function () {
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
            },
            keydown: function (e) {  
                if (e.keyCode === 13) {
                    $(this).removeClass("hideQuestionAnswerMouseEnter");
                    $(this).addClass("hideQuestionAnswerMouseDown");
                }
            },
            keyup: function (e) {  
                if (e.keyCode === 13) {
                    $(this).removeClass("hideQuestionAnswerMouseDown");
                    $("#addFlashCard").removeClass("selected");
                    $("#selectFlashCard").removeClass("noneSelected");
                }
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
            },
            keyup: function (e) {
                if (e.keyCode === 13) {
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
            }
        });
    }
    function saveButton() {
        $("#saveButton").on({
            mouseup: function () {
                if ($("#questionTextArea").val().trim() != "" && $("#answerTextArea").val().trim() != "") {
                    questionValue = $("#questionTextArea").val();
                    answerValue = $("#answerTextArea").val();
                    inputValue = $("#type").val();
                    myObj = [inputValue, questionValue, answerValue];
                    stringfy = JSON.stringify(myObj);
                    $(this).css("background-color", "var(--emptyColor)");
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
                                    $("#cardTypes").append(`<button class="types">${typesHeaders[b]}</button>`);
                                    typesOrder();
                                }
                                mainButtonFunctions(); 
                                typesButtonFunction();
                                typesMouseupFunction();
                                b++;
                            }
                            
                        }, 2001);
                    }
                    y++;
                }
                y = 0;
            },
            keyup: function (e) {
                if (e.keyCode === 13) {
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
                                        $("#cardTypes").append(`<button class="types">${typesHeaders[b]}</button>`);
                                        typesOrder();
                                    }
                                    mainButtonFunctions(); 
                                    typesButtonFunction();
                                    typesMouseupFunction();
                                    b++;
                                }
                                
                            }, 2001);
                        }
                        y++;
                    }
                    y = 0;
                }
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
                    $("#cardTypes").css("display", "none");
                    $("#card0Div").empty();
                    $(".card0Div").css("display", "none");
                }, 2000);
                tempObj = [];
                localStorage.clear();
            },
            keyup: function (e) {
                if (e.keyCode === 13) {
                    $(this).parent().parent().slideUp(1000);
                    $("#cardTypes").fadeOut(2000);
                    $(".card0Div").fadeOut(2000);
                    $(".card0Question").css("animation", "cardAnimation00 2s forwards");
                    $(".card0Answer").css("animation", "cardAnimation11 2s forwards");
                    setTimeout(() => {
                        $("#cardTypes").empty();
                        $("#cardTypes").css("display", "none");
                        $("#card0Div").empty();
                        $(".card0Div").css("display", "none");
                    }, 2000);
                    tempObj = [];
                    localStorage.clear();
                }
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
        $(".types").keyup(function (e) { 
            if (e.keyCode === 13) {
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
                }
        });
    }
    function language() {
        if ($("#selectMenu").val() == "EN") {
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
        if ($("#selectMenu").val() == "PL") {
            $("#addFlashCard").html("Dodaj Fiszkę");
            $("#selectFlashCard").html("Wybierz Fiszkę");
            $("#questionHeader").html("Pytanie");
            $("#answerHeader").html("Odpowiedź");
            $("#type").attr("placeholder", "Wprowadź Typ");
            $("#hide").html("Ukryj");
            $("#saveButton").html("Zapisz");
            $("#delete").html(`Usuń Typ "${typesHtml}"`);
            $("#deleteAll").html("Usuń Wszystkie Typy");
            $(".delete").html("Usuń");
            $(".show").html("Pokaż");
            $(".hide").html("Ukryj");
        };
    }
    $("#selectMenu").on({
        mouseenter: function () {
            if (selectCount == 0) {
                $(this).css("border-color", "var(--myOrange)");
            } else {
                $(this).css("border-color", "var(--myGreen)");
            }
        },
        mouseleave: function () {
            $(this).css("border-color", "var(--linearColor3)");
            selectCount = 0
        },
        mousedown: function () {
            $(this).css("border-color", "var(--myRed)");
        },
        mouseup: function () {
            if (selectCount == 0) {
                $(this).css("border-color", "var(--myGreen)");
                selectCount = 1;
            } else {
                $(this).css("border-color", "var(--linearColor3)");
                selectCount = 0;
            }
            $("#selectMenu").on({
                focusout: function () {
                    $(this).css("border-color", "var(--linearColor3)");
                }})
            language();
        },
        focus: function () {  
            if (selectCount == 0) {
                $(this).css("border-color", "var(--myOrange)");
            } else {
                $(this).css("border-color", "var(--myGreen)");
            }
        },
        focusout: function () {
            $(this).css("border-color", "var(--linearColor3")
        }
    })
    function themeSwitch() {
        if (switchCounter % 2 == 0) {
            $("body").css("background-color", "white");
            $(".mainButtons, #selectMenu, .option, #questionDiv, #answerDiv, .hideQuestionAnswer, .types, .card0Question, .card0Answer").css({
                "background-color": "var(--myWhite)",
                "color": "black"
            });
            $("#switchInput").attr("checked", true);
            $(".slider").attr("id", "sliderBlack");
        } else {
            $("body").css("background-color", "black");
            $(".mainButtons, #selectMenu, .option, #questionDiv, #answerDiv, .hideQuestionAnswer, .types, .card0Question, .card0Answer").css({
                "background-color": "var(--myBlack)",
                "color": "white"
            }); 
            $(".slider").attr("id", "");
            $("#switchInput").attr("checked", false);
        }
        console.log(switchCounter)
    }
    let switchCounter = 0;
    $(".switch").on({
        mouseenter: function () {  
            $(".slider").css("background-color", "var(--myWhite");
            $(".slider").attr("id", "sliderBlack");
        },
        mouseleave: function () {  
            $(".slider").css("background-color", "var(--myGray");
            $(".slider").attr("id", "");
        },
        mouseup: function () {
            themeSwitch();
            switchCounter++;
        }
    })
    $("input:checkbox").on({
        focus: function () {  
            $(".slider").css("background-color", "var(--myWhite");
            $(".slider").attr("id", "sliderBlack");
        },
        focusout: function () {  
            $(".slider").css("background-color", "var(--myGray)");
            $(".slider").attr("id", "");
        },
        keyup: function (e) {  
            if (e.keyCode === 13) {
                themeSwitch();
                switchCounter++;
            }
        }
    })
    $("body").on({
        mouseup: function () {
            selectCount = 0;
            $(this).css("border-color", "var(--linearColor3")
        }
    })
    //#region -- Action of main buttons and type buttons
    mainButtonFunctions();
    typesButtonFunction();
    //#endregion -- Action of main buttons and type buttons

    hideQuestionAnswer();
    $("#hide").on({
        mouseup: function () {
            $(this).parent().parent().slideUp(1000);
        },
        keyup: function (e) {  
            if (e.keyCode === 13) {
                $(this).parent().parent().slideUp(1000);
            }
        }
    })
    //#region -- Add and Select Flash Card Functions
    function addFlashCardFunction() {
        $("#newCard").css('display', 'grid').hide().slideDown(1000);
        $("#type").prop("disabled", false);
        $("#cardTypes").slideUp(1000);
        setTimeout(() => {
            $("#cardTypes").css("display", "none");
        }, 2000);
        $(".card0Div").empty();
        $(".hideDeleteContainer").css("grid-template-areas", "hideButton");
        $("#delete").css("display", "none");
        $("#deleteAll").css("display", "none");
        $(".card0Div").css("display", "none");
        $("#questionTextArea, #answerTextArea, #type").val("");
    }
    $("#addFlashCard").on({
        mouseup: function () {
            addFlashCardFunction();
        },
        keyup: function (e) {  
            if (e.keyCode === 13) {
                addFlashCardFunction()
            }
        }
    });
    function selectFlashCardFunction() {
        $("#newCard").slideUp(1000);
        $("#cardTypes").css('display', 'grid').hide().slideDown(1000);
        $(".card0Div").empty();
        typesOrder()
        $("#questionTextArea, #answerTextArea").val("");
    }
    $("#selectFlashCard").on({
        mouseup: function () {
            selectFlashCardFunction()
        },
        keyup: function (e) {  
            if (e.keyCode === 13) {
                selectFlashCardFunction()
            }
        }
    });
    //#endregion -- Add and Select Flash Card Functions

    //#region -- Text Area Focus and Focus Out Action
    $("#questionTextArea, #answerTextArea").on({
        focus: function () {
            $(this).css("border-color", "rgb(97, 14, 14)");
        },
        focusout: function () {
            $(this).css("border-color", "gray");
        },
        keydown: function (e) {  
            if (e.keyCode === 13) {
                $("#saveButton").css("font-size", "1rem")
            }
        },
        keyup: function (e) {  
            if (e.keyCode === 13) {
                $(this).val($(this).val().replace( /\r?\n/gi, '')); //replace newline
                saving();
                $("#saveButton").css({
                    "font-size": "13.3333px"
                });
                $(".card0Div").empty();
            }
        }
    });
    //#endregion -- Text Area Focus and Focus Out Action

    //#region -- Type Focus and Out Action
    $("#type").focus(function () {
        $(this).css("border-color", "gray");
        $(this).css("background-color", "green");
        $(this).css("color", "black");
    });
    $("#type").focusout(function () {
        $(this).css("border-color", "white");
        $(this).css("background-color", "var(--typeColor)");
        $(this).css("color", "white");
    });
    $("#type").mouseenter(function () {
        $(this).css("border-color", "gray");
        $(this).css("background-color", "green");
        $(this).css("color", "black");
    });
    $("#type").mouseleave(function () {
        $(this).css("border-color", "white");
        $(this).css("background-color", "var(--typeColor)");
        $(this).css("color", "white");
    });
    $("#type").keydown(function (e) {
        if (e.keyCode === 13) {
            $("#saveButton").css("font-size", "1rem")
        }
    });
    $("#type").keyup(function (e) {
        if (e.keyCode === 13) {
            $(this).val($(this).val().replace( /\r?\n/gi, '')); //replace newline
            saving();
            $("#saveButton").css({
                "font-size": "13.3333px"
            });
            $(".card0Div").empty();
        }
    });
    //#endregion -- Type Focus and Out Action

    //#region -- Types Action for Input Value
    typesMouseupFunction();
    //#endregion -- Types Action for Input Value

    //#region -- Save Button Actions
    let myObj = []; //all input types will go inside this array. "inputValue: questionValue,answerValue". This is the format of array.
    function saving() {
        if ($("#questionTextArea").val().trim() != "" && $("#answerTextArea").val().trim() != "" && $("#type").val().trim() != "") {
            //#region -- Creating "inputValue: questionValue,answerValue"
            questionValue = $("#questionTextArea").val().trim();
            answerValue = $("#answerTextArea").val().trim();
            inputValue = $("#type").val().trim();
            while (i < $(".types").length) {
                typesArray.push($(".types").eq(i).html());
                typesArray = $.unique(typesArray.sort());
                i++;
            }
            i = 0;
            if (!typesArray.includes(inputValue)) {
                $("#cardTypes").append(`<button class="types">${inputValue}</button>`);
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
            mainButtonFunctions();
            typesButtonFunction();
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
    $("#saveButton").on({
        mouseenter: function () {  
            $("#saveButton").css("background-color", "red");
            $(this).css("color", "black");
            $(this).css("border-color", "red");
        },
        mouseleave: function () {  
            $("#saveButton").css("background-color", "var(--saveButtonRed)");
            $(this).css("color", "white");
            $(this).css("border-color", "white");
        },
        focus: function () {  
            $("#saveButton").css("background-color", "red");
            $(this).css("color", "black");
            $(this).css("border-color", "red");
        },
        focusout: function () {  
            $("#saveButton").css("background-color", "var(--saveButtonRed)");
            $(this).css("color", "white");
            $(this).css("border-color", "white");
        },
        mousedown: function () {
            $(this).css({
                "font-size": "1rem"
            });
            $("body").on({
                mouseup: function () {  
                    $("#saveButton").css("font-size", "13.3333px");
                }
            })
        },
        mouseup: function () {
            $(this).css({
                "font-size": "13.3333px"
            });
            $(".card0Div").empty();
            saving()
        }
        
    });
    //#endregion -- Save Button Actions
});