$(function(){
  $("#week").submit(function(event){
    var queThree = parseInt($("input:radio[name=flavor]:checked").val());
    var queFour = parseInt($("input:radio[name=taste]:checked").val());
    var queFive = parseInt($("input:radio[name=sour]:checked").val());
    var correct = (queThree  + queFour + queFive);
    var percentage = (correct / 3 * 100);
    $("#send").text("You have scored: " + percentage + "%");
  if (percentage > 80) {
    $(".ans").text("You have passed hurrah!");
  } else if ((percentage > 50) && (percentage < 79)) {
    $(".ans").text("You tried!");
  } else {
    $(".ans").text("You Have Failed!");
  }
    event.preventDefault();
  });
});
