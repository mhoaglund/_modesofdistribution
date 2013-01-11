var lexed=new Array;
$(document).ready(function(){
  
$("#lex").click(function(){ 
      var origText = $("#orig").val();
      var origPrep = origText.split(" ");
  
      origPrep.forEach(function(entry) {
        
        if(entry != "Dance"){
         lexed.push(entry); 
        }
      });
      $("#lexed").val(lexed.join(" "));
    });
});

