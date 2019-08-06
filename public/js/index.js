$(document).ready(function() {
  start();
  $("#startBtn").on("click", function() {
    results();
  });
  $("#startSearch").on("click", function() {
    var category = $("#categoryInput").val();
    var description = $("#searchKeywords").val();
    if (category === "" || description === "") {
      return alert("Missing required fields to search");
    } else {
      initialSearch();
    }
  });
  $(".about").on("click", function() {
    about();
  });
  $(".contact").on("click", function() {
    contact();
  });
  $("#addProduct").on("click", function() {
    event.preventDefault();
    formSubmit();
  });
});

function start() {
  $("#itemAdded").hide();
  $("#scrollResults").hide();
  $("#about").hide();
  $("#contact").hide();
  $("#searchContent").hide("fast");
  $("#addItem").hide("fast");
  $("#mainContent").css("background-color", "#0F3D57");
  var stateObj = { location: "main" };
  history.pushState(stateObj, "page 1", "main");
}

function results() {
  var stateObj = { location: "search" };
  history.pushState(stateObj, "page 2", "startSearch");
  $("#searchContent").show();
  $("#welcome").hide("fast");
}
function initialSearch() {
  $("#searchContent").hide("fast");
  $("#scrollResults").show();
  $("#addItem").show();
  $("#mainContent").css("background-color", "slategray");
  var stateObj = { location: "results" };
  history.pushState(stateObj, "page 3", "displayResults");
}

function contact() {
  event.preventDefault();
  $("#itemAdded").hide();
  $("#about").hide();
  $("#contact").show();
  $("#welcome").hide("fast");
  $("#scrollResults").hide();
  $("#searchContent").hide("fast");
  $("#addItem").hide("fast");
  $("#mainContent").css("background-color", "#0F3D57");
}
function about() {
  event.preventDefault();
  $("#about").show();
  $("#contact").hide();
  $("#itemAdded").hide();
  $("#welcome").hide("fast");
  $("#scrollResults").hide();
  $("#searchContent").hide("fast");
  $("#addItem").hide("fast");
  $("#mainContent").css("background-color", "#0F3D57");
}
function addedProduct() {
  event.preventDefault();
  $("#itemAdded").show();
  $("#scrollResults").hide();
  $("#addItem").hide("fast");
  $("#mainContent").css("background-color", "#0F3D57");
}

function formSubmit() {
  var name = $("#inputName").val();
  var category = $("#inputCategory").val();
  var blurb = $("#blurb").val();
  var inputImage = $("#inputImage").val();
  var city = $("#inputCity").val();
  var state = $("#inputState").val();
  var pledge = $("#inputPledge").val();
  if (
    name === "" ||
    category === "" ||
    blurb === "" ||
    inputImage === "" ||
    city === "" ||
    state === "" ||
    pledge === ""
  ) {
    alert("Missing fields on the form are required");
  } else {
    addedProduct();
  }
}
