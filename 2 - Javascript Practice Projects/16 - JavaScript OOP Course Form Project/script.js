$(function () {
    var objects = `<div class="objects">
    <div class="objectDiv">
        <div class="objectHeader header1">
            Name:
        </div>
        <div class="objectValue value1">
            Real Name
        </div>
    </div>
    <div class="objectDiv">
        <div class="objectHeader header2">
            Course:
        </div>
        <div class="objectValue value2">
            Real Course
        </div>
    </div>
    <div class="objectDiv">
        <div class="objectHeader header3">
            Hour:
        </div>
        <div class="objectValue value3">
            Real Hour
        </div>
    </div>
</div>`;
    $("#buttonDiv").on({
        mouseup: function () {
            if ($("#input1").val() != "" && $("#input2").val() != "" && $("#input3").val() != "" && $("#input1").val().trim().length >= 5 && $("#input2").val().trim().length >= 5 && $("#input3").val().trim().length >= 5) {
                myObject = {"name": $("#input1").val(), "course": $("#input2").val(), "hour": $("#input3").val()}
                console.log(myObject)

                $("body").css({
                    "grid-template-areas": `". container0 ." ". newRequest ."`
                });
                $("#newRequest").append(objects);
                var objectsLength = $(".objects").length;
                console.log(objectsLength)
                $(`.value1:eq(${objectsLength-1})`).html($("#input1").val());
                $(`.value2:eq(${objectsLength-1})`).html($("#input2").val());
                $(`.value3:eq(${objectsLength-1})`).html($("#input3").val());
            }
        }
    });

    $(".inputs").on({
        keyup: function (e) { 
            if ($(this).val().trim().length == 0) {
                $(this).css({
                    "border-color": "rgb(144, 73, 39)",
                    "outline": "5px solid rgba(225, 55, 144, 0.5)"
                });
            } else {
                if ($(this).val().trim().length >= 5) {
                    $(this).css({
                        "border-color": "rgb(73, 144, 39)",
                        "outline": "5px solid rgba(169, 225, 144, 0.5)"
                    });
                } else {
                    $(this).css({
                        "border-color": "rgb(144, 73, 39)",
                        "outline": "5px solid rgba(225, 55, 144, 0.5)"
                    });
                }
            }
            if ($("#input1").val() != "" && $("#input2").val() != "" && $("#input3").val() != "" && $("#input1").val().trim().length >= 5 && $("#input2").val().trim().length >= 5 && $("#input3").val().trim().length >= 5) {
                $("#buttonDiv").css({
                    "border-color": "black",
                    "opacity": "0.5",
                    "background-color": "white",
                    "cursor": "pointer",
                });
                $("#buttonDiv").on({
                    mouseenter: function () {  
                        $(this).css({
                            "border-color": "black",
                            "opacity": "0.7",
                            "background-color": "rgb(191, 182, 187)"
                        });
                    },
                    mouseleave: function () {  
                        $(this).css({
                            "border-color": "rgb(126, 120, 123)",
                            "opacity": "0.5",
                            "background-color": "white"
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
                            "opacity": "0.5",
                            "background-color": "white",
                            "color": "black",
                            "letter-spacing": "0"
                        });
                        $(this).html("Submit");
                    }
                });            
            } else {
                $("#buttonDiv").css({
                    "border-color": "black",
                    "opacity": "0.3",
                    "background-color": "transparent",
                    "cursor": "default"
                });
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
                            "border-color": "black",
                            "opacity": "0.4",
                            "background-color": "rgb(191, 182, 187)",
                            "color": "black",
                            "letter-spacing": "0"
                        });
                        $(this).html("Submit");
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
        },
        focus: function () {
            $(this).css({
                "background-color": "rgb(237, 233, 237)"
            });
            $(this).parent().parent().children().eq(0).children().eq(0).css({
                "color": "white"
            });
            $(this).parent().parent().children().eq(0).css({
                "background-color": "black",
            });
        },
        focusout: function () {
            this.value = $.trim(this.value)
            if ($(this).val().trim().length == 0) {
                $(this).css({
                    "border-color": "rgb(144, 73, 39)",
                    "outline": "5px solid rgba(225, 55, 144, 0.5)"
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
});