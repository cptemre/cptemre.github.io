$(function () {
    var count = 0;
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
            console.log()
            $(".cardsHeading").last().html($("#textarea1").val());
            $(".cardsAnswer").last().html($("#textarea2").val());

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