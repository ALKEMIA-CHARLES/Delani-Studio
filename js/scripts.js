$(document).ready(function(event) {
    event.preventDefault;
    $("#despic").click(function() {
        $("#pentag").toggle();
    });
    $("#devpic").click(function() {
        $("#codetag").toggle();
    });

    $("#prodpic").click(function() {
        $("#listtag").toggle();
    });

    $("#contactid").submit(function() {
        var user = $('#name').val();
        alert(user + " your insights have been well recieved, we will keep in touch");
    });
});

