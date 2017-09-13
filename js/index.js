var clock=null;
var current="session";
$(document).ready(function(){
  
  clock=$("#timer").FlipClock({
  clockFace:"MinuteCounter",
  autoStart: false,
  countdown: true,
  callbacks: {
                stop: function() {
                  var value=clock.getTime();
                  if(value==0){
                   if(current=="session")
                     {
                       current="break";
                       //Break time
                       $("#msg").html("Break Time!!");
                       
                       clock.setTime(parseInt($("#break .value").text().trim(),10)*60);
                       clock.start();

                     }
                   else{
                       $("#msg").html("Work Time!!");
                       current="session";
                       clock.setTime(parseInt($("#session .value").text().trim(),10)*60);
                       clock.start();
                     //Start work session
                   } 
                  }
                    // alert("done");
                }
            }
  });
  clock.setTime(parseInt($("#session .value").text().trim(),10)*60);
});
$("#break .inc-time").click(function(){
  var value=parseInt($("#break .value").text().trim(),10);
  $("#break .value").html((value+1)>60?0:value+1);
});

$("#break .dec-time").click(function(){
  var value=parseInt($("#break .value").text().trim(),10);
  $("#break .value").html((value-1)<0?60:value-1); 
});

$("#session .inc-time").click(function(){
  var value=parseInt($("#session .value").text().trim(),10);
  $("#session .value").html((value+1)>60?0:value+1);
});

$("#session .dec-time").click(function(){
  var value=parseInt($("#session .value").text().trim(),10);
  $("#session .value").html((value-1)<0?60:value-1); 
});


$("#stop").click(function(){
  if($(this).text()=="Start"){
      clock.setTime(parseInt($("#session .value").text().trim(),10)*60);
      $("#msg").html("Work Time!!");
    $("#stop").html("Stop");
    clock.start();
  }
  else if($(this).text()==="Stop"){
    $(this).html("Resume");
    clock.stop();
    }
    else{
      $(this).html("Stop");
      clock.start();
     }
});

$("#reset").click(function(){
  clock.stop();
  $("#stop").html("Start");
  clock.setTime(parseInt($("#session .value").text().trim(),10)*60);
  current="session";
});