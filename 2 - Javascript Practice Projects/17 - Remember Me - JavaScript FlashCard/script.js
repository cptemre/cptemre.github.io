$(function () {
    let rowCount = 0;
    let questionValue;
    let answerValue;
    let inputValue;
    let tempObj = [];
    let typesBlock;
    let selectCount = 0;
    let stringfy;
    let parse;
    let i = 0;
    let typesArray = [];
    var typesHtml;
    let switchCounter = 0;
    let myObj = [];
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
            if (typesHeaders[b] !== undefined) {
                $("#cardTypes").append(`<button class="types">${typesHeaders[b]}</button>`);
            }
            b++;
        }
        a = 0;
        b = 0;
    }
    function mainButtonFunctions() {
        $(".mainButtons").on({
            mouseenter: function () {
                $(this).addClass("mouseOver");
                $(this).removeClass("selected");
                $(this).removeClass("noneSelected");
                $(this).on({
                    mouseleave: function () {
                        if (!$(this).siblings().hasClass("noneSelected") && !$(this).siblings().hasClass("selected") ) {
                            $(this).removeClass("mouseDown");
                        };
                        if ($(this).siblings().hasClass("noneSelected") && $(this).hasClass("mouseDown") ) {
                            $(this).removeClass("noneSelected");
                        }
                    }
                })
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
                $(this).addClass("mouseDown");
            },
            mouseup: function () {
                $(this).addClass("selected");
                $(this).removeClass("mouseDown");
                $(this).removeClass("mouseOver");
                $(this).removeClass("noneSelected");
                $(this).siblings().addClass("noneSelected");
                $(this).siblings().removeClass("selected");

                $(".types").removeClass("noneSelected");
                $(".types").removeClass("selected");
                $(".types").removeClass("mouseDown");
                $(".types").removeClass("mouseOver");
                
            },
            focus: function () {  
                $(this).addClass("mouseOver");
                $(this).removeClass("selected");
                $(this).removeClass("noneSelected");
                $(this).on({
                    mouseleave: function () {
                        if (!$(this).siblings().hasClass("noneSelected") && !$(this).siblings().hasClass("selected") ) {
                            $(this).removeClass("mouseDown");
                        };
                        if ($(this).siblings().hasClass("selected")) {
                            $(this).removeClass("selected");
                            $(this).addClass("noneSelected");
                        }
                    }
                })
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
                
            },
            mouseleave: function () {
                if ($(this).siblings().hasClass("noneSelected")) {
                    $(this).removeClass("mouseDown");
                    $(this).removeClass("mouseOver");
                } else {
                    $(this).removeClass("mouseOver");
                }
            
                if ($(this).siblings().hasClass("selected")) {
                    $(this).removeClass("mouseDown");
                    $(this).removeClass("mouseOver");
                } else {
                    $(this).removeClass("mouseOver");
                }
                if ($(this).hasClass("noneSelected")) {
                    $(this).addClass("noneSelected");
                } 
            },
            mousedown: function () {
                $(this).addClass("mouseDown");
                $(this).removeClass("noneSelected");
                $(this).removeClass("mouseOver");
                $(this).addClass("selected");
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
                $(this).css({
                    "border-color": "green",
                    "background-color": "green",
                    "color": "black"
                });
            },
            focusout: function () {
                $(this).css({
                    "border-color": "white",
                    "background-color": "var(--typeColor)",
                    "color": "white"
                });
            },
            mouseenter: function () {
                $(this).css({
                    "border-color": "green",
                    "background-color": "green",
                    "color": "black"
                });
            },
            mouseleave: function () {
                $(this).css({
                    "border-color": "white",
                    "background-color": "var(--typeColor)",
                    "color": "white"
                });
            },
            mousedown: function () {
                $(this).css("font-size", "1rem");
                $("body").on({
                    mouseup: function () {  
                        $(".show").css("font-size", `13.3333px`);
                    }
                });
            },
            mouseup: function () {
                $(this).parent().siblings().fadeIn(500);
                $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
                $(this).css({
                    "background-color": "rgba(56, 128, 56, 0.5)",
                    "color": "white",
                    "font-size": "13.3333px"
                });
            },
            keydown: function (e) {  
                if (e.keyCode === 13) {
                    $(this).css({
                        "font-size": "1rem",
                        "color": "black"
                    });
                }
            },
            keyup: function (e) {  
                if (e.keyCode === 13) {
                    $(this).parent().siblings().fadeIn(500);
                    $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
                    $(this).css({
                        "background-color": "rgba(56, 128, 56, 0.5)",
                        "font-size": "13.3333px",
                        "color": "white"
                    });
                }
            }
        });
        $(".hide").on({
            mouseenter: function () {  
                $(this).css({
                    "border-color": "red",
                    "background-color": "red",
                    "color": "black"
                });
            },
            mouseleave: function () {  
                $(this).css({
                    "border-color": "white",
                    "background-color": "var(--saveButtonRed)",
                    "color": "white"
                });
            },
            focus: function () {  
                $(this).css({
                    "border-color": "red",
                    "background-color": "red",
                    "color": "black"
                });
            },
            focusout: function () {  
                $(this).css({
                    "border-color": "white",
                    "background-color": "var(--saveButtonRed)",
                    "color": "white"
                });
            },
            mousedown: function () {
                $(this).css("font-size", "1rem");
                $("body").on({
                    mouseup: function () {  
                        $(".hide").css("font-size", `13.3333px`);
                    }
                })
            },
            mouseup: function () {
                $(this).parent().siblings().fadeOut(500);
                $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
                $(this).css({
                    "background-color": "rgba(146, 31, 31, 0.5)",
                    "color": "white",
                    "font-size": "13.3333px"
                });
            },
            keydown: function (e) {  
                if (e.keyCode === 13) {
                    $(this).css({
                        "font-size": "1rem",
                        "color": "black"
                    });
                }
            },
            keyup: function (e) {  
                if (e.keyCode === 13) {
                    $(this).parent().siblings().fadeOut(500);
                    $(this).siblings().css("background-color", `rgb(58, 56, 56)`);
                    $(this).css({
                        "background-color": "rgba(146, 31, 31, 0.5)",
                        "color": "white",
                        "font-size": "13.3333px"
                    });
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
                    stringfy = JSON.stringify(myObj);
                    tempObj = tempObj.filter(e => e !== stringfy);
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
                $(this).parent().siblings(".card0Question").css("animation", "cardAnimation00 2s  forwards").fadeOut(1000);
                $(this).parent().siblings(".card0Answer").css("animation", "cardAnimation11 2s forwards").fadeOut(1000);
                $(this).parent().fadeOut(1000);
                $(this).parent().parent().nextAll().css("animation", "mainCardContainerAnimation0 2s forwards");
                setTimeout(() => {
                    $(this).parent().parent().nextAll().css("animation", "mainCardContainerAnimation00 0s forwards");
                    $(this).parent().parent().remove();
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
                        stringfy = JSON.stringify(myObj);
                        tempObj = tempObj.filter(e => e !== stringfy);
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
                        $(".card0Div").fadeOut(2000);
                        $(this).parent().parent().siblings("#cardTypes").fadeOut(2000);
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
                                if (typesHeaders[b] !== undefined) {
                                    $("#cardTypes").append(`<button class="types">${typesHeaders[b]}</button>`);
                                    typesOrder();
                                }
                                mainButtonFunctions(); 
                                typesButtonFunction();
                                typesMouseupFunction();
                                b++;
                            }
                            location.reload();
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
                            $(".card0Div").fadeOut(2000);
                            $(this).parent().parent().siblings("#cardTypes").fadeOut(2000);
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
                                    if (typesHeaders[b] !== undefined) {
                                        $("#cardTypes").append(`<button class="types">${typesHeaders[b]}</button>`);
                                        typesOrder();
                                    }
                                    mainButtonFunctions(); 
                                    typesButtonFunction();
                                    typesMouseupFunction();
                                    b++;
                                }
                                location.reload();
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
                    location.reload();
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
                        location.reload();
                    }, 2000);
                    tempObj = [];
                    localStorage.clear();
                }
            }
        })
    }
    function themeSwitch() {
        if (switchCounter % 2 == 0) {
            $("body").css("background-color", "white");
            $(".mainButtons, #selectMenu, .option, #questionDiv, #answerDiv, .hideQuestionAnswer, .types, .card0Question, .card0Answer").css({
                "background-color": "var(--myWhite)",
                "color": "black"
            });
            $("#switchInput").attr("checked", false);
            $(".slider").attr("id", "sliderBlack");
        } else {
            $("body").css("background-color", "black");
            $(".mainButtons, #selectMenu, .option, #questionDiv, #answerDiv, .hideQuestionAnswer, .types, .card0Question, .card0Answer").css({
                "background-color": "var(--myBlack)",
                "color": "white"
            }); 
            $(".slider").attr("id", "");
            $("#switchInput").attr("checked", true);
        }
    }
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
            if (switchCounter % 2 == 0) {
                $("#switchInput").attr("checked", false);
            } else {
                $("#switchInput").attr("checked", true);
            }
        }
    })
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
            if (switchCounter % 2 == 1) {
                $(".card0Question, .card0Answer, .hideQuestionAnswer").css({
                    "background-color": "var(--myWhite)",
                    "color": "black"
                });
            } else {
                $(".card0Question, .card0Answer, .hideQuestionAnswer").css({
                    "background-color": "var(--myBlack)",
                    "color": "white"
                }); 
            }
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
            $("#addFlashCard").html("Add a Flashcard");
            $("#selectFlashCard").html("Select a Flashcard");
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
        if ($("#selectMenu").val() == "DE") {
            $("#addFlashCard").html("Flash-Karte hinzuf??gen");
            $("#selectFlashCard").html("Flash-Karte ausw??hlen");
            $("#questionHeader").html("Frage");
            $("#answerHeader").html("Antworten");
            $("#type").attr("placeholder", "Geben Sie einen Typ ein");
            $("#hide").html("Ausblenden");
            $("#saveButton").html("Sparen");
            $("#delete").html(`Typ "${typesHtml}" l??schen`);
            $("#deleteAll").html("Alle Typen l??schen");
            $(".delete").html("L??schen");
            $(".show").html("Show");
            $(".hide").html("Ausblenden");
        };
        if ($("#selectMenu").val() == "PL") {
            $("#addFlashCard").html("Dodaj Fiszk??");
            $("#selectFlashCard").html("Wybierz Fiszk??");
            $("#questionHeader").html("Pytanie");
            $("#answerHeader").html("Odpowied??");
            $("#type").attr("placeholder", "Wprowad?? Typ");
            $("#hide").html("Ukryj");
            $("#saveButton").html("Zapisz");
            $("#delete").html(`Usu?? Typ "${typesHtml}"`);
            $("#deleteAll").html("Usu?? Wszystkie Typy");
            $(".delete").html("Usu??");
            $(".show").html("Poka??");
            $(".hide").html("Ukryj");
        };
        if ($("#selectMenu").val() == "TR") {
            $("#addFlashCard").html("Haf??za Kart?? Ekle");
            $("#selectFlashCard").html("Haf??za Kart?? Se??");
            $("#questionHeader").html("Soru");
            $("#answerHeader").html("Cevap");
            $("#type").attr("placeholder", "Bir Konu Girin");
            $("#hide").html("Gizle");
            $("#saveButton").html("Kaydet");
            $("#delete").html(`"${typesHtml}" Konusunu Sil`);
            $("#deleteAll").html("T??m Konular?? Sil");
            $(".delete").html("Sil");
            $(".show").html("G??ster");
            $(".hide").html("Gizle");
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
    $("body").on({
        mouseup: function () {
            selectCount = 0;
            $(this).css("border-color", "var(--linearColor3")
        },
        keydown: function (e) {  
            if (e.keyCode === 13) {
                $("#saveButton").css("font-size", "1rem");
            }
        },
        keyup: function (e) {  
            if (e.keyCode === 13) {
                $("#saveButton").css("font-size", "13.3333px");
                $(".card0Div").empty();
                questionAnswerInner()
            }
        }
    });
    $("#hide").on({
        mouseup: function () {
            $(this).parent().parent().slideUp(1000);
        },
        keyup: function (e) {  
            if (e.keyCode === 13) {
                $(this).parent().parent().slideUp(1000);
            }
        }
    });
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
        if (switchCounter % 2 == 1) {
            $(".types").css({
                "background-color": "var(--myWhite)",
                "color": "black"
            });
        } else {
            $(".mainButtons, #selectMenu, .option, #questionDiv, #answerDiv, .hideQuestionAnswer, .types, .card0Question, .card0Answer").css({
                "background-color": "var(--myBlack)",
                "color": "white"
            }); 
        }
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
    $("#type").on({
        focus: function () {
            $(this).css({
                "border-color": "green",
                "background-color": "green",
                "color": "black"
            });
        },
        focusout: function () {
            $(this).css({
                "border-color": "white",
                "background-color": "var(--typeColor)",
                "color": "white"
            });
        },
        mouseenter: function () {
            $(this).css({
                "border-color": "green",
                "background-color": "green",
                "color": "black"
            });
        },
        mouseleave: function () {  
            $(this).css({
                "border-color": "white",
                "background-color": "var(--typeColor)",
                "color": "white"
            });
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
                $("#saveButton").css("font-size", "13.3333px");
                $(".card0Div").empty();
            }            
        }
    });
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
            $(this).css({
                "color": "black",
                "border-color": "red"
            });
        },
        mouseleave: function () {  
            $("#saveButton").css("background-color", "var(--saveButtonRed)");
            $(this).css({
                "color": "white",
                "border-color": "white"
            });
        },
        focus: function () {  
            $("#saveButton").css("background-color", "red");
            $(this).css({
                "color": "black",
                "border-color": "red"
            });
        },
        focusout: function () {  
            $("#saveButton").css("background-color", "var(--saveButtonRed)");
            $(this).css({
                "color": "white",
                "border-color": "white"
            });
        },
        mousedown: function () {
            $(this).css("font-size", "1rem");
            $("body").on({
                mouseup: function () {  
                    $("#saveButton").css("font-size", "13.3333px");
                }
            })
        },
        mouseup: function () {
            $(this).css("font-size", "13.3333px");
            $(".card0Div").empty();
            saving()
        },
        keydown: function (e) {  
            if (e.keyCode === 13) {
                $(this).css("font-size", "1rem");
            }
        },
        keyup: function (e) {  
            $(this).css("font-size", "13.3333px");
            $(".card0Div").empty();
            saving()
        }
    });

    resize()
    mainButtonFunctions();
    typesButtonFunction();
    hideQuestionAnswer();
    typesMouseupFunction();
});