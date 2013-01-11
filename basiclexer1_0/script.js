
$(document).ready(function(){
var lexed=new Array;
$("#lex").click(function(){ 
      var origText = $("#orig").val();
      var origPrep = origText.split(" ");
  
      origPrep.forEach(function(entry) {
        
        if(entry == "dance"){
         lexed.push("theory"); 
        }
        if(entry == "theory"){
         lexed.push("guess"); 
        }
        else lexed.push(entry);
      });
      $("#lexed").val(" ");
      $("#lexed").val(lexed.join(" "));
    });
});

