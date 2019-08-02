$(document).ready(function() {
  start();
  $("#startBtn").on("click", function() {
    results();
  });
});

function start() {
  $("#scrollResults").hide();
  $("#mainContent").css("background-color", "#0F3D57");
}

function results() {
  $("#scrollResults").show("fast");
  $("#welcome").hide("fast");
  $("#mainContent").css("background-color", "slategray");
}
