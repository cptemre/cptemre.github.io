$(function () {
    var count = 0;
    var textarea1 = $("#textarea1").val().trim();
    var textarea2 = $("#textarea2").val().trim();
    var myObj = {};
    var cards = `<div class="cards">
    <div class="cardsHeadingDiv">
        <h3 class="cardsHeading">1</h3>
    </div>
    <div class="showHideDiv">
        <h3 class="showHide"><span class="show">Show</span> / <span class="hide">Hide</span> Answer</h3>
    </div>
    <div class="cardsAnswerDiv">
        <h3 class="cardsAnswer">Answer</h3>
    </div>
    <div class="editDeleteDiv">
        <button class="edit">
            Edit
        </button>
        <button class="delete">
            Delete
        </button>
    </div>
</div>`;
    if (localStorage.length == 0) {
        var myObj = {};
    } else {
        var myObj = JSON.parse(localStorage.getItem("myObj"));
        $.each(myObj, function (key, val) {
            $("#cardsDiv").append(cards);
            $(".cardsHeading").last().html(key);
            $(".cardsAnswer").last().html(val);
        });
    }
    console.log(myObj);
    
    $("#addQuestion").on({
        mouseup: function () {  
            if (count == 0) {
                $("#mainQuestionDiv").css("display", "grid").hide().slideDown(1000);
                count = 1;
            } else {
                $("#mainQuestionDiv").slideUp(1000);
                count = 0;
            }
            $("#cancelButton").on({
                mouseup: function () {  
                    $("#mainQuestionDiv").slideUp(1000);
                    count = 0;
                }
            });
        }
    });
    $("#saveButton").on({
        mouseup: function () {  
            $("#cardsDiv").append(cards);
            $(".cardsHeading").last().html(textarea1);
            $(".cardsAnswer").last().html(textarea2);
            var newObj = {};
            myObj[textarea1] = textarea2;
            console.log(myObj);
            localStorage.setItem('myObj', JSON.stringify(myObj));
            console.log(JSON.parse(localStorage.getItem("myObj")));
            $(".show").on({
                mouseup: function () {  
                    $(this).parent().parent().siblings(".cardsAnswerDiv").css("display", "grid").hide().fadeIn(1000);
                }
            });
            $(".hide").on({
                mouseup: function () {  
                    $(this).parent().parent().siblings(".cardsAnswerDiv").fadeOut(1000);
                }
            });
            $(".edit").on({
                mouseup: function () { 
                    $("#textarea1").val($(this).parent().siblings(".cardsHeadingDiv").children(".cardsHeading").html());
                    $("#textarea2").val($(this).parent().siblings(".cardsAnswerDiv").children(".cardsAnswer").html());
                }
            });
            $(".delete").on({
                mouseup: function () {  
                    $(this).parent().parent().remove();
                }
            });
        }
    });
});