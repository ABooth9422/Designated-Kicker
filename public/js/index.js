$(document).ready(function() {
  var stateObj = { location: "main" };
  history.pushState(stateObj, "page 1", "main");
  start();
  $("#startBtn").on("click", function() {
    results();
    var stateObj = { location: "search" };
    history.pushState(stateObj, "page 2", "startSearch");
  });
  $("#startSearch").on("click", function() {
    initialSearch();
    var stateObj = { location: "results" };
    history.pushState(stateObj, "page 3", "displayResults");
  });
});

function start() {
  $("#scrollResults").hide();
  $("#searchContent").hide();
  $("#addItem").hide();
  $("#mainContent").css("background-color", "#0F3D57");
}

function results() {
  $("#searchContent").show();
  $("#welcome").hide("fast");
}
function initialSearch() {
  $("#searchContent").hide();
  $("#scrollResults").show();
  $("#addItem").show();
  $("#mainContent").css("background-color", "slategray");
}

// $("#mainContent").css("background-color", "slategray");
