$(document).ready(function () {
    $("#despic").click(function () {
        $("#despic").toggle(function () {});
        $("#pentag").show(function () {

        });
    });
    $("#devpic").click(function () {
        $("#devpic").toggle(function () {});
        $("#codetag").show(function () {

        });

    });
    $("#prodpic").click(function () {
        $("#prodpic").toggle(function () {});
        ("#listtag").show(function () {});
    });

    $("#pentag").click(function () {
        $("#pentag").toggle(function () {});
        $("#despic").show(function () {});
    });

    $("#codetag").click(function () {
        $("#codetag").toggle(function () {});
        ("#devpic").show(function () {});
    });

    $("#listtag").click(function () {
        $("#listtag").toggle(function () {});
        $("#prodpic").show(function () {});

    });
});

$("#contactid").submit(function (m) {
    var user = document.getElementById("name").value;
    alert(user + "Your insights have been well recieved, we will keep in touch");
});