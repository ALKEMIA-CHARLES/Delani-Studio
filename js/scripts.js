$(document).ready(function() {
  $("#despic").click(function() {
    $("#pentag").toggle();
  });
  $("#devpic").click(function() {
    $("#codetag").toggle();
  });

  $("#prodpic").click(function() {
    $("#listtag").toggle();
  });
});

$("#contactid").submit(function() {
  event.preventDefault;
  var user = document.getElementById("name").value;
  alert(user + "Your insights have been well recieved, we will keep in touch");
});
