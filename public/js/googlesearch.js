$("#startSearch").on("click", function() {
  var categoryInput = document.getElementById("categoryInput").value;
  var keywordInput = document.getElementById("searchKeywords").value;
  getSearchResults(categoryInput, keywordInput);
  console.log("Category Selected: " + categoryInput);
  console.log("Keywords: " + keywordInput);
});

function getSearchResults(categoryInput, keywordInput) {
  var queryURL =
    "https://www.googleapis.com/customsearch/v1?key=AIzaSyD-_9weq6nvkj3TD9WBn1h1FaJJQbu-CII&cx=017576662512468239146:omuauf_lfve&q=" +
    categoryInput +
    " " +
    keywordInput +
    "+kickstarter+projects";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#googleSearchOne").html(response.items[0].title);
    $("#googleSearchTwo").html(response.items[1].title);
    $("#googleSearchThree").html(response.items[2].title);
    $("#googleSearchFour").html(response.items[3].title);
    $("#googleSearchFive").html(response.items[4].title);
  });
}
