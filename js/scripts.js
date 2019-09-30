$(document).ready(function (event) {
    event.preventDefault;
    $("#despic").click(function () {
        $("#pentag").toggle();
    });
    $("#devpic").click(function () {
        $("#codetag").toggle();
    });

    $("#prodpic").click(function () {
        $("#listtag").toggle();
    });

    $("#signup").submit(function () {
        var user = $('#mce-FNAME').val();
        alert(user + " your insights have been well recieved, we will keep in touch");
    });
});

$("#dark").mouseover(function () {
    $("#dark-text").show();
});
$("#dark").mouseleave(function () {
    $("#dark-text").hide();
});

$("#ontario").mouseover(function () {
    $("#ontario-text").show();
});
$("#ontario").mouseleave(function () {
    $("#ontario-text").hide();
});

$("#orange").mouseover(function () {
    $("#orange-text").show();
});
$("#orange").mouseleave(function () {
    $("#orange-text").hide();
});

$("#wgpic").mouseover(function () {
    $("#wgpic-text").show();
});
$("#wgpic").mouseleave(function () {
    $("#wgpic-text").hide();
});

$("#gday").mouseover(function () {
    $("#gday-text").show();
});
$("#gday").mouseleave(function () {
    $("#gday-text").hide();
});

$("#settings").mouseover(function () {
    $("#settings-text").show();
});
$("#settings").mouseleave(function () {
    $("#settings-text").hide();
});

$("#burned").mouseover(function () {
    $("#burned-text").show();
});
$("#burned").mouseleave(function () {
    $("#burned-text").hide();
});

$("#giraffe").mouseover(function () {
    $("#girraffe-text").show();
});
$("#giraffe").mouseleave(function () {
    $("#giraffe-text").hide();
});