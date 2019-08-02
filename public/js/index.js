$(document).ready(function() {
  start();
  $("#startBtn").on("click", function() {
    results();
  });
  $("#startSearch").on("click", function() {
    initialSearch();
  });
});

function start() {
  $("#scrollResults").hide();
  $("#searchContent").hide();
  $("#mainContent").css("background-color", "#0F3D57");
}

function results() {
  $("#searchContent").show();
  $("#welcome").hide("fast");
}
function initialSearch() {
  $("#searchContent").hide();
  $("#scrollResults").show();
  $("#mainContent").css("background-color", "slategray");
}

// $("#mainContent").css("background-color", "slategray");
