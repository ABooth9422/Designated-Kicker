$(document).ready(function() {
  start();
  $("#startBtn").on("click", function() {
    $.get("/startSearch", function() {
      console.log("successful");
    });
  });
  $("#startSearch").on("click", function() {
    console.log("clicked");
    var category = $("#categoryInput").val();
    var description = $("#searchKeywords").val();
    if (category === "" || description === "") {
      $("#stopModal").modal("show");
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
  $(".aboutUs").on("click", function() {
    $.get("/aboutUs", function() {
      console.log("aboutUS");
    });
  });
  $(".contactUs").on("click", function() {
    $.get("/aboutUs", function() {
      console.log("aboutUS");
    });
  });
});

function start() {
  $("#registerTwo").hide();
  $("#itemAdded").hide();
  $("#scrollResults").hide();
  $("#about").hide();
  $("#contact").hide();
  $("#addItem").hide("fast");
  $("#mainContent").css("background-color", "#0F3D57");
}

function initialSearch() {
  $("#searchContent").hide("fast");
  $("#scrollResults").show();
  $("#addItem").show();
  $("#mainContent").css("background-color", "slategray");
}

function contact() {
  $("#mainContent").css("background-color", "#0F3D57");
}
function about() {
  $("#mainContent").css("background-color", "#0F3D57");
}
