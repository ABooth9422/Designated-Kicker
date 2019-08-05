$(document).ready(function() {
  $("#startSearch").on("click", function() {
    console.log("clicked");
    searchResults();
  });
});

function searchResults() {
  console.log("within results");
  var e = document.getElementById("city");
  var result = e.options[e.selectedIndex].value;
  console.log(result);
  var category = {
    cat: result
  };
  $.ajax("/search", {
    type: "POST",
    data: category
  }).then(function(data) {
    console.log(data);
    location.reload();
  });
}
