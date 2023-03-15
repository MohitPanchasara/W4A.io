/*$(".btn").click(function() {
  $(".myText").toggle();  
});*/

// OR

$(".btn").click(function () {
  var lable = $(".btn").text().trim();

  if (lable == "Hide") {
    $(".btn").text("Show");
    $(".myText").hide();
  } else {
    $(".btn").text("Hide");
    $(".myText").show();
  }
});
