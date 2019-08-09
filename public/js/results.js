$(document).ready(function() {
  $("#startSearch").on("click", function() {
    console.log("clicked");
    searchResults();
  });
  $("#addProduct").on("click", function() {
    addYourProduct();
  });
});

function searchResults() {
  console.log("within results");
  var e = document.getElementById("categoryInput");
  var result = e.options[e.selectedIndex].value;
  console.log(result);
  var category = {
    cat: result
  };
  $.ajax("/search", {
    type: "POST",
    data: category
  }).then(function() {
    console.log("results finished");
  });
}

function addYourProduct() {
  var name = $("#inputName").val();
  var category = $("#inputCategory").val();
  var blurb = $("#Blurb").val();
  var inputImage = $("#inputImage").val();
  var city = $("#inputCity").val();
  var state = $("#inputState").val();
  var pledge = $("#inputPledge").val();
  var fullData = {
    name: name,
    category: category,
    blurb: blurb,
    image: inputImage,
    city: city,
    state: state,
    pledge: pledge,
    storage: storage
  };
  $.ajax("/add", {
    type: "POST",
    data: fullData
  }).then(function() {
    console.log(data);
  });
}
