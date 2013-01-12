
$(document).ready(function(){
var lexed=new Array;
$("#lex").click(function(){ 
  var lexed = [];
      var origText = $("#orig").val();
      var origPrep = origText.split(" ");
  
      origPrep.forEach(function(entry) {
        
        if(entry == "dance"){
          entry = "theory";
        }
        if(entry == "theory"){
          entry = "guess";
        }
        if(entry == "labor" || entry == "handicap" || entry == "achievement"){
          entry = "work";
        }
        if(entry.length >= 12){
          entry = "development";
        }
        if(entry == "literature"){
          var lit = entry.split("");
          entry = "";
          lexed.push(lit.join(" "));
        }
       
        else lexed.push(entry);
      });
      $("#lexed").val(lexed.join(" "));
    });
});

