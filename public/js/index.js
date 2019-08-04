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
  $("#addItem").hide();
  $("#mainContent").css("background-color", "#0F3D57");
  var stateObj = { location: "main" };
  history.pushState(stateObj, "page 1", "main");
}

function results() {
  $("#searchContent").show();
  $("#welcome").hide("fast");
  var stateObj = { location: "search" };
  history.pushState(stateObj, "page 2", "startSearch");
}
function initialSearch() {
  $("#searchContent").hide();
  $("#scrollResults").show();
  $("#addItem").show();
  $("#mainContent").css("background-color", "slategray");
  var stateObj = { location: "results" };
  history.pushState(stateObj, "page 3", "displayResults");
}
module.exports = results();
