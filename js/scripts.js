$(function(){
  $(".send").hide();
});
$(function(){
  $("#week").submit(function(event){
    var queThree = $("input:radio[name=flavor]:checked").val();
    var queFour = $("input:radio[name=taste]:checked").val();
    var queFive = $("input:radio[name=sour]:checked").val();
    var correct = 0;
    if(queThree=="doc"){
      correct++;
    }
    if(queFour=="con"){
      correct++;
    }
    if(queFive=="var"){
      correct++;
    }
    var score;
    if(correct<1){
      score=2;
    }
    if(correct>0 && correct < 3){
      score=1;
    }
    if(correct>2){
      score=0;
    }
    $(".ans").text(correct);
    $("#send").show();
    event.preventDefault();
  });
});
