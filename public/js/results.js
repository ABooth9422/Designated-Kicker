/* eslint-disable eqeqeq */
$(document).ready(function() {
  $("#startSearch").on("click", function() {
    console.log("clicked");
    // searchResults();
  });
  $("#addProduct").on("click", function() {
    formSubmit();
  });
  $("#clientLogin").on("click", function() {
    clientLogin();
  });
  $("#register").on("click", function() {
    clientRegister();
  });
  $("#clientLogout").on("click", function() {
    clientLogout();
  });
});

function clientLogout() {
  $.ajax("/logout", {
    type: "POST"
  }).then(function() {
    console.log("then was successful");
    window.location.replace("/");
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
  console.log("clientLogin button pushed");
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
    console.log("then was successful");
    window.location.replace("/startSearch");
  });
}

function clientRegister() {
  console.log("client register going");
  var name = $("#registerName").val();
  var email = $("#registerEmail").val();
  var password = $("#registerPassword").val();
  var client = {
    name: name,
    email: email,
    password: password
  };
  $.ajax("api/signup", {
    type: "POST",
    data: client
  }).then(function() {
    console.log("data");
    window.location.replace("/startSearch");
  });
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
    $("#stopModal").modal("show");
  } else {
    $("#mainContent").css("background-color", "#0F3D57");
    var storage = localStorage.getItem("categoryInput");
    console.log(storage + "storage");
    $.get("/itemAdd/" + storage, function() {
      location.href = "/itemAdd/" + storage;
      addYourProduct();
    });
  }
}
