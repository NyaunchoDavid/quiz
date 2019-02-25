$(function(){
  $("form#week").submit(function(event){
    var queThree = parseInt($("input:radio[name=flavor]:checked").val());
    var queFour = parseInt($("input:radio[name=taste]:checked").val());
    var queFive = parseInt($("input:radio[name=sour]:checked").val());
    var correct = (queThree  + queFour + queFive);
    var percentage = ((correct / 3) * 100);
    $("#send").text("You have scored: " + percentage + "%");
  if (percentage > 80) {
    $("#see").text("You have passed hurrah!");
  } else if ((percentage > 50) && (percentage < 79)) {
    $("#see").text("You tried!");
  } else {
    $("#see").text("You Have Failed!");
  }
    event.preventDefault();
  });
});
