$("#startSearch").on("click", function() {
  var categoryInput = document.getElementById("categoryInput").value;
  var keywordInput = document.getElementById("searchKeywords").value;
  var storage = localStorage.getItem("categoryInput");
  localStorage.setItem("categoryInput", categoryInput);
  console.log(storage);
  //$("#addProduct").attr("href", "/itemAdd/" + categoryInput);
  getSearchResults(categoryInput, keywordInput);
  console.log("Category Selected: " + categoryInput);
  console.log("Keywords: " + keywordInput);
});

function getSearchResults(categoryInput, keywordInput) {
  var queryURL =
    "https://www.googleapis.com/customsearch/v1?key=AIzaSyC0dy_iWEa5aLoFzL1s6ILjvipcPwRNYz0&cx=013791775854691782139:83btdvy04wk&q=" +
    categoryInput +
    "+" +
    keywordInput;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var resultArray = [];
    for (var index = 0; index < 5; index++) {
      resultArray.push(response.items[index]);
    }
    resultArray.forEach(function(element) {
      var div = $("<div>");
      div.addClass("appendedRow");
      div.addClass(
        "row d-flex flex-wrap justify-content-center text-white my-3"
      );
      var image = $("<img src= still image'>");
      var hr = $("<hr>");
      image.attr("src", element.pagemap.cse_image[0].src);
      image.css("width", "400px");
      image.css("height", "200px");
      image.attr("alt", keywordInput);
      image.addClass("img-thumbnail mb-2");
      var content = $("<h5>");
      content.text("Description: " + element.title);
      var webLink = $("<a>");
      webLink.text(element.link);
      webLink.attr("href", element.link);
      webLink.attr("target", "_blank");
      div.append(image, content, webLink, hr);
      div.appendTo($("#scrollContResults"));
    });
  });
}
