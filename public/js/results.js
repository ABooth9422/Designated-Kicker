$(document).ready(function() {
  $("#startSearch").on("click", function() {
    console.log("clicked");
    searchResults();
  });
  $("#addProduct").on("click", function() {
    addYourProduct();
  });
  $("#clientLogin").on("click", function() {
    clientLogin();
  });
  $("#register").on("click", function() {
    clientRegister();
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
  console.log("button pressed");
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
    pledge: pledge
  };
  $.ajax("/add", {
    type: "POST",
    data: fullData
  }).then(function() {
    console.log(data);
  });
}
function clientLogin() {
  console.log("hey");
  var email = $("#emailInput").val();
  var password = $("#passwordInput").val();
  var client = {
    email: email,
    password: password
  };
  $.ajax("/api/login", {
    type: "POST",
    data: client
  }).then(function() {
    console.log(data);
  });
}

function clientRegister() {
  console.log("client register going");
  var email = $("#emailInput").val();
  var password = $("#passwordInput").val();
  var client = {
    email: email,
    password: password
  };
  $.ajax("api/signup", {
    type: "POST",
    data: client
  }).then(function() {
    console.log(data);
  });
}
