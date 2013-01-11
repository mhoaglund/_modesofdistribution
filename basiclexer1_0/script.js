
$(document).ready(function(){
var lexed=new Array;
$("#lex").click(function(){ 
  var lexed = [];
      var origText = $("#orig").val();
      var origPrep = origText.split(" ");
  
      origPrep.forEach(function(entry) {
        
        if(entry == "dance"){
         lexed.push("theory"); 
        }
        if(entry == "theory"){
         lexed.push("guess"); 
        }
        if(entry == "labor" || entry == "handicap" || entry == "achievement"){
         lexed.push("work"); 
        }

        else lexed.push(entry);
      });
      $("#lexed").val("");
      $("#lexed").val(lexed.join(" "));
    });
});

